"use client";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="p-4">
      <h1 className="text-lg font-medium">Admin Dashboard</h1>
      <p className="text-sm text-gray-600 mt-1">Verification queues and reports (UI-only prototypes)</p>

      <div className="mt-4 space-y-3">
        <Link href="/admin/guides" className="card p-4">
          <h2 className="font-medium">Guide Verification</h2>
          <p className="text-sm text-gray-600 mt-1">Review & verify new guide applications</p>
        </Link>

        <Link href="/admin/hosts" className="card p-4">
          <h2 className="font-medium">Host Verification</h2>
          <p className="text-sm text-gray-600 mt-1">Approve host-submitted experiences</p>
        </Link>

        <Link href="/admin/experiences" className="card p-4">
          <h2 className="font-medium">Experience Verification</h2>
          <p className="text-sm text-gray-600 mt-1">Review experiences before they go live</p>
        </Link>

        <Link href="/admin/bookings" className="card p-4">
          <h2 className="font-medium">Booking Management</h2>
          <p className="text-sm text-gray-600 mt-1">View & manage bookings (UI only)</p>
        </Link>
      </div>
    </main>
  );
}
