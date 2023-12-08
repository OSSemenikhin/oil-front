export type TNavLink = {
  title: string;
  href: string;
  subItems?: Array<TNavLink>;
  active?: boolean;
}

export type TNavList = Array<TNavLink>;

export type TRegion = {
  title: string;
  active: boolean;
}

export type TRegionList = Array<TRegion>;
