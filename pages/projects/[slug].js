import React from 'react';
import Layout from '../../components/layout';
import Project from '../../components/section/project';
import Seo from '../../components/seo';
import { fetchAPI } from '../../lib/api';

function Slugs({ fallback, slug }) {
  const seo = {
    metaTitle: fallback[`/projects/${slug}`].name,
    metaDescription: fallback[`/projects/${slug}`].descriptions,
    shareImage: fallback[`/projects/${slug}`].thumbnail,
  };
  return (
    <Layout>
      <Seo seo={seo} />
      <Project slug={slug} dataFallback={fallback[`/projects/${slug}`]} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const projects = await fetchAPI('/projects');
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  // Run API calls in parallel
  const selectedProject = await fetchAPI(`/projects/${slug}`);

  return {
    props: {
      fallback: {
        [`/projects/${slug}`]: selectedProject,
      },
      slug,
    },
    revalidate: 1,
  };
}

export default Slugs;
