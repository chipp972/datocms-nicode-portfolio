import React from 'react';
import css from './hero.module.sass';
import { Section } from '../../components/layout';
import { SectionTransition } from '../../components/layout/transition';

const promise = 'Créons ensemble une expérience qui fidélisera vos clients et les incitera à vous recommander';
const subtitle = 'Je suis <b>Nicolas Pierre-charles</b>, développeur passionné des technologies web et de design';

export const Hero = () => (
  <section className={css.hero}>
    <Section component="div">
      <p className={css.promise} dangerouslySetInnerHTML={{ __html: promise }} />
      <p className={css.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />
    </Section>
    <SectionTransition className={css.transition} color="#f1f8e9" />
  </section>
);
