'use client'

import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock, IconRefresh
} from '@tabler/icons-react';
import classes from './FeaturesGrid.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Máximo rendimiento',
    description:
      ' Nuestra experiencia en la optimización de sistemas garantiza un rendimiento excepcional en todas las soluciones desarrolladas. Desde la arquitectura hasta la implementación, nos comprometemos a ofrecer resultados que superen las expectativas, asegurando una experiencia fluida y eficiente para nuestros clientes.',
  },
  {
    icon: IconUser,
    title: 'Privacidad como prioridad',
    description:
      ' valoramos la privacidad de los datos tanto como tú. Nuestras soluciones están diseñadas con un enfoque centrado en la privacidad desde el principio. Implementamos medidas sólidas de seguridad y protocolos de protección de datos para garantizar que tus información esté siempre segura y protegida.',
  },
  {
    icon: IconCookie,
    title: 'Control total, sin terceros',
    description:
      ' Nos comprometemos a ofrecer soluciones de software que te brinden un control total sobre tus datos y procesos. Nuestro enfoque sin terceros significa que no dependerás de intermediarios externos para gestionar tu tecnología. Creamos soluciones que te permiten mantener el control total de tus operaciones.',
  },
  {
    icon: IconLock,
    title: ' Seguridad incorporada desde el principio',
    description:
      'La seguridad es nuestra prioridad número uno. Nos comprometemos a ofrecer soluciones que estén seguras por diseño. Nuestro enfoque garantiza que cada aspecto de nuestras soluciones esté cuidadosamente diseñado para proteger tus datos y tu negocio.'
  },
  {
    icon: IconMessage2,
    title: 'Siempre a tu disposición',
    description:
      'Entendemos la importancia de estar disponible cuando más nos necesitas. Listo para responder a tus consultas y resolver cualquier problema que puedas tener. Puedes tener la tranquilidad de que estaremos aquí para ayudarte en cualquier momento, asegurando que tu negocio siga funcionando sin contratiempos.'
  },
  {
    icon: IconRefresh,
    title: 'Innovación continua',
    description:
      'Comprometidos con la innovación constante. Adoptamos nuevas tecnologías y metodologías para ofrecerte soluciones que estén a la vanguardia de la industria. Con nuestro enfoque centrado en la innovación, podemos ayudarte a mantener una ventaja competitiva y a alcanzar tus objetivos empresariales con mayor eficacia.'
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
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
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
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Integración sistematizada con diferentes stacks de tecnología</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
        Esta capacidad de integración fluida permite a los usuarios combinar diferentes tecnologías de manera eficiente y sin problemas, lo que facilita el desarrollo de soluciones completas y flexibles que aprovechan al máximo las fortalezas de cada componente o tecnología. 
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}