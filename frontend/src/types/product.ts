export interface Product {
  _id: string;
  name: string;
  quantity: number;
  sport: string;
  price: number;
  image: {
    type: string;
    data: any; // TODO: trouver un meilleur type
  };
}
