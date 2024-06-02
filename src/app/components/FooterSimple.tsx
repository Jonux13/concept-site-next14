"use client";

import { Container, Group, Anchor } from "@mantine/core";
import classes from "./FooterSimple.module.css";
import Link from "next/link";

const links = [
  { link: "/contacto", label: "Contacto" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
];

export function FooterSimple() {
  const items = links.map((link) => (
    <Link
      href={link.link}
      key={link.label}
      passHref
      className={classes.footerLink}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Link href={"/"}> 
        <img
          src="/logoturquoise.png"
          alt="Logo Concept"
          className={classes.logo}
        />
        </Link>
      
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
