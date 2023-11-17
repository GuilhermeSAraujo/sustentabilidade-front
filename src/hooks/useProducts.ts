import { useQuery } from 'react-query';
import { useAuth } from './useAuth';
import ProductService from '../shared/api/productService';
const STALE_TIME = 1000 * 60 * 5;

export const useProducts = () => {
	const { user } = useAuth();

	return useQuery(
		['products', user],
		async () => {
			const result = await ProductService.getUserProducts();

			return result;
		}, {
		staleTime: STALE_TIME
	}
	)
};

