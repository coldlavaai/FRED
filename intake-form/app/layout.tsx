import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Intake Form | Cold Lava",
  description: "Client project intake questionnaire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[var(--background)]">
          {/* Header */}
          <header className="cold-lava-gradient shadow-lg">
            <div className="max-w-4xl mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">Cold Lava</h1>
                  <p className="text-white/80 text-sm">AI Automation & Development</p>
                </div>
                <div className="text-right text-white/90 text-sm">
                  <p>oliver@coldlava.ai</p>
                  <p>coldlava.ai</p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-4xl mx-auto px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-[var(--border)] mt-16 py-8">
            <div className="max-w-4xl mx-auto px-4 text-center text-[var(--text-muted)] text-sm">
              <p>© 2025 Cold Lava. All rights reserved.</p>
              <p className="mt-2">
                <a href="https://coldlava.ai" className="text-[var(--primary)] hover:underline">
                  coldlava.ai
                </a>
                {" | "}
                <a href="mailto:oliver@coldlava.ai" className="text-[var(--primary)] hover:underline">
                  oliver@coldlava.ai
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
