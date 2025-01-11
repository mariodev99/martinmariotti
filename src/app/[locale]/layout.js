import Nav from "@/components/nav";
import { useTranslations } from "next-intl";
import "../globals.css";
import StartAnimation from "@/components/StartAnimation";

export const metadata = {
  title: "Mariotti Real Estate",
  description: "Inversiones seguras en el sector inmobiliario",
};

export default function RootLayout({ children }) {
  const t = useTranslations("nav");

  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <StartAnimation />
        <Nav />
        {children}
      </body>
    </html>
  );
}
