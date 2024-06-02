"use client";
import { Title, Container } from '@mantine/core';
import classes from "./FeaturesGrid.module.css";

const Hero = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Container className={classes.wrapper}>
      <Title className={classes.titleOne}>
       Construyendo soluciones tecnológicas de alto <span className={classes.gradientText}>rendimiento</span>
     </Title> 

      </Container>
   
    </div>
  );
};

export default Hero;
