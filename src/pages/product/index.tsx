import Layout from '@/shared/ui/Layout';
import ProductDetails from '@/widgets/ProductDetails';
import { TProduct } from '@/shared/model/types';

export default function Product() {
  const product: TProduct = {
    id: 1,
    item: 'CА020170',
    name: 'Lorem ipsum dolor sit.',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iure ducimus id quas aliquam cumque reiciendis qui? Dolorem exercitationem, architecto at atque ea distinctio quaerat neque magnam dolor, corrupti vero.
    Blanditiis debitis perspiciatis quibusdam? Atque quos nostrum dignissimos sequi nulla fugit minima iusto aspernatur pariatur ab! Accusantium alias, deleniti, fuga vitae similique omnis perspiciatis voluptatem molestiae tenetur, nulla quam non!
    Rem sequi in nostrum quae minima atque corporis neque. Hic aspernatur totam quo quod quae! Enim quisquam vitae reprehenderit dolorem vel, officiis nisi iste a, quasi doloribus quas, delectus perferendis!
    Consectetur natus voluptatum reiciendis harum corrupti mollitia. Impedit natus nihil, dicta commodi dolorum suscipit. Ad tempora explicabo molestias nesciunt quisquam, facilis totam, labore provident perspiciatis, placeat autem unde blanditiis omnis!
    Iusto voluptates aliquam soluta sapiente dicta eum consequuntur, nisi, architecto molestias vitae suscipit id eos tempora recusandae exercitationem. Ipsa obcaecati laborum praesentium cumque itaque? Sit laborum voluptatibus repellat nobis officia?
    Odit, numquam autem aspernatur ullam enim dicta incidunt sequi eveniet distinctio minima? Sint, necessitatibus. Earum architecto recusandae laboriosam! Officia corrupti beatae repellendus voluptatum iste ipsam accusantium praesentium ut et aliquid?
    Reiciendis praesentium non eaque officiis voluptate deleniti veritatis aliquid autem pariatur consequatur error at possimus numquam molestiae expedita, accusamus perferendis. Rerum explicabo aspernatur quae ea totam nesciunt quidem? Minima, enim!`,
    packaging: [1, 5, 20],
    price: 3200,
    img: ['/img/product/product.png', '/img/product/product_1.png', '/img/product/product_2.png'],
    specifications: ['Lorem',  'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit'],
    new: Math.random() > .5,
    hit: Math.random() > .5,
  }

  return (
    <Layout>
      <ProductDetails product={product}/>
    </Layout>
  );
}
