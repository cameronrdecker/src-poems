import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Src: Poems",
  description: "Src: Poems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-webtui-theme="nord">
      <body>
        <div style={{display:"grid", gridTemplateColumns: '32ch auto', gap: '2ch'}}>
          <Menu/>
          <div box-="square" style={{margin: '2ch'}} >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
