import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://portfolio-8dfdnfj50-cam-giving2.vercel.app/"),

	title: 'earbunsong',
	authors: {
		name: "earbunsong",
	},

	description:
		"Based in Cambodia, I'm a Fullstack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Portfolio",
		description:
			"Based in Cambodia, I'm a Fullstack developer passionate about building a modern web application that users love.",
		url: "https://portfolio-8dfdnfj50-cam-giving2.vercel.app/",
		siteName: "earbunsong",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "earbunsong", "songdevkh"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
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
