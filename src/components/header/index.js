import { useTranslations } from "next-intl";
import Image from "next/image";
import headerImage from "../../../public/images/header.jpg";
import HeaderTitle from "@/components/header-title";
import Slider from "../slider";

export default function Header() {
  const tHome = useTranslations("home");
  const words = [
    tHome("words.word1"),
    tHome("words.word2"),
    tHome("words.word3"),
  ];

  const translations = {
    title: tHome("title"),
    subtitle: tHome("subtitle"),
    callToAction: tHome("callToAction"),
  };

  const Background = () => (
    <div className="absolute w-full h-full brightness-[0.5] ">
      <Image
        className="bg-top"
        src={headerImage}
        alt="edificios"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </div>
  );

  return (
    <div className="relative flex items-center pt-0 h-screen w-full">
      <Background />
      <div className="h-20 w-full absolute bottom-0 rotate-1 pt-14">
        <Slider />
      </div>
      <HeaderTitle translations={translations} words={words} />
    </div>
  );
}
