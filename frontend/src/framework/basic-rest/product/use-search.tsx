import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';

export const fetchSearchedProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;

  const { data } = await http.get(API_ENDPOINTS.SEARCH);

  function searchProduct(product: any) {
    return product.name.toLowerCase().indexOf(_params.text.toLowerCase()) > -1;
  }

  return data.filter(searchProduct);
};
export const useSearchQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>(
    [API_ENDPOINTS.SEARCH, options],
    fetchSearchedProducts
  );
};
