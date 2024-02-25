export type TProduct = {
  id: number;
  name: string;
  description: string;
  packaging: number[];
  price: number;
  img: string[];
  specifications: string[];
  item: string;
  new?: boolean;
  hit?: boolean;
};

export type TPage = {
  id: number;
  content: string;
  menu: string;
  rout: string;
  created_at: string;
  updated_at: string;
};

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
