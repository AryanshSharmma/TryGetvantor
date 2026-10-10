import { StitchHome } from "@/components/stitch-home/StitchHome";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: site.name, url: site.url },
    {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      description: site.description,
      email: site.email,
      serviceType: "Web design and development",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StitchHome />
    </>
  );
}
