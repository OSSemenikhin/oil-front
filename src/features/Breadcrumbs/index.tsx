import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Breadcrumb } from "antd";
import Link from 'next/link';
import routes from './routes';

export default function Breadcrumbs() {
  const router = useRouter();

  const breadcrumbs = useMemo(function generateBreadcrumbs() {
    let asPathWithoutQuery = router.asPath.split("?")[0];
    asPathWithoutQuery = router.asPath.split("#")[0];
    const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      const title = subpath;

      if (idx === (asPathNestedRoutes.length - 1)) {

      }

      return {
        title: <Link
          href={href}
          className={idx === (asPathNestedRoutes.length - 1) ? 'disabled' : ''}
        >
          {routes[title]}
        </Link>
      };
    });

    return [{ title: <Link href={'/'} >{routes.home}</Link> }, ...crumblist];
  }, [router.asPath]);

  return (
    <div className='effect-shadow-bottom'>
      {breadcrumbs.length > 1 && (
        <Breadcrumb className={'container mx-auto px-5 py-3'} items={breadcrumbs} separator='>' />
      )}
    </div>
  );
};
