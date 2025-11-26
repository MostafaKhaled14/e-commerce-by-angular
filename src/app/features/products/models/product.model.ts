export interface Product {
  id: number;
  title: string;
  price: number;
  imageCover: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  category: { name: string };
  featured?: boolean; 
}

