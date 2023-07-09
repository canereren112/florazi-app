import { GetServerSideProps } from 'next';
import ShopsSingleDetails from '@components/shops/shops-single-details';
import DownloadApps from '@components/common/download-apps';

export default async function ShopDetailsPage({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  return (
    <>
      <ShopsSingleDetails lang={lang} />
      <DownloadApps lang={lang} />
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale!, [
//         'common',
//         'forms',
//         'menu',
//         'footer',
//       ])),
//     },
//   };
// };
