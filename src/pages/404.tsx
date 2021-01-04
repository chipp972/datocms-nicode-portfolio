import React from 'react';
import { Layout } from '../components/layout';
import { Section } from '../components/layout/section';

const NotFoundPage = ({ path }) => (
  <Layout path={path}>
    <Section>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Layout>
);

export default NotFoundPage;
