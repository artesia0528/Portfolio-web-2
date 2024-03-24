import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: "krisnaAditya",
	authors: {
		name: "krisnaAditya",
	},

	description:
		"I'm a front-end developer who enjoys designing and building web applications.",
	openGraph: {
		title: "krisnaAditya",
		description:
			"I'm a front-end developer who enjoys designing and building web applications.",
		url: "http://localhost:3000/",
		siteName: "krisnaAditya",
		images: "/og.png",
		type: "website",
	},
	keywords: ["krisnaAditya", "portfolio", "nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
            <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
      </body>
    </html>
  );
}
