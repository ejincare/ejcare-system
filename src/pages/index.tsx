import MainText from "@/components/MainText";
import PhotoCarousel from "@/components/PhotoCarousel";
import IconBoxWrap from "@/components/IconBoxWrap";
import Hline from "@/components/Hline";
import ConPartner from "@/components/ConPartner";
import MainVisualWrap from "@/components/MainVisualWrap";
import SearchSystem from "@/components/SearchSystem";
import Layout from "@/components/Layout";
import LayerPopup from "@/components/LayerPopup";


export default function Home() {
  return (
    <Layout>
      <MainVisualWrap />
      <main className="box-border px-5 xl:px-0 relative pb-[100px] overflow-hidden">
        <SearchSystem url={"https://kij0423.mycafe24.com/user2/search_addr.php"} title={"이진케어조회시스템"} description={"맞춤 관리 서비스를 통해 관리비를 점검해보세요."} />
        <MainText />  
        <PhotoCarousel />
        <p className="max-w-screen-xl mx-auto text-[28px] md:text-[48px] font-[700] leading-[1.3] text-center text-[#282828] mt-[100px]">차별화된 관리 시스템</p>
        <p className="text-center text-[17px] md:text-[24px] font-medium leading-[155%]  mt-[20px] text-[#282828]">발생 가능한 문제를 미리 찾고, 새로운 해결 방식을 제안합니다</p>
        <IconBoxWrap />
        <Hline />
        <ConPartner/>
      </main>
      <LayerPopup isPopupOpen={true}/>
    </Layout>
    
  );
}
