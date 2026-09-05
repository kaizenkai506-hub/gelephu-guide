"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { experiences } from "../../../../lib/sample-data";

export default function GuestBooking({ params }: { params: { experienceId: string } }) {
  const exp = experiences.find((x) => x.id === params.experienceId);
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");

  if (!exp) return <main className="p-4">Experience not found.</main>;

  function submit() {
    // In the real app we'd POST to Supabase; here we simulate an ID
    const bookingId = `bk-${Date.now()}`;
    // store booking in localStorage for demo
    const booking = {
      id: bookingId,
      experienceId: exp.id,
      name,
      phone,
      guests,
      date,
      status: "confirmed"
    };
    localStorage.setItem(`booking:${bookingId}`, JSON.stringify(booking));
    router.push(`/confirm/${bookingId}`);
  }

  return (
    <main className="p-4">
      <header className="mb-3">
        <h1 className="text-lg font-medium">Book — {exp.title}</h1>
      </header>

      <div className="space-y-3">
        <label className="block text-sm">Preferred date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-lg border px-3 py-2" />

        <label className="block text-sm">Guest name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className="w-full rounded-lg border px-3 py-2" />

        <label className="block text-sm">Phone (for booking)</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+975 ..." className="w-full rounded-lg border px-3 py-2" />

        <label className="block text-sm">Guests</label>
        <input type="number" min={1} max={exp.capacity} value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full rounded-lg border px-3 py-2" />

        <button className="w-full rounded-lg bg-accent text-white py-3" onClick={submit}>Confirm Booking</button>
      </div>
    </main>
  );
}
