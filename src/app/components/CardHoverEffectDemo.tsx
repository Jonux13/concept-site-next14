'use client'

import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Arquitectura de Microservicios",
    description:
      "Descomponer las aplicaciones en servicios independientes, lo que permite escalar y actualizar partes específicas del sistema de forma más eficiente. Esta arquitectura facilita la implementación continua, mejora la resiliencia y permite el uso de diferentes tecnologías."
  
  },
  {
    title: "Contenedores y Orquestación",
    description:
      "Utilizar tecnologías como Docker para empaquetar aplicaciones y Kubernetes para gestionar y orquestar los contenedores, lo que facilita la implementación y la escalabilidad."
    
  },
  {
    title: "Computación en la Nube",
    description:
      " Aprovechar servicios de nube pública como AWS, Azure o Google Cloud para escalar recursos según la demanda y reducir la carga operativa de la infraestructura."
   
  },
  {
    title: "Automatización de CI/CD",
    description:
      "Implementar pipelines de integración continua (CI) y entrega continua (CD) para automatizar pruebas, construcciones y despliegues, lo que acelera la entrega de software y garantiza la calidad."
  
  },
  {
    title: "Monitorización y Análisis de Datos",
    description:
      " Utilizar herramientas de monitorización para recopilar métricas y realizar análisis de rendimiento, lo que permite identificar cuellos de botella y optimizar el rendimiento del sistema."
  
  },
  {
    title: "Gestión de Datos y Bases de Datos NoSQL",
    description:
      "Adoptar bases de datos NoSQL como Mongo DB, para gestionar grande volúmenes de datos de manera eficiente y escalable, lo que mejora el rendimiento y la capacidad de respuestas de las aplicaciones."
  
  },
];
