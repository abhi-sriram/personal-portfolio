import Head from "next/head";
import Content from "../components/Content";
import DetailsSidebar from "../components/DetailsSidebar";
import Header from "../components/Header";
import IconSidebar from "../components/IconSidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Your personal portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex">
        <IconSidebar />
        <DetailsSidebar />
        <Content />
      </div>
    </div>
  );
}
