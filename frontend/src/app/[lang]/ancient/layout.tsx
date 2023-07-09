import AncientLayout from '@layouts/ancient/layout';

export default function DefaultLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return <AncientLayout lang={lang}>{children}</AncientLayout>;
}
