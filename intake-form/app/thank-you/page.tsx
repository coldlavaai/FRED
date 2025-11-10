export default function ThankYou() {
  return (
    <div className="section-card text-center">
      <div className="inline-block p-4 bg-[var(--primary)]/10 rounded-full mb-6">
        <svg
          className="w-16 h-16 text-[var(--primary)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-white mb-4">
        Thank You!
      </h1>

      <p className="text-[var(--text-muted)] text-lg mb-6">
        Your intake form has been submitted successfully.
      </p>

      <div className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-white mb-3">What happens next?</h2>
        <ul className="text-left text-[var(--text-muted)] space-y-2">
          <li className="flex items-start">
            <span className="text-[var(--primary)] mr-2">•</span>
            We'll review your responses within 2-3 business days
          </li>
          <li className="flex items-start">
            <span className="text-[var(--primary)] mr-2">•</span>
            We'll reach out if we need any clarifications
          </li>
          <li className="flex items-start">
            <span className="text-[var(--primary)] mr-2">•</span>
            You'll receive a detailed proposal with pricing and timeline
          </li>
          <li className="flex items-start">
            <span className="text-[var(--primary)] mr-2">•</span>
            We can schedule a call to discuss the proposal
          </li>
        </ul>
      </div>

      <div className="text-[var(--text-muted)]">
        <p className="mb-2">Have questions in the meantime?</p>
        <a
          href="mailto:oliver@coldlava.ai"
          className="text-[var(--primary)] hover:underline font-semibold"
        >
          oliver@coldlava.ai
        </a>
      </div>

      <div className="mt-8">
        <a
          href="https://coldlava.ai"
          className="text-[var(--primary)] hover:underline"
        >
          ← Back to Cold Lava website
        </a>
      </div>
    </div>
  );
}
