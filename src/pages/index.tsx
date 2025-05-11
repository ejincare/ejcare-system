import MainText from "@/components/MainText";
import PhotoCarousel from "@/components/PhotoCarousel";
import IconBoxWrap from "@/components/IconBoxWrap";
import Hline from "@/components/Hline";
import ConPartner from "@/components/ConPartner";
import MainVisualWrap from "@/components/MainVisualWrap";
import SearchSystem from "@/components/SearchSystem";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <MainVisualWrap />
      <main className="box-border px-5 xl:px-0 relative pb-[100px]">
        <SearchSystem url={""} title={"이진케어조회시스템"} description={"oo를 간편하게 조회할 수 있습니다."} />
        <MainText />
        <PhotoCarousel />
        <Hline />
        <IconBoxWrap />
        <Hline />
        <ConPartner/>
      </main>
    </Layout>
  );
}
