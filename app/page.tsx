"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-5">
      <header className="mb-6">
        <h1 className="text-2xl font-display text-primary">Gelephu • Mindfulness City</h1>
        <p className="mt-2 text-sm text-gray-600">Guide-centric community experiences — mobile-first prototype.</p>
      </header>

      <section className="grid gap-4">
        <Link href="/guide/discover" className="card p-4">
          <h2 className="font-medium">Open Guide App</h2>
          <p className="text-sm text-gray-600 mt-1">Discover, curate, and share experiences as a verified guide.</p>
        </Link>

        <Link href="/host/dashboard" className="card p-4">
          <h2 className="font-medium">Host Dashboard</h2>
          <p className="text-sm text-gray-600 mt-1">Create experiences for review and listing in the marketplace.</p>
        </Link>

        <Link href="/admin/dashboard" className="card p-4">
          <h2 className="font-medium">Admin Console</h2>
          <p className="text-sm text-gray-600 mt-1">Review verifications and manage listings & bookings (UI only).</p>
        </Link>

        <Link href="/g/guide-sonam" className="card p-4">
          <h2 className="font-medium">Public Guide Profile (Guest)</h2>
          <p className="text-sm text-gray-600 mt-1">Visit as a tourist via shared link / QR code.</p>
        </Link>
      </section>
    </main>
  );
}
