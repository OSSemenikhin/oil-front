import { GetServerSidePropsContext } from 'next';
import Layout from '@/shared/Layout';
import { TPage } from '@/types';
import styles from './About.module.css';

type TAbout = {
  page: TPage;
}

export default function About({ page }: TAbout) {
  return (
    <Layout>
      <div className={[styles.about, 'container mx-auto px-5'].join(' ').trim()} dangerouslySetInnerHTML={{ __html: page.content }} ></div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params?.slug) return { notFound: true };
  const api = `http://oil.api/api/about/page/${context.params.slug}`;
  const response = await fetch(api);
  const page: TPage = await response.json();

  return {
    props: {
      page,
    }
  }
}
