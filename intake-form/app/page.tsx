'use client';

import { useState, FormEvent } from 'react';
import { questions, sections, projectInfo } from '@/questions-config';
import { useRouter } from 'next/navigation';

export default function IntakeForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [files, setFiles] = useState<Record<string, File[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      const missingFields = questions
        .filter(q => q.required && !formData[q.id])
        .map(q => q.question);

      if (missingFields.length > 0) {
        setError(`Please fill in all required fields: ${missingFields.join(', ')}`);
        setIsSubmitting(false);
        return;
      }

      // Prepare submission data
      const submissionData = {
        project_name: projectInfo.projectName,
        client_name: projectInfo.clientName,
        submitted_at: new Date().toISOString(),
        responses: formData,
        files_uploaded: Object.keys(files).map(key => ({
          question_id: key,
          file_count: files[key].length,
          file_names: files[key].map(f => f.name)
        }))
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

      // Redirect to thank you page
      router.push('/thank-you');
    } catch (err) {
      setError('Failed to submit form. Please try again or contact oliver@coldlava.ai');
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
        return (
          <select {...commonProps}>
            <option value="">Select an option...</option>
            {question.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );

      case 'multiselect':
        return (
          <div className="space-y-2">
            {question.options?.map(option => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
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
                  className="w-4 h-4 rounded border-gray-600 text-[var(--primary)] focus:ring-[var(--primary)]"
                />
                <span className="text-[var(--text)]">{option}</span>
              </label>
            ))}
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
        <p className="text-[var(--text-muted)]">
          Please answer the following questions to help us understand your requirements and provide an accurate proposal.
          This should take about 15-20 minutes. Your responses will be saved securely.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {sections.map((section, sectionIndex) => (
          <div key={section} className="section-card">
            <h3 className="section-title">{section}</h3>

            <div className="space-y-6">
              {questions
                .filter(q => q.section === section)
                .map((question, questionIndex) => (
                  <div key={question.id} className="space-y-2">
                    <label htmlFor={question.id} className="form-label">
                      {question.question}
                      {question.required && <span className="text-[var(--primary)] ml-1">*</span>}
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
            <p className="text-red-400">{error}</p>
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
