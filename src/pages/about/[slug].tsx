import { useRouter } from 'next/router';
import Layout from 'features/Layout';
import { ReactNode } from 'react';

type TAbout = {
  page: string;
}

export default function About({ page }: TAbout) {
  const router = useRouter();
  const slug: string|string[] = router.query.slug ?? '';

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: page }} ></div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const page = `<div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae omnis ipsum eaque? Molestiae optio deleniti impedit tempore exercitationem atque. Explicabo officia dolore excepturi minima natus, obcaecati corporis neque ipsam delectus?
  Beatae aut suscipit architecto id aliquam eos dolores in non dolorem? Ipsa, nemo laborum. Quis nemo magni a aliquam tempore quasi, et quisquam voluptates cupiditate hic! Nam eos voluptatibus quibusdam.
  Rerum eligendi voluptatem minima, numquam corporis cum, aliquam tempora, nihil error aperiam sint aut pariatur ipsum nostrum reprehenderit laborum facere atque ipsa quibusdam! Deserunt fugit delectus cum porro similique repudiandae.
  Quas atque quasi sequi laborum. Perspiciatis, harum iste ad non ex asperiores inventore obcaecati quod deserunt ut culpa incidunt velit quisquam praesentium totam nihil aspernatur repellendus, est hic quam odit!
  Maiores repellat vero necessitatibus quae sit iure reiciendis delectus repudiandae, provident quibusdam quod! Voluptatibus esse consequuntur repudiandae optio doloribus voluptatum. Corporis impedit voluptas unde blanditiis accusamus optio porro, ipsa quam?
  Nihil corrupti recusandae natus obcaecati aliquid omnis sit unde eveniet qui vel neque, amet optio delectus. Quaerat earum harum adipisci sit, debitis eaque numquam corporis doloremque facilis quae doloribus temporibus?
  Sed sit eum obcaecati magnam soluta impedit minima sequi, asperiores ab dolorem mollitia tenetur porro excepturi cupiditate ipsum omnis ullam voluptas commodi numquam, vitae repellat ipsam, maiores assumenda! Non, vero?
  Necessitatibus possimus ab minima quibusdam aperiam eaque eos voluptatibus veritatis. Expedita sint porro, dolorum veniam, odio iusto reiciendis eos quo fugit odit corrupti praesentium consectetur! Quae voluptas obcaecati hic amet.</div>`;

  return {
    props: {
      page,
    }
  }
}
