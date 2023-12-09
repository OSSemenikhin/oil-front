import { useRouter } from 'next/router';
import { Breadcrumb } from "antd";
import Link from 'next/link';
import routes from './routes';

export default function Breadcrumbs() {
  const router = useRouter();

  function generateBreadcrumbs() {
    const asPathWithoutQuery = router.asPath.split("?")[0];
    const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      const title = subpath;

      return { title: <Link href={href} >{routes[title]}</Link> };
    })

    return [{ title: <Link href={'/'} >{routes.home}</Link> }, ...crumblist];
  }

  const breadcrumbs = generateBreadcrumbs();

  return (
    <>
      {breadcrumbs.length > 1 && (
        <Breadcrumb className={'container mx-auto px-5 py-3'} items={breadcrumbs} separator='>' />
      )}
    </>
  );
}
