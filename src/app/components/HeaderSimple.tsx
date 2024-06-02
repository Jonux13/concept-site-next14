"use client";

import React from 'react';
import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/about', label: 'Proyectos' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src="/logoturquoise.png" alt="Logo Turquoise" width={100} height={100} className={classes.image} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" className={classes.customBurger} />
      </Container>

      {/* Menú desplegable */}
      {opened && (
      <div className={classes.menu}>
        {links.map((link) => (
          <a key={link.label} href={link.link} className={classes['menu-link']}
          >
            {link.label}
          </a>
        ))}
      </div>
        )}
    </header>
  );
}
