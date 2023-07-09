import DefaultLayout from '@layouts/default/layout';

export default function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return <DefaultLayout lang={lang}>{children}</DefaultLayout>;
}
