import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'AI Job Agent Dashboard',
  description: 'Read-only dashboard for your n8n AI Job Application Agent',
};

const nav = [
  ['Dashboard', '/dashboard'],
  ['Jobs', '/jobs'],
  ['Emails', '/emails'],
  ['Follow-ups', '/follow-ups'],
  ['Settings', '/settings'],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen max-w-7xl p-6">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">AI Job Agent</h1>
            <nav className="flex gap-2 text-sm">
              {nav.map(([label, href]) => <Link key={href} className="rounded-md border bg-white px-3 py-1" href={href}>{label}</Link>)}
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
