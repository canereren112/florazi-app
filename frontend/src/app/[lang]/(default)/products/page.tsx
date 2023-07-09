import DownloadApps from '@components/common/download-apps';
import PageHeroSection from '@components/ui/page-hero-section';
import ProductsPageContent from './products-page-content';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Products',
};

export default async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  function SearchBarFallback() {
    return <>Loading...</>;
  }

  return (
    <>
      <PageHeroSection heroTitle="text-all-grocery-items" lang={lang} />
      <Suspense fallback={<SearchBarFallback />}>
        <ProductsPageContent lang={lang} />
      </Suspense>
      <DownloadApps lang={lang} />
    </>
  );
}
