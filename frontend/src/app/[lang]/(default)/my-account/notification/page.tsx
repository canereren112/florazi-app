import Notifications from '@components/my-account/notification';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notification',
};

export default async function Notification({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  return <Notifications lang={lang} />;
}
