import { Provider } from "@/Components/ui/Provider";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { myFont } from "@/static/font";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOLOTO SOLANA",
  description: "SOLOTO SOLANA",
  icons: {
    icon: [
      {
        url: "/soloto.svg",
        href: "/soloto.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="shadowBgLight">
            <div className="shadowBg">
              <Navbar />
              {children}
            </div>
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};