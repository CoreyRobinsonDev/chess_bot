import Head from "next/head";


export default function Layout({title, children}: {title:string, children: React.ReactNode}) {
  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="I'm a chess bot" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </>
}