import { Metadata } from 'next';
import AddressPageContent from './address-page-content';

export const metadata: Metadata = {
  title: 'Address',
};

export default async function AccountDetailsPage({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  return <AddressPageContent lang={lang} />;
}
