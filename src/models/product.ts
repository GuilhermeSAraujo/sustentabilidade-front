export interface IFAddProduct {
  productName: string;
  expirationDate: string;
  quantity: number;
  barcode: number;
}

export interface IPostProduct {
  /* {
     "user_id": "837ad4e7-b401-4406-a0b0-fe1f3016ca0b",
     "product": {
       "barcode": "123",
       "name": "Biscoito Nestle",
       "brand": "Nestle",
       "description": "Biscoito de aveia Nestle",
       "average_price": 15.5,
       "image_url": "https://cdn-cosmos.bluesoft.com.br/products/7891000025871"
     },
     "expire_date": "2023-12-24",
     "quantity": 2
   }*/
  barcode?: string;
  name?: string;
  brand?: string;
  description?: string;
  averagePrice?: string;
  imageUrl?: string;
  expirationDate?: string;
  quantity?: number;
};

export interface ProductGetResult {
  barcode: string;
  name: string;
  description: string;
  brand: string;
  averagePrice: string;
  imageUrl: string;
}