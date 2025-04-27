import Image from "next/image";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery, gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";


// const client = new ApolloClient({
//     uri: "https://admin.ejincare.com/",
//     cache: new InMemoryCache(),
// });
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (1) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export default function PhotoCarousel() {
  SwiperCore.use([Autoplay,Pagination]);
  // const data = [ 
  //   {
  //     name: "경기 용인시 S건물",
  //     floor: "지하 2층 ~ 지상 10층",
  //     area: "연면적 31,966.29m2",
  //     con: "상주, 미화관리",
  //     src: "/signaturegwanggyo.jpg",
  //     alt: "signaturegwanggyo",
  //   }, {
  //     name: "경기 안성시 E건물",
  //     floor: "지하 3층 ~ 지상 29층",
  //     area: "연면적 69,384.00m2",
  //     con: "상주, 미화관리",      
  //     src: "/e-annsung.png",
  //     alt: "e-annsung",
  //   }, {
  //     name: "경기 여주시 S건물",
  //     floor: "지하 2층 ~ 지상 20층",
  //     area: "연면적 57,569.7843m2",
  //     con: "상주, 미화관리",        
  //     src: "/yeojucenterville.png",
  //     alt: "yeojucenterville",
  //   }, {
  //     name: "경기 이천시 I건물",
  //     floor: "지하 1층 ~ 지상 15층",
  //     area: "연면적 59,762.577m2",
  //     con: "상주, 미화관리",        
  //     src: "/lanfastiam.png",
  //     alt: "lanfastiam",
  //   }, {
  //     name: "서울시 동대문구 H건물",
  //     floor: "지하 6층 ~ 지상 20층",
  //     area: "연면적 50,203.2415m2",
  //     con: "상주, 미화관리",        
  //     src: "/hillstatejangan.png",
  //     alt: "hillstatejangan",
  //   }, {
  //     name: "경기 구리시 S건물",
  //     floor: "지하 2층 ~ 지상 27층",
  //     area: "연면적 15,472.80m2",
  //     con: "상주, 미화관리",        
  //     src: "/guriterrace.jpg",
  //     alt: "guriterrace",
  //   }, {
  //     name: "경기 부천시 H건물",
  //     floor: "지하 5층 ~ 지상 29층",
  //     area: "연면적 25,676.98m2",
  //     con: "상주, 미화관리",        
  //     src: "/bucheonhyundai.png",
  //     alt: "bucheonhyundai",
  //   }, {
  //     name: "경기 시흥시 H건물",
  //     floor: "지하 5층 ~ 지상 10층",
  //     area: "연면적 17,106.5375m2",
  //     con: "상주, 미화관리",        
  //     src: "/hillstatesiheung.jpg",
  //     alt: "hillstatesiheung",
  //   }, {
  //     name: "경기 의정부시 H건물",
  //     floor: "지하 2층 ~ 지상 15층",
  //     area: "연면적 1,123.77m2",
  //     con: "상주, 미화관리",        
  //     src: "/passiblestation.png",
  //     alt: "passiblestation",
  //   }
  // ]
  interface Portfolio {
    id: string;
    title: string;
    portfolioImage: {
      "sourceUrl": string,
      "mediaItemUrl": string,
      "filePath": string,
      "fileSize": number,
      "altText": string
    }
  }
  
  interface PortfoliosData {
    portfolios: Portfolio[];
  }
  
  const GET_PORTFOLIOS = gql`
    query PortfolioQuery {
      portfolios {
        edges {
          node {
            id
            title
            portfolioArea
            portfolioCon
            portfolioFloor
            portfolioImage {
              node {
                altText
                filePath
                fileSize
              }
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery<PortfoliosData>(GET_PORTFOLIOS);

  if (loading) {
    return <h2>로딩중</h2>;
  }

  if (error) {
    return <h1>에러 발생</h1>;
  }

  const portfolios = data?.portfolios.slice(0, 4);

  if (!portfolios) {
    return <h1>포트폴리오가 없습니다.</h1>;
  }

  if (portfolios) {
    return <h1>포트폴리오가 있습니다.</h1>;
    
  }

    return (
        <section className="max-w-screen-xl mx-auto justify-center w-full text-center">

        
          <Swiper
                modules={[Autoplay,Pagination]}
                loop={true} // Enable infinite looping
                slidesPerView={1.2}
                spaceBetween={10}
                autoplay={{
                 delay: 1500,
                 disableOnInteraction: false
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                  },
                  768: {
                    slidesPerView: 2.2,
                    spaceBetween: 20
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 30
                  }
                }}
                
            >
              {data?.portfolios?.map((portfolio: Portfolio, idx: number) => (
                <SwiperSlide key={`country-${idx}`} className="!h-[350px] sm:!h-[300px]">
                  <div className="lg:h-full rounded-[10px] overflow-hidden sm:flex sm:justify-between h-[350px] sm:!h-[300px] bg-[#282828]">
                    <div className="relative flex-none sm:flex sm:justify-start flex-col justify-between bg-gray-05 p-6 md:pr-[30px] sm:w-auto text-left">
                      <h4 className="text-xl md:text-xl font-semibold leading-[140%] lg:p-0 text-[#e68600]">{portfolio.title}</h4>
                      <div className="items-center justify-between lg:mt-10 lg:p-0 sm:pt-5">
                        <div className="text-base text-[#d1d1d6]"></div>
                        <div className="text-xs text-gray-400"></div>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-1 mt-5 text-[#d1d1d6] text-base"></div>
                    </div>
                    <div>
                      <Image
                        width={512}
                        height={512}
                        src={portfolio.portfolioImage.sourceUrl}
                        className="flex-none w-full sm:w-20 w-12 h-12 sm:h-50"
                        alt={portfolio.portfolioImage.altText}
                      />
                    </div>
                  </div>
                </SwiperSlide>
               ))}
          </Swiper>           
         
        </section>
    )
}