import { TNavLink } from '@/shared/types';

export default async function(): Promise<TNavLink[]> {
  const api = `http://oil.api/api/topBar/links`;
  const response = await fetch(api);
  const list: TNavLink[] = await response.json() as TNavLink[];

  return list;
}
