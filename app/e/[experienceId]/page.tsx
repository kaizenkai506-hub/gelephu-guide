"use client";
import { experiences } from "../../../lib/sample-data";
import Link from "next/link";

export default function ExperiencePublicDetail({ params }: { params: { experienceId: string } }) {
  const exp = experiences.find((x) => x.id === params.experienceId);
  if (!exp) return <main className="p-4">Experience not found.</main>;

  return (
    <main className="p-4">
      <div className="card">
        <div className="h-56 bg-gray-200">
          <img src={exp.images[0]} alt={exp.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h1 className="text-lg font-medium">{exp.title}</h1>
          <p className="text-sm text-gray-600 mt-2">{exp.summary}</p>

          <div className="mt-4 flex justify-between text-sm">
            <div>Price: ${exp.pricePerPerson}</div>
            <div>Duration: {Math.round(exp.durationMins / 60)}h</div>
          </div>

          <div className="mt-4">
            <Link href={`/e/${exp.id}/book`} className="block rounded-lg bg-primary text-white px-4 py-3 text-center">Book as Guest</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
