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
}
