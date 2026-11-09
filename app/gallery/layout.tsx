import type { Metadata } from "next";

const siteUrl = "https://zionopaaje.name.ng";
const personId = `${siteUrl}/#person`;
const photos = [
  {
    url: "/Zionopaaje_graduation_Highschool.png",
    name: "Zion Opaaje at his Overcomes International School graduation",
    caption: "A milestone worth remembering",
    description: "In 2025, Zion Opaaje graduated from Overcomes International School at the age of 15. It was an important milestone in his educational journey.",
  },
  {
    url: "/Causal_pic_of_Zion_Opaaje.jpg",
    name: "Casual photograph of Zion Opaaje",
    caption: "A casual moment",
    description: "A relaxed personal photograph of Zion Opaaje, capturing a moment away from his work and projects.",
  },
  {
    url: "/zionopaaje.png",
    name: "Portrait photograph of Zion Opaaje",
    caption: "A personal portrait",
    description: "A portrait of Zion Opaaje, part of his personal photo collection.",
  },
  {
    url: "/zionopaaje_2.png",
    name: "Another personal photograph of Zion Opaaje",
    caption: "Another moment",
    description: "Another photograph of Zion Opaaje, adding a different frame to this collection of personal memories.",
  },
  {
    url: "/zionopaaje_3.png",
    name: "Portrait of Zion Opaaje",
    caption: "Portrait",
    description: "A personal portrait of Zion Opaaje.",
  },
  {
    url: "/zionopaaje_4.png",
    name: "Photograph of Zion Opaaje",
    caption: "Another side",
    description: "A further photograph of Zion Opaaje from his personal collection.",
  },
];

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Explore photographs of Zion Opaaje, also known as MegaTron, including personal portraits and his 2025 graduation from Overcomes International School.",
  alternates: { canonical: `${siteUrl}/gallery` },
  openGraph: {
    title: "Photo Gallery — Zion Opaaje",
    description: "Personal portraits, photographs and milestones from the journey of Zion Opaaje.",
    url: `${siteUrl}/gallery`,
    type: "website",
    images: [{ url: `${siteUrl}/Zionopaaje_graduation_Highschool.png`, alt: "Zion Opaaje at his 2025 school graduation" }],
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/gallery#webpage`,
      url: `${siteUrl}/gallery`,
      name: "Photo Gallery — Zion Opaaje",
      description: "A collection of personal photographs, portraits and milestones from Zion Opaaje.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": personId },
      mainEntity: { "@id": `${siteUrl}/gallery#image-gallery` },
      inLanguage: "en",
    },
    {
      "@type": "ImageGallery",
      "@id": `${siteUrl}/gallery#image-gallery`,
      name: "Zion Opaaje — Personal Photo Gallery",
      description: "Personal photographs and portraits of Zion Opaaje, including his 2025 graduation milestone.",
      creator: { "@id": personId },
      about: { "@id": personId },
      image: photos.map((photo, index) => ({
        "@type": "ImageObject",
        "@id": `${siteUrl}/gallery#photo-${index + 1}`,
        url: `${siteUrl}${photo.url}`,
        contentUrl: `${siteUrl}${photo.url}`,
        name: photo.name,
        caption: photo.caption,
        description: photo.description,
        creator: { "@id": personId },
        representativeOfPage: index === 0,
      })),
    },
  ],
};

export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
    </>
  );
}
