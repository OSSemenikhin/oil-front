import { useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Breadcrumb } from "antd";
import Link from 'next/link';
import routes from './model/routes';
import { useDispatch } from 'react-redux';
import { setHeight } from '@/app/Store/model/breadcrumbsHeightSlice';

export default function Breadcrumbs() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
    const calculateHeight = () => {
      if (containerRef.current) {
        dispatch(setHeight(containerRef.current.clientHeight));
      }
    };

    useEffect(() => {
      calculateHeight();
      window.addEventListener('resize', calculateHeight);

      return () => {
        dispatch(setHeight(0));
      };
    }, []);

  const breadcrumbs = useMemo(function generateBreadcrumbs() {
    let asPathWithoutQuery = router.asPath.split("?")[0];
    asPathWithoutQuery = router.asPath.split("#")[0];
    const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);


    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      if (!routes[subpath]) return { title: '' };
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      if (idx === (asPathNestedRoutes.length - 1)) {

      }

      return {
        title: <Link
          href={href}
          className={idx === (asPathNestedRoutes.length - 1) ? 'disabled' : ''}
        >
          {routes[subpath]}
        </Link>
      };
    });

    return [{ title: <Link href={'/'} >{routes.home}</Link> }, ...crumblist].filter(link => link.title !== '');
  }, [router.asPath]);

  return (
    <div ref={containerRef} className='effect-shadow-bottom'>
      {breadcrumbs.length > 1 && (
        <Breadcrumb className={'container mx-auto px-5 py-3'} items={breadcrumbs} separator='>' />
      )}
    </div>
  );
};
