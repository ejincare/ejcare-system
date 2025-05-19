import Image from "next/image";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery, gql } from "@apollo/client";

export default function PhotoCarousel() {
  SwiperCore.use([Autoplay,Pagination]);
  
  interface PortfolioImage {
    altText: string;
    filePath: string;
    fileSize: number;
  }
  interface portfolioImageNode {
    node: PortfolioImage;
  }
  interface Portfolio {
    id: string;
    title: string;
    portfolioArea: string;
    portfolioCon: string;
    portfolioFloor: string;
    portfolioImage: portfolioImageNode
  }
  interface PortfolioNode {
    node: Portfolio;
  }
  
  interface PortfoliosData {
    portfolios: {
      edges: PortfolioNode[]
    }
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

  // if (loading) {
  //   return <h2>로딩중</h2>;
  // }

  // if (error) {
  //   return <h1>에러 발생</h1>;
  // }
  // edges 배열을 꺼내고, node를 매핑해서 실제 portfolio 리스트를 만든다
  const portfolios = data?.portfolios.edges.map((edge) => edge.node).slice(0, 4);

  const portfolioImageUrl = (src: string) => {
    const wordpressDomain = "https://admin.ejincare.com"; // 실제 WordPress 사이트 도메인
    const imageUrl = src.startsWith('http')
    ? src
    : `${wordpressDomain}${src}`;
    return imageUrl;
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
              {portfolios?.map((portfolio: Portfolio, idx: number) => (
                <SwiperSlide key={`country-${idx}`} className="!h-[350px] sm:!h-[300px]">
                  <div className="lg:h-full rounded-[10px] overflow-hidden sm:flex sm:justify-between h-[350px] sm:!h-[300px] bg-[#282828]">
                    <div className="relative flex-none sm:flex sm:justify-start flex-col justify-between bg-gray-05 p-6 md:pr-[30px] sm:w-auto text-left">
                      <div className="text-xl md:text-xl font-semibold leading-[140%] lg:p-0 text-[#e68600]">{portfolio.title}</div>
                      <div className="items-center justify-between lg:mt-10 lg:p-0 sm:pt-5">
                        <div className="text-base text-[#d1d1d6]">{portfolio.portfolioArea}</div>
                        <div className="text-xs text-gray-400">{portfolio.portfolioFloor}</div>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-1 mt-5 text-[#d1d1d6] text-base">{portfolio.portfolioCon}</div>
                    </div>
                    <div>
                      {
                        portfolio?.portfolioImage?.node?.filePath ? (
                          <Image
                            width={512}
                            height={512}
                            src={portfolioImageUrl(portfolio.portfolioImage.node.filePath)}
                            className="flex-none w-full sm:w-20 w-12 h-12 sm:h-50"
                            alt={portfolio.portfolioImage.node.altText}
                            unoptimized
                          />
                        ) : (
                          <></>
                        )
                      }
                    </div>
                  </div>
                </SwiperSlide>
               ))}
          </Swiper>           
         
        </section>
    )
}