import "./globals.css";
import { ReactNode } from "react";
export const metadata = {
  title: "Gelephu Guides — Community Tourism",
  description: "Guide-centric community tourism marketplace — Gelephu Mindfulness City"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-n-100 text-n-900">
          {children}
        </div>
        {/* Service worker registration stub */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker?.register('/service-worker.js').catch(()=>{/*sw failed*/});
              });
            }
          `
          }}
        />
      </body>
    </html>
  );
}
