import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Particles } from "@/components/ui/particles";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// export const metadata: Metadata = {
//   metadataBase: new URL(DATA.url),
//   title: {
//     default: DATA.name,
//     template: `%s | ${DATA.name}`,
//   },
//   description: DATA.description,

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     title: `${DATA.name}`,
//     card: "summary_large_image",
//   },
//   verification: {
//     google: "",
//     yandex: "",
//   },
// };

const SITE_URL = `https://cryptolancer.in`;
const PREVIEW = `https://cryptolancer.in/preview.png`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Kritik Sah</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO */}
        <meta name="keywords" content="" />
        <meta name="description" content="Kritik Sah - Full-Stack Developer" />

        {/* Schema.org */}
        <meta itemProp="name" content="Kritik Sah" />
        <meta
          itemProp="description"
          content="Kritik Sah - Full-Stack Developer"
        />
        <meta itemProp="image" content={PREVIEW} />

        {/* Open Graph (Telegram reads these) */}
        <meta property="og:title" content="Kritik Sah" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={PREVIEW} />
        <meta property="og:image:secure_url" content={PREVIEW} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content="Kritik Sah - Full-Stack Developer"
        />
        <meta property="og:site_name" content="Kritik Sah" />

        {/* Twitter Card (nice for X but ignored by Telegram) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kritik Sah" />
        <meta
          name="twitter:description"
          content="Kritik Sah - Full-Stack Developer"
        />
        <meta name="twitter:image" content={PREVIEW} />

        <link rel="canonical" href={SITE_URL} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Particles
            className="fixed top-0 left-0 -z-50 w-full h-full"
            color={
              typeof window !== "undefined" &&
              document.documentElement.classList.contains("dark")
                ? "#f0f0f0"
                : "#0f0f0f"
            }
          />
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
