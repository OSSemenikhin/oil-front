export type INavLink = {
  title: string;
  href: string;
  subItems?: Array<INavLink>;
  active?: boolean;
}

export type INavList = Array<INavLink>;

export type IRegion = {
  title: string;
  active: boolean;
}

export type IRegionList = Array<IRegion>;
