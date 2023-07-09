import BundleGrid from '@components/bundle/bundle-grid';
import Container from '@components/ui/container';
import DownloadApps from '@components/common/download-apps';
import {
  homeTwoBanner as banner,
  homeTwoHeroBanner as heroBanner,
} from '@framework/static/banner';
import HeroSliderBlock from '@components/hero/hero-slider-block';
import { Metadata } from 'next';
import { bundleDataTwo as bundle } from '@framework/static/bundle';

import CategoryWithProduct from './category-with-products';

export const metadata: Metadata = {
  title: 'Vintage',
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
      <HeroSliderBlock
        heroBanner={heroBanner}
        contentClassName="pb-24 xl:pb-32 pt-16 xl:pt-24"
        lang={lang}
      />
      <Container>
        <BundleGrid data={bundle} lang={lang} />
        <CategoryWithProduct banner={banner} lang={lang} />
      </Container>
      <DownloadApps lang={lang} />
    </>
  );
}
