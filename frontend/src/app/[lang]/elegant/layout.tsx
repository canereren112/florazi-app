import ElegantLayout from '@layouts/elegant/layout';

export default function DefaultLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return <ElegantLayout lang={lang}>{children}</ElegantLayout>;
}
