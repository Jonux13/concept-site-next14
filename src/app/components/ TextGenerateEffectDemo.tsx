"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `"Estamos aquí para resolver tus requerimientos, brindándote la tranquilidad que necesitas en cada paso del proyecto."
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
