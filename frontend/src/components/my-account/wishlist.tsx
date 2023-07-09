'use client';

import ProductWishlistGrid from '@components/product/wishlist-product';

export default function Wishlist({ lang }: { lang: string }) {
  return (
    <div className="flex flex-col pt-8 2xl:pt-12">
      <ProductWishlistGrid lang={lang} />
    </div>
  );
}
