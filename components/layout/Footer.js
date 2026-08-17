import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-6 text-center text-sm text-gray-500 sm:flex-row sm:justify-between">
        <span>BloodConnect — Capstone skeleton. Built with Next.js.</span>
        <Link
          href="/health"
          className="text-xs font-medium text-gray-400 transition-colors hover:text-[var(--color-brand)]"
        >
          Health Check
        </Link>
      </div>
    </footer>
  );
}
