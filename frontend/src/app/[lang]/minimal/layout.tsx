import MinimalLayout from '@layouts/minimal/layout';

export default function DefaultLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return <MinimalLayout lang={lang}>{children}</MinimalLayout>;
}
