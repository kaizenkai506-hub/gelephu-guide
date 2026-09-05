"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HostCreate() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [price, setPrice] = useState(25);
  const router = useRouter();

  function submit() {
    // For prototype, simply store in localStorage and navigate to status
    const id = `exp-local-${Date.now()}`;
    const payload = { id, title, summary, price, status: "pending_verification" };
    localStorage.setItem(id, JSON.stringify(payload));
    router.push("/host/status");
  }

  return (
    <main className="p-4">
      <h1 className="text-lg font-medium">Create Experience</h1>

      <div className="space-y-3 mt-4">
        <label className="text-sm">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-lg border px-3 py-2" />

        <label className="text-sm">Short summary</label>
        <textarea value={summary} onChange={(e) => setSummary(e.target.value)} className="w-full rounded-lg border px-3 py-2" />

        <label className="text-sm">Price per person (USD)</label>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full rounded-lg border px-3 py-2" />

        <div className="flex gap-2">
          <button className="flex-1 rounded-lg bg-primary text-white py-2" onClick={submit}>Submit for verification</button>
        </div>
      </div>
    </main>
  );
}
