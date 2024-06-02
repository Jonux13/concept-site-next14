"use client";

import { ThemeIcon, Text, Container, SimpleGrid, rem } from "@mantine/core";
import {
  IconSquares,
  IconBox,
  IconCloud,
  IconCode,
  IconChartBar,
  IconDatabase,
} from "@tabler/icons-react";
import classes from "./FeaturesGrid.module.css";

const iconColor = "#52B7AC";

export const MOCKDATA = [
  {
    icon: IconSquares,
    title: "Arquitectura de Microservicios",
    description:
      "Descomponer las aplicaciones en servicios independientes, lo que permite escalar y actualizar partes específicas del sistema de forma más eficiente. Esta arquitectura facilita la implementación continua, mejora la resiliencia y permite el uso de diferentes tecnologías.",
  },
  {
    icon: IconBox,
    title: "Contenedores y Orquestación",
    description:
      "Utilizar tecnologías como Docker para empaquetar aplicaciones y Kubernetes para gestionar y orquestar los contenedores, lo que facilita la implementación y la escalabilidad.",
  },
  {
    icon: IconCloud,
    title: "Computación en la Nube",
    description:
      "Aprovechar servicios de nube pública como AWS, Azure o Google Cloud para escalar recursos según la demanda y reducir la carga operativa de la infraestructura.",
  },
  {
    icon: IconCode,
    title: "Automatización de CI/CD",
    description:
    "Implementar pipelines de integración continua (CI) y entrega continua (CD) para automatizar pruebas, construcciones y despliegues, lo que acelera la entrega de software y garantiza la calidad. Permitiendo una integración más rápida y mejora la eficiencia del equipo de desarrollo.",
  },
  {
    icon: IconChartBar,
    title: "Monitorización y Análisis de Datos",
    description:
      "Utilizar herramientas de monitorización para recopilar métricas y realizar análisis de rendimiento, lo que permite identificar cuellos de botella y optimizar el rendimiento del sistema.",
  },
  {
    icon: IconDatabase,
    title: "Gestión de Datos y Bases de Datos NoSQL",
    description:
      "Adoptar bases de datos NoSQL como Mongo DB, para gestionar grandes volúmenes de datos de manera eficiente y escalable, lo que mejora el rendimiento y la capacidad de respuesta de las aplicaciones.",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40} color={iconColor}>
        <Icon
          style={{ width: rem(18), height: rem(18), color: iconColor }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapperone}>
      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
