import GallerySlider from "@/components/galleryslider";
import Homeposts from "@/components/homeposts";
import Homestats from "@/components/homestats";
import LargeHero from "@/components/largeHero";
import Story from "@/components/story";

export default function Home() {
  return (
    <>
      <LargeHero />
      <Story />
      <Homeposts />
      <Homestats />
      <GallerySlider />
    </>
  );
}
