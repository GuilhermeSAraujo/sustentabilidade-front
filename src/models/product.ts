export interface IFAddProduct {
  productName: string;
  expirationDate: string;
  quantity: number;
  barcode: number;
}

export interface IPostProduct {
  barcode?: string;
  name?: string;
  brand?: string;
  description?: string;
  averagePrice?: number;
  imageUrl?: string;
  expirationDate?: string;
  quantity?: number;
};

export interface UsersProductsGetResult{
  expires_within_week: UsersProduct[];
  expires_between_one_and_two_weeks: UsersProduct[];
  expires_more_than_two_weeks: UsersProduct[];
};

export interface IUsersProducts{
  expiresWithinWeek: UsersProduct[];
  expiresBetweenOneAndTwoWeeks: UsersProduct[];
  expiresMoreThanTwoWeeks: UsersProduct[];
};

export interface UsersProduct{
  barcode: string;
  name: string;
  description: string;
  brand: string;
  average_price: string;
  image_url: string;
  expire_date: string;
  quantity: number;
  days_until_expiry: number;
};

export interface ProductDataGetResult{
  barcode: string;
  name: string;
  description: string;
  brand: string;
  averagePrice: number;
  image_url: string;
};