export type TNavLink = {
  title: string;
  href: string;
  subItems?: Array<TNavLink>;
  active?: boolean;
}

export type TRegion = {
  title: string;
  active: boolean;
}
