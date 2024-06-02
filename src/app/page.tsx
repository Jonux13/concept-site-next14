import Image from "next/image";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import { MantineProvider } from "@mantine/core";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import { TextGenerateEffectDemo } from "./components/ TextGenerateEffectDemo";
import { HeaderSimple } from "./components/HeaderSimple";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <FloatingNavDemo />
      {/* <HeroHighlightDemo /> */}
      <MantineProvider>
        <HeaderSimple />
        <Hero />
        <FeaturesGrid />
        {/* <CardHoverEffectDemo /> */}
        {/* <TextGenerateEffectDemo /> */}
      </MantineProvider>
    </>
  );
}
