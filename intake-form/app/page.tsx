'use client';

import { useState, useEffect, FormEvent } from 'react';
import { questions, sections, projectInfo } from '@/questions-config';
import { useRouter } from 'next/navigation';

export default function IntakeForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [files, setFiles] = useState<Record<string, File[]>>({});
  const [otherText, setOtherText] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<string>('');
  const [showMissingFields, setShowMissingFields] = useState(false);

  // Auto-save to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('intake-form-draft');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed.formData || {});
        setOtherText(parsed.otherText || {});
      } catch (e) {
        console.error('Failed to load saved draft');
      }
    }
  }, []);

  useEffect(() => {
    const draftData = {
      formData,
      otherText,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem('intake-form-draft', JSON.stringify(draftData));
  }, [formData, otherText]);

  // Calculate completion percentage
  const requiredQuestions = questions.filter(q => q.required);
  const completedRequired = requiredQuestions.filter(q => {
    const value = formData[q.id];
    return value && (Array.isArray(value) ? value.length > 0 : value.toString().trim() !== '');
  });
  const completionPercentage = Math.round((completedRequired.length / requiredQuestions.length) * 100);

  // Get missing required fields
  const missingRequiredFields = requiredQuestions.filter(q => {
    const value = formData[q.id];
    return !value || (Array.isArray(value) && value.length === 0) || value.toString().trim() === '';
  });

  // Scroll to a specific question
  const scrollToQuestion = (questionId: string) => {
    const element = document.getElementById(`question-${questionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Highlight the question briefly
      element.classList.add('ring-2', 'ring-[var(--accent)]', 'ring-offset-2', 'ring-offset-[var(--background)]');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-[var(--accent)]', 'ring-offset-2', 'ring-offset-[var(--background)]');
      }, 2000);
    }
    setShowMissingFields(false);
  };

  const handleInputChange = (questionId: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleFileChange = (questionId: string, fileList: FileList | null) => {
    if (fileList) {
      setFiles(prev => ({
        ...prev,
        [questionId]: Array.from(fileList)
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Validate required fields
      if (missingRequiredFields.length > 0) {
        setError('Please fill in all required fields');
        setShowMissingFields(true);
        setIsSubmitting(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Upload files to Supabase Storage
      const uploadedFilesInfo = [];
      for (const [questionId, fileList] of Object.entries(files)) {
        const uploadedUrls = [];

        for (const file of fileList) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('questionId', questionId);
          formData.append('clientName', projectInfo.clientName);

          try {
            const uploadResponse = await fetch('/api/upload', {
              method: 'POST',
              body: formData,
            });

            if (!uploadResponse.ok) {
              throw new Error(`Failed to upload ${file.name}`);
            }

            const uploadResult = await uploadResponse.json();
            uploadedUrls.push({
              fileName: file.name,
              fileUrl: uploadResult.url,
              fileSize: file.size
            });
          } catch (uploadErr) {
            console.error(`Upload error for ${file.name}:`, uploadErr);
            throw new Error(`Failed to upload file: ${file.name}`);
          }
        }

        if (uploadedUrls.length > 0) {
          uploadedFilesInfo.push({
            question_id: questionId,
            files: uploadedUrls
          });
        }
      }

      // Prepare submission data
      const submissionData = {
        project_name: projectInfo.projectName,
        client_name: projectInfo.clientName,
        submitted_at: new Date().toISOString(),
        responses: formData,
        other_responses: otherText,
        files_uploaded: uploadedFilesInfo
      };

      // Submit to API
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Clear saved draft
      localStorage.removeItem('intake-form-draft');

      // Redirect to thank you page
      router.push('/thank-you');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again or contact oliver@coldlava.ai');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestion = (question: typeof questions[0]) => {
    const commonProps = {
      id: question.id,
      required: question.required,
      className: 'form-input',
      onChange: (e: any) => handleInputChange(question.id, e.target.value),
      value: formData[question.id] || ''
    };

    switch (question.type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <input
            {...commonProps}
            type={question.type}
            placeholder={question.placeholder}
          />
        );

      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={4}
            placeholder={question.placeholder}
          />
        );

      case 'select':
        const selectHasOther = question.options?.includes('Other');
        const selectOtherSelected = formData[question.id] === 'Other';
        const isCISQuestion = question.id === 'documents_cis';
        const cisWillProvide = isCISQuestion && formData[question.id] === 'Yes - will provide';

        return (
          <div className="space-y-2">
            <select {...commonProps}>
              <option value="">Select an option...</option>
              {question.options?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

            {/* Show text field if "Other" is selected */}
            {selectHasOther && selectOtherSelected && (
              <input
                type="text"
                placeholder="Please specify..."
                value={otherText[question.id] || ''}
                onChange={(e) => {
                  setOtherText(prev => ({
                    ...prev,
                    [question.id]: e.target.value
                  }));
                }}
                className="form-input"
              />
            )}

            {/* Show file upload if CIS "Yes - will provide" is selected */}
            {cisWillProvide && (
              <div>
                <input
                  type="file"
                  id={`${question.id}_file`}
                  onChange={(e) => handleFileChange(`${question.id}_file`, e.target.files)}
                  className="form-input"
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                />
                {files[`${question.id}_file`] && (
                  <div className="mt-2 text-sm text-[var(--text-muted)]">
                    {files[`${question.id}_file`].length} file(s) selected
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 'multiselect':
        const hasOther = question.options?.includes('Other');
        const isOtherSelected = formData[question.id]?.includes('Other');

        return (
          <div className="space-y-3">
            {question.options?.map(option => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer hover:bg-[var(--surface)]/50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  checked={formData[question.id]?.includes(option) || false}
                  onChange={(e) => {
                    const current = formData[question.id] || [];
                    const updated = e.target.checked
                      ? [...current, option]
                      : current.filter((v: string) => v !== option);
                    handleInputChange(question.id, updated);
                  }}
                  className="w-5 h-5 rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)] focus:ring-offset-[var(--background)]"
                />
                <span className="text-[var(--text)] text-base">{option}</span>
              </label>
            ))}

            {/* Show text field if "Other" is selected */}
            {hasOther && isOtherSelected && (
              <div className="ml-8 mt-2">
                <input
                  type="text"
                  placeholder="Please specify..."
                  value={otherText[question.id] || ''}
                  onChange={(e) => {
                    setOtherText(prev => ({
                      ...prev,
                      [question.id]: e.target.value
                    }));
                  }}
                  className="form-input"
                />
              </div>
            )}
          </div>
        );

      case 'file':
        return (
          <div>
            <input
              type="file"
              id={question.id}
              multiple={question.multipleFiles}
              required={question.required}
              onChange={(e) => handleFileChange(question.id, e.target.files)}
              className="form-input"
              accept=".pdf,.doc,.docx,.xls,.xlsx"
            />
            {files[question.id] && (
              <div className="mt-2 text-sm text-[var(--text-muted)]">
                {files[question.id].length} file(s) selected
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Progress Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--surface)] border-b border-[var(--border)] shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-white">Form Progress</span>
            <span className="text-sm font-bold text-[var(--accent)]">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-[var(--background)] rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-alt)] transition-all duration-500 ease-out"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            {completedRequired.length} of {requiredQuestions.length} required fields completed
            {completionPercentage > 0 && " • Auto-saved ✓"}
          </p>
        </div>
      </div>

      {/* Spacer for fixed progress bar */}
      <div className="h-24" />

      {/* Section Navigation - Desktop only */}
      <div className="hidden lg:block fixed left-4 top-32 z-40 w-48">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 shadow-lg">
          <h3 className="text-xs font-bold text-[var(--accent)] mb-2 uppercase tracking-wide">Quick Navigation</h3>
          <div className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
            {sections.map((section, idx) => {
              const phase = section.includes('Phase 1') ? '1' : section.includes('Phase 2') ? '2' : section.includes('Phase 3') ? '3' : '';
              const shortName = section.replace(/Phase \d: /, '').replace(/ \(.*\)/, '');
              const questionsInSection = questions.filter(q => q.section === section);
              const requiredInSection = questionsInSection.filter(q => q.required);
              const completedInSection = questionsInSection.filter(q => {
                const value = formData[q.id];
                return value && (Array.isArray(value) ? value.length > 0 : value.toString().trim() !== '');
              });
              const completedRequiredInSection = requiredInSection.filter(q => {
                const value = formData[q.id];
                return value && (Array.isArray(value) ? value.length > 0 : value.toString().trim() !== '');
              });
              const sectionComplete = requiredInSection.length > 0 && completedRequiredInSection.length === requiredInSection.length;
              const hasRequiredFields = requiredInSection.length > 0;

              return (
                <button
                  key={section}
                  onClick={() => {
                    const element = document.getElementById(`section-${idx}`);
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="w-full text-left px-2 py-1.5 rounded text-xs hover:bg-[var(--accent)]/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {phase && <span className="text-[var(--accent)] font-bold">P{phase}</span>}
                    <span className={sectionComplete ? 'text-[var(--accent)] font-medium' : 'text-[var(--text-muted)]'}>
                      {shortName}
                    </span>
                    {sectionComplete && <span className="ml-auto text-[var(--accent)] text-sm">✓</span>}
                  </div>
                  {hasRequiredFields && (
                    <div className="mt-1 text-[10px]">
                      <span className={completedRequiredInSection.length === requiredInSection.length ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}>
                        {completedRequiredInSection.length}/{requiredInSection.length} required
                      </span>
                      {completedInSection.length > completedRequiredInSection.length && (
                        <span className="text-[var(--text-subtle)] ml-1">
                          +{completedInSection.length - completedRequiredInSection.length} optional
                        </span>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="section-card">
        <h2 className="text-3xl font-bold text-white mb-4">
          Project Intake Form
        </h2>
        <p className="text-[var(--text-muted)] mb-2">
          <strong className="text-white">Client:</strong> {projectInfo.clientName}
        </p>
        <p className="text-[var(--text-muted)] mb-4">
          <strong className="text-white">Project:</strong> {projectInfo.projectName}
        </p>
        <p className="text-[var(--text-muted)] mb-4">
          Please answer the following questions to help us understand your requirements and provide an accurate proposal.
          This should take about 15-20 minutes. Your responses will be saved securely.
        </p>

        <div className="bg-[var(--background)] border border-[var(--accent)]/30 rounded-lg p-4 mt-4">
          <h3 className="text-lg font-semibold text-[var(--accent)] mb-2">Three-Phase Approach</h3>
          <div className="space-y-2 text-[var(--text-muted)] text-sm">
            <p><strong className="text-white">Phase 1: Core CRM</strong> - Essential features for daily operations (client management, deal tracking, document storage)</p>
            <p><strong className="text-white">Phase 2: Automation</strong> - Workflow automation, notifications, e-signatures, and integrations</p>
            <p><strong className="text-white">Phase 3: Advanced Features</strong> - Commission management, advanced reporting, compliance tools</p>
          </div>
          <p className="text-xs text-[var(--text-subtle)] mt-3">Questions are organized by phase to help prioritize features and provide accurate phased pricing.</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {sections.map((section, sectionIndex) => (
          <div key={section} id={`section-${sectionIndex}`} className="section-card">
            <h3 className="section-title">{section}</h3>

            <div className="space-y-8">
              {questions
                .filter(q => q.section === section)
                .map((question, questionIndex) => (
                  <div key={question.id} id={`question-${question.id}`} className="space-y-3 pb-6 border-b border-[var(--border)]/30 last:border-b-0 last:pb-0 transition-all rounded-lg">
                    <label htmlFor={question.id} className="form-label">
                      {question.question}
                      {question.required && <span className="text-[var(--accent)] ml-1">*</span>}
                    </label>

                    {renderQuestion(question)}

                    {question.helpText && (
                      <p className="form-help">{question.helpText}</p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Error Display */}
        {error && (
          <div className="section-card bg-red-900/20 border-red-500">
            <p className="text-red-400 font-semibold mb-3">{error}</p>

            {showMissingFields && missingRequiredFields.length > 0 && (
              <div className="mt-4">
                <p className="text-white font-medium mb-3">Missing required fields ({missingRequiredFields.length}):</p>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {missingRequiredFields.map(q => (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => scrollToQuestion(q.id)}
                      className="w-full text-left px-4 py-3 bg-[var(--surface)] hover:bg-[var(--accent)]/10 border border-[var(--border)] rounded-lg transition-colors flex items-start gap-3 group"
                    >
                      <span className="text-[var(--accent)] mt-0.5 group-hover:scale-110 transition-transform">→</span>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">{q.question}</p>
                        <p className="text-[var(--text-muted)] text-xs mt-1">{q.section}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-[var(--text-muted)] text-xs mt-3">Click any field to navigate to it</p>
              </div>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="section-card">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Intake Form'}
          </button>
          <p className="text-center text-[var(--text-muted)] text-sm mt-4">
            Once submitted, we'll review your responses and get back to you within 2-3 business days.
          </p>
        </div>
      </form>
    </div>
  );
}
