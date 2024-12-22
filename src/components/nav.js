import { useTranslations } from "next-intl";
import { LogoIcon } from "./icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Nav() {
  const t = useTranslations("nav");

  return (
    <div className="px-5 w-full flex justify-between items-center py-5 font-medium  top-0 z-50 fixed">
      <div>
        <LogoIcon />
      </div>
      <div className="hidden md:flex items-center gap-2 py-2 px-4 rounded-full bg-[#161616] text-white">
        <div>{t("home_nav")}</div>
        <div>{t("services_nav")}</div>
        <div>{t("about_nav")}</div>
        <div>{t("contact_nav")}</div>
      </div>
      <div className="hidden md:flex md:first-line:flex items-center gap-2">
        <div>select</div>
        <div>contact</div>
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden bg-black rounded-xl p-3">
          <Menu className="stroke-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
