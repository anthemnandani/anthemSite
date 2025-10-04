
import Breadcrumb from "@/container/Breadcrumb/Breadcrumb";
import ReactTabs from "@/components/Tabs/Tab";

// Dynamic page props for SEO
export async function generateMetadata({ searchParams }) {
  const industryType = searchParams?.Industrytype || null;
  const pageTitle = industryType
    ? `Industry Focus: ${industryType}`
    : "Industries We Serve";

  const pageDescription = `We partner with bold brands across various industries to drive innovation and growth. Our expertise in ${
    industryType || "diverse industries"
  } helps businesses thrive with tailored technology solutions.`;

  return {
    title: `Anthem Infotech - ${industryType || "Industries"}`,
    description: pageDescription,
    openGraph: {
      title: `Anthem Infotech - ${industryType || "Industries"}`,
      description: pageDescription,
      url: "https://yourdomain.com/Home/Industries",
      siteName: "Anthem Infotech",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Anthem Infotech" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Anthem Infotech - ${industryType || "Industries"}`,
      description: pageDescription,
      images: ["/images/og-image.png"],
    },
  };
}

const IndustriesPage = ({ searchParams }) => {
  const industryType = searchParams?.Industrytype || null;

  return (
    <>
    
      <Breadcrumb
        image="/images/Industries/industryHeader.webp"
        title={`We Work With <span class='text-color-span'>Bold Brands</span> That We <span class='text-color-span'>Believe</span> in <span class='text-color-span'>${
          industryType || ""
        }</span>`}
        content="Home"
        contentTwo="Industries"
      />
      <ReactTabs industryType={industryType} />
   
     
    </>
  );
};

export default IndustriesPage;
