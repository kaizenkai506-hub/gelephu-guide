"use client";
import { useRouter } from "next/navigation";
import { experiences } from "../../../../lib/sample-data";

export default function GuideExperienceDetail({ params }: { params: { id: string } }) {
  // client side lookup for prototype
  const exp = experiences.find((x) => x.id === params.id);
  const router = useRouter();
  if (!exp) return <main className="p-4">Experience not found.</main>;

  return (
    <main className="p-4">
      <button className="text-sm text-primary mb-3" onClick={() => router.back()}>
        ← Back
      </button>
      <div className="card overflow-hidden">
        <div className="h-60 bg-gray-200">
          <img src={exp.images[0]} alt={exp.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h1 className="text-lg font-medium">{exp.title}</h1>
          <p className="text-sm text-gray-600 mt-2">{exp.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <div className="text-sm">Host: {exp.hostName}</div>
            <div className="text-sm">Village: {exp.village}</div>
            <div className="text-sm">Capacity: {exp.capacity}</div>
            <div className="text-sm">Price: ${exp.pricePerPerson}</div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-lg bg-accent text-white py-2">Add to curated experiences</button>
            <a className="flex-1 rounded-lg border py-2 text-center">Share link</a>
          </div>
        </div>
      </div>
    </main>
  );
}
