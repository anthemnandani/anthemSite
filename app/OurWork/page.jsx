
import Head from "next/head";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import WorkContainer from "../../container/Work/WorkContainer";



export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Anthem Infotech - Portfolio</title>
        <meta
          name="description"
          content="Explore Anthem Infotech's portfolio to discover our recent success stories and innovative solutions. See how we’ve helped businesses across industries achieve growth and transformation."
        />
        <meta property="og:title" content="Anthem Infotech - Portfolio" />
        <meta
          property="og:description"
          content="Explore Anthem Infotech's portfolio to discover our recent success stories and innovative solutions. See how we’ve helped businesses across industries achieve growth and transformation."
        />
      </Head>
      <Breadcrumb
        image="/images/bg/portfoliobg.webp"
        title={`A Glimpse Into Our Recent <span class='text-color-span'>Success Stories</span> and <span class='text-color-span'>Innovative Solutions</span>`}
        content="Home"
        contentTwo="Portfolio"
      />
      <WorkContainer classOption="bg-white" />
    
    </>
  );
}
