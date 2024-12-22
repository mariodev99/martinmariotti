import Nav from "@/components/nav";
import { useTranslations } from "next-intl";
import "../globals.css";

export const metadata = {
  title: "Mariotti Real Estate",
  description: "Inversiones seguras en el sector inmobiliario",
};

export default function RootLayout({ children }) {
  const t = useTranslations("nav");

  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
