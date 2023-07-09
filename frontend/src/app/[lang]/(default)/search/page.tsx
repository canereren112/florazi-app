import { Suspense } from 'react';
import DownloadApps from '@components/common/download-apps';
import Divider from '@components/ui/divider';
import SearchPageContent from './search-page-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
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
      <Divider />
      <Suspense fallback={<SearchBarFallback />}>
        <SearchPageContent lang={lang} />
      </Suspense>
      <DownloadApps lang={lang} />
    </>
  );
}
