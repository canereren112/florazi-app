import Container from '@components/ui/container';
import { Metadata } from 'next';
import DownloadApps from '@components/common/download-apps';
import BundleGrid from '@components/bundle/bundle-grid';
import CollectionGrid from '@components/common/collection-grid';
import HeroBannerCard from '@components/hero/hero-banner-card';
import BestSellerGroceryProductFeed from '@components/product/feeds/best-seller-grocery-product-feed';
import PopularProductFeed from '@components/product/feeds/popular-product-feed';
import CategoryGridBlock from '@components/common/category-grid-block';
import {
  homeSixHeroBanner as heroBanner,
  homeSixBanner as banner,
} from '@framework/static/banner';
import BannerCard from '@components/cards/banner-card';
import { bundleDataTwo as bundle } from '@framework/static/bundle';

export const metadata: Metadata = {
  title: 'Grocery & Food Store React Template',
  description:
    'Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.',
};

export default async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  return (
    <>
      <HeroBannerCard
        lang={lang}
        banner={heroBanner}
        className="hero-banner-six min-h-[400px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[650px] py-20 py:pt-24 mb-5 2xl:bg-center"
      />
      <Container>
        <BundleGrid
          className="mb-12 lg:mb-14 xl:mb-16 2xl:mb-20"
          data={bundle}
          lang={lang}
        />
        <CategoryGridBlock lang={lang} />
        <BestSellerGroceryProductFeed variant="alpine" lang={lang} />
        <BannerCard
          banner={banner}
          className="mb-12 lg:mb-14 xl:pb-3"
          effectActive={false}
          lang={lang}
        />
        <PopularProductFeed variant="alpine" lang={lang} />
      </Container>
      <CollectionGrid
        headingPosition="center"
        className="pb-1 mb-12 xl:pt-2 2xl:pt-4 3xl:pt-6 lg:pb-0 lg:mb-14 xl:mb-16 2xl:mb-20"
        lang={lang}
      />
      <DownloadApps lang={lang} />
    </>
  );
}
