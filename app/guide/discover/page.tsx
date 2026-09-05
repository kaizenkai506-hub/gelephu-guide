"use client";
import MobileShell from "../../../components/layout/MobileShell";
import ExperienceCard from "../../../components/ui/ExperienceCard";
import { experiences } from "../../../lib/sample-data";

export default function DiscoverPage() {
  return (
    <MobileShell>
      <main className="p-4">
        <header className="mb-3">
          <h1 className="text-lg font-medium">Discover Experiences</h1>
          <p className="text-sm text-gray-600">Curated for mindful tourists — tap to view details and curate to your list.</p>
        </header>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input aria-label="Search experiences" placeholder="Search experiences, hosts, villages" className="flex-1 rounded-lg border px-3 py-2 text-sm" />
            <button className="px-3 py-2 rounded-lg bg-primary text-white text-sm">Filter</button>
          </div>

          <ul className="grid gap-3">
            {experiences.map((e) => (
              <li key={e.id}>
                <ExperienceCard id={e.id} title={e.title} summary={e.summary} price={e.pricePerPerson} duration={`${Math.round(e.durationMins/60)}h`} image={e.images[0]} hostName={e.hostName} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </MobileShell>
  );
}
