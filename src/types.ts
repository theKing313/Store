
export type Irating = {
    count :number
    rate:number
}
export interface Product {
  id: number;
  title: string;
  image: string;
  isFavorite: boolean;
  description:string;
  rating: Irating;
  price:number
}
