import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "KOL Workspace",
  description: "Internal tool for KOL Specialist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ padding: 32, width: "100%" }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
