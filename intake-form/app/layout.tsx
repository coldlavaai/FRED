import type { Metadata } from "next";
import Image from "next/image";
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
          <header className="cold-lava-gradient shadow-lg border-b-2 border-[var(--accent)]/30">
            <div className="max-w-4xl mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/coldlava-logo.png"
                    alt="Cold Lava"
                    width={180}
                    height={50}
                    priority
                    className="h-auto"
                  />
                </div>
                <div className="text-right text-white/90 text-sm hidden md:block">
                  <p className="font-medium">oliver@coldlava.ai</p>
                  <p className="text-[var(--accent)]">coldlava.ai</p>
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
                <a href="https://coldlava.ai" className="text-[var(--accent)] hover:underline transition-colors">
                  coldlava.ai
                </a>
                {" | "}
                <a href="mailto:oliver@coldlava.ai" className="text-[var(--accent)] hover:underline transition-colors">
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
