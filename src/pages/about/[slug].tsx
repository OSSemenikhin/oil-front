import { GetServerSidePropsContext } from 'next';
import Layout from 'features/Layout';
import { TPage } from 'types';

type TAbout = {
  page: TPage;
}

export default function About({ page }: TAbout) {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: page.content }} ></div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const api = `http://oil.api/api/about/page/${context.params.slug}`;
  const response = await fetch(api);
  const page: TPage = await response.json();

  return {
    props: {
      page,
    }
  }
}
