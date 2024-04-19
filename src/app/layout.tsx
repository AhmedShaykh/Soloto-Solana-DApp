import Web3ModalProvider from "@/Components/Provider";
import { Provider } from "@/Components/ui/Provider";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { config } from "@/config";
import { cookieToInitialState } from "wagmi";
import { headers } from "next/headers";
import { myFont } from "@/static/font";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOLOTO DAPP",
  description: "SOLOTO DAPP",
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

  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en" className={myFont.className}>
      <body>
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Web3ModalProvider initialState={initialState}>
            <div className="shadowBgLight">
              <div className="shadowBg">
                <Navbar />
                {children}
              </div>
            </div>
            <Footer />
          </Web3ModalProvider>
        </Provider>
      </body>
    </html>
  );
};