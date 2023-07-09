import { Metadata } from 'next';
import OrdersPageContent from './orders-page-content';

export const metadata: Metadata = {
  title: 'Orders',
};

export default async function OrdersTablePage({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  return <OrdersPageContent lang={lang} />;
}
