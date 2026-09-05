"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, MapIcon, TicketIcon, UserIcon } from "@heroicons/react/24/outline";

export default function MobileShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen pb-20">
      <div>{children}</div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-3xl mx-auto flex justify-between px-4 py-2">
          <NavItem href="/guide/discover" label="Discover" active={pathname?.startsWith("/guide/discover")} icon={<MapIcon className="w-5 h-5" />} />
          <NavItem href="/guide/my-experiences" label="My" active={pathname?.startsWith("/guide/my-experiences")} icon={<TicketIcon className="w-5 h-5" />} />
          <NavItem href="/guide/bookings" label="Bookings" active={pathname?.startsWith("/guide/bookings")} icon={<HomeIcon className="w-5 h-5" />} />
          <NavItem href="/guide/profile" label="Profile" active={pathname?.startsWith("/guide/profile")} icon={<UserIcon className="w-5 h-5" />} />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ href, label, active, icon }: { href: string; label: string; active?: boolean; icon: React.ReactNode }) {
  return (
    <Link href={href} className={`flex flex-col items-center text-xs gap-1 ${active ? "text-primary" : "text-gray-600"}`}>
      <div className="w-6 h-6">{icon}</div>
      <span>{label}</span>
    </Link>
  );
}
