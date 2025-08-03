type TProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

interface ProductState {
  data: TProductType[];
  loading: boolean;
  error: boolean;
}
export type { ProductState };
