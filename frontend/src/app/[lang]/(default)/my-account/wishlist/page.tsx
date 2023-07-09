import Wishlist from '@components/my-account/wishlist';
import { Metadata } from 'next';
import { useTranslation } from 'src/app/i18n';

export const metadata: Metadata = {
  title: 'Wishlist',
};

export default async function WishlistPage({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const { t } = await useTranslation(lang, 'common');
  return (
    <>
      <h2 className="text-base md:text-lg xl:text-[20px] font-semibold text-brand-dark  lg:pt-0">
        {t('text-account-wishlist')}
      </h2>
      <Wishlist lang={lang} />
    </>
  );
}
