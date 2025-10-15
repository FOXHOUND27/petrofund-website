import Homeposts from "@/components/homeposts";
import Homestats from "@/components/homestats";
import Imagerow from "@/components/imagerow";
import LargeHero from "@/components/largeHero";
import Story from "@/components/story";
import Unamkids from "@/components/unamkids";

export default function Home() {
  return (
    <>
      <LargeHero />
      <Story />
      <Homeposts />
      <Homestats />
      <Imagerow />
      <Unamkids />
    </>
  );
}
