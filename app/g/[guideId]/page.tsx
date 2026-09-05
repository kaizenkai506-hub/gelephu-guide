"use client";
import ExperienceCard from "../../../components/ui/ExperienceCard";
import { guides, experiences } from "../../../lib/sample-data";
import Link from "next/link";

export default function GuidePublicProfile({ params }: { params: { guideId: string } }) {
  const guide = guides.find((g) => g.id === params.guideId);
  if (!guide) return <main className="p-4">Guide not found.</main>;
  // Recommend experiences curated by this guide or active experiences
  const recommended = experiences.filter((e) => (e.curatedBy?.some((c) => c.guideId === guide.id) ?? false) || e.status === "active");

  return (
    <main className="p-4">
      <header className="flex items-center gap-3 mb-4">
        <img src={guide.avatar || "/images/guides/default.jpg"} alt={guide.name} className="w-14 h-14 rounded-full object-cover" />
        <div>
          <h1 className="text-lg font-medium">{guide.name}</h1>
          <p className="text-sm text-gray-600">{guide.verified ? "Verified Guide" : "Guide"}</p>
        </div>
      </header>

      <section>
        <h2 className="text-sm font-medium mb-2">Recommended Experiences</h2>
        <div className="space-y-3">
          {recommended.map((e) => (
            <ExperienceCard key={e.id} id={e.id} title={e.title} summary={e.summary} price={e.pricePerPerson} duration={`${Math.round(e.durationMins/60)}h`} image={e.images[0]} hostName={e.hostName} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/e/exp-gelephu-001" className="rounded-lg bg-primary text-white px-4 py-3">Book one as guest</Link>
        </div>
      </section>
    </main>
  );
}
