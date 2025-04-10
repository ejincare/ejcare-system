import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
// import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default function Company() {

  // const [ loading, error ] = useKakaoLoader({
  //   appkey: "26a3f8f66b1c14caf56c2a567054ca48", // 발급 받은 APPKEY
  //   // ...options // 추가 옵션
  // });

  // if (loading) {
  //   return <div>로딩 중...</div>; // 로딩 중 처리 로직
  // }

  // if (error) {
  //   return <div>지도 로드 중 오류가 발생했습니다.</div>; // 로드 실패 처리 로직
  // }

  return (
    <div>
      <Header pageName={"subMenu"}/>    
      <main className="max-w-screen-xl mx-auto justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px]">
        <SubHeader title_kor={"회사소개"} title_eng={"company"}/>
        <div className="mt-[100px]">
          <h2 className="block text-[#131f35] text-[46px] font-bold text-left mb-10">오시는 길</h2>
          <div className="flex justify-between mb-5 text-[16px] bold">
              <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
                      </path>
                  </svg>
                  <p className="text-[#131f35] text-left ml-5">
                      인천광역시 연수구 하모니로 177번길 49 <br className="f_over"/>
                      형지글로벌 패션복합센터 업무동 10층
                  </p>
              </div>
          </div>
          {/* <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            className="w-full h-[360px]"
          >
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
              <div style={{color:"#000"}}>(주)이진케어시스템</div>
            </MapMarker>
          </Map> */}
        </div>
        
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
      {/* <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=26a3f8f66b1c14caf56c2a567054ca48&libraries=services,clusterer&autoload=false"></script> */}

    </div>
  );
}
