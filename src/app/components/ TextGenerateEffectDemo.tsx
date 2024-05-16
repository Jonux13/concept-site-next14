"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `"Con nuestro carisma, calidez y solidez, estamos aquí para resolver tus requerimientos y problemas con confianza, brindándote la tranquilidad que necesitas en cada paso del camino."
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
