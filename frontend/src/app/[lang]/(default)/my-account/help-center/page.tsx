import Help from '@components/my-account/help';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help',
};

export default async function HelpCenter({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  return <Help lang={lang} />;
}
