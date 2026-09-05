"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";

export default function BookingConfirm({ params }: { params: { bookingId: string } }) {
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const raw = localStorage.getItem(`booking:${params.bookingId}`);
    if (raw) setBooking(JSON.parse(raw));
  }, [params.bookingId]);

  if (!booking) return <main className="p-4">Booking not found.</main>;

  const shareUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/confirm/${booking.id}`;

  return (
    <main className="p-4">
      <div className="card p-4">
        <h1 className="text-lg font-medium">Booking Confirmed</h1>
        <p className="text-sm text-gray-600 mt-2">Thank you {booking.name}. Your booking is confirmed for {booking.date}.</p>

        <div className="mt-4">
          <h2 className="text-sm font-medium">Booking ID</h2>
          <div className="mt-2 font-mono text-sm bg-gray-50 p-2 rounded">{booking.id}</div>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-medium">Share / Save</h2>
          <div className="mt-2 flex items-center gap-3">
            <QRCode value={shareUrl} size={96} />
            <div>
              <a className="block text-sm text-primary" href={shareUrl}>Open confirmation link</a>
              <button className="mt-2 rounded bg-primary text-white px-3 py-2">Add to calendar (stub)</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
