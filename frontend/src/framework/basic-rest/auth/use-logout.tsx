import { useUI } from '@contexts/ui.context';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

export interface LoginInputType {
  email: string;
  password: string;
  remember_me: boolean;
}
async function logout() {
  return {
    ok: true,
    message: 'Logout Successful!',
  };
}
export const useLogoutMutation = (lang: string) => {
  const { unauthorize } = useUI();
  const router = useRouter();
  return useMutation(() => logout(), {
    onSuccess: (_data) => {
      Cookies.remove('auth_token');
      unauthorize();
      router.push(`/${lang}`);
    },
    onError: (data) => {
      console.log(data, 'logout error response');
    },
  });
};
