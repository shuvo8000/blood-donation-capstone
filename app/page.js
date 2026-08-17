import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="max-w-2xl">
        <span className="inline-block rounded-full bg-[var(--color-brand-light)] px-3 py-1 text-xs font-semibold text-[var(--color-brand-dark)]">
          Capstone Skeleton
        </span>
        <h1 className="mt-4 text-3xl font-bold text-[var(--color-brand-dark)] sm:text-4xl">
          Blood Donation Management System
        </h1>
        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          A frontend skeleton for connecting blood donors, recipients, and
          blood banks. This is an early routing scaffold — screens below are
          placeholders that will be built out in later milestones.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/donors"
            className="rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-brand-dark)]"
          >
            Search Donors
          </Link>
          <Link
            href="/register"
            className="rounded-md border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
          >
            Register as Donor
          </Link>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Donor Search", href: "/donors" },
          { label: "Register Donor", href: "/register" },
          { label: "Blood Bank", href: "/blood-bank" },
          { label: "Contact", href: "/contact" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm font-medium text-gray-700 transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
          >
            {item.label}
            <span className="mt-1 block text-xs font-normal text-gray-400">
              Placeholder screen
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
