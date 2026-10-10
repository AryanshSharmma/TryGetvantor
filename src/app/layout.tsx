import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ variable: "--font-sans-face", subsets: ["latin"] });
const display = Newsreader({
  variable: "--font-display-face",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const TAB_TITLE = "GetVantor — Premium Web Studio";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: TAB_TITLE, template: `%s — ${site.name}` },
  description: site.description,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  keywords: ["web design studio", "custom website design", "website redesign", "bespoke web development"],
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#F9F9FB" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`dark ${sans.variable} ${display.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="relative font-sans text-body">
        <a
          href="#main"
          className="fixed left-3 top-3 z-[90] -translate-y-20 rounded-full bg-heading px-4 py-2 text-sm text-canvas transition-transform duration-300 ease-in-out focus:translate-y-0"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
