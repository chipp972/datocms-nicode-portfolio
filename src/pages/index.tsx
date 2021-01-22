import React from 'react';
import { Layout } from '../components/layout/layout';
import { Hero } from '../sections/hero/hero';
import { About } from '../sections/about/about';
import { Projects } from '../sections/projects/projects';
import { Contact } from '../sections/contact/contact';
import cssVar from '../theme/variables/js-variables.module.scss';
import { SectionTransition } from '../components/layout/transition';
import { gsapSetup } from '../helpers/gsap-setup';
import smoothscroll from 'smoothscroll-polyfill';

gsapSetup();

typeof window !== 'undefined' && smoothscroll.polyfill();

type Props = {
  path: string;
};

const IndexPage: React.FC<Props> = ({ path }) => (
  <Layout path={path}>
    <Hero />
    <SectionTransition color={cssVar.alternateBgColor} />
    <About />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
