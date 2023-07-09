import TrendyLayout from '@layouts/trendy/layout';

export default function DefaultLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return <TrendyLayout lang={lang}>{children}</TrendyLayout>;
}
