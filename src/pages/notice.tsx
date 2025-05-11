import Layout from "@/components/Layout";
import SubHeader from "@/components/SubHeader";
import { useQuery, gql } from "@apollo/client";
import { get } from "http";
import { useState } from "react";


export default function Notice() {
  const [content, setContent] = useState<string|undefined>()
  const [title, setTitle] = useState<string|undefined>()
  const [date, setDate] = useState<string|undefined>()
  const [viewCount, setViewCount] = useState<number|undefined>()
  const [contentID, setContentID] = useState<string|undefined>()


  interface Notice {
    id: string;
    title: string;
    content: string;
    date: string;
  }
  interface NoticeNode {
    node: Notice;
  }  

  interface NoticeData  {
    notice: {
      id: string;
      title: string;
      content: string;
      date: string;
    }
  }
  interface NoticesData {
    notices: {
      edges: NoticeNode[]
      PageInfo: PageInfoNode[]
    }
  }
  interface PageInfo {
    hasMore: boolean;
    hasPrevious: boolean;
    total: number;  
  }
  interface PageInfoNode {
    offsetPagination: PageInfo;
  }
  
  const GET_NOTICES = gql`
    query NoticesQuery {
      notices(where: {offsetPagination: {size: 10, offset:0 }}) {
        edges {
          node {
            id
            title
            date
          }
        }
        pageInfo {
          offsetPagination {
            hasMore
            hasPrevious
            total
          }
        }
      }
    }
  `;

  const GET_NOTICE = gql`
    query NoticeQuery($id: ID!) {
      notice(id: $id) {
        id
        title
        content
        date
      }
    }
  `;

  const { data, loading, error } = useQuery<NoticesData>(GET_NOTICES);
  const { data: noticeData, loading: noticeLoading, error: noticeError } = useQuery<NoticeData>(GET_NOTICE, {
    variables: { id: contentID },
    skip: !contentID,
  });

  const getNotice = (e: any, id: string) => {
    e.preventDefault();
    setContentID(id);
    console.log("id", id);
  }

  if (loading) {
    return <h2>로딩중</h2>;
  }

  if (error) {
    return <h1>에러 발생</h1>;
  }

  // if (noticeLoading) {
  //   return <h2>로딩중</h2>;
  // }
  // if (noticeError) {
  //   return <h1>에러 발생</h1>;
  // }
  if (noticeData) {
    console.log("noticeData", noticeData);
    
    // setContent(noticeData.notice.content);
    // setTitle(noticeData.notice.title);
    // setDate(noticeData.notice.date);
    // setViewCount(noticeData.notice.viewCount);
  }
  // edges 배열을 꺼내고, node를 매핑해서 실제 portfolio 리스트를 만든다
  const notices = data?.notices.edges.map((edge) => edge.node).slice(0, 4);


  return (
    <Layout>
      <main className="max-w-screen-xl mx-auto justify-center w-full text-center box-border px-5 xl:px-0 md:gap-[90px] pt-[72px] pb-[100px]">
        <SubHeader title_kor={"공지사항"} title_eng={"Notice"}/>

         <div className="pt-[100px]">
            {
              noticeLoading && <div className="text-left min-h-[500px]"><h2 className="text-black">로딩중..</h2></div>
            }
            {
              noticeData && <div className="text-left">
                <h1 className="text-[2rem] font-[600] text-[#1f2937]">{title}</h1>
                <div className="text-[1rem] font-[400] text-[#1f2937]">
                  <div className="flex items-center justify-between">
                    <div className="w-[50%] text-left">{date}</div>
                  </div>
                  <div className="text-[1rem] font-[400] text-[#1f2937] pt-[20px] min-h-[500px]">
                    {noticeData.notice.content}
                  </div>
                </div>
              </div>
            }
            <div className="flex items-center justify-start text-[1rem] font-[600] text-center border-t text-[#1f2937] border-black border-solid" >
                <div className="w-[6%] py-[1.4rem] px-[0]">번호</div>
                <div className="flex-1">제목</div>
                <div className="w-[13%] shrink-0">작성자</div>
                <div className="w-[13%] shrink-0">작성일자</div>
            </div>
            {notices?.map((notice: Notice, idx: number) => (
            <div key={`notice-${notice.id}`} className="w-full">
              <a href="#" className="flex items-center justify-start py-[1.4rem] px-[0] border-t text-[#1f2937] border-[#e5e5e5] border-solid" onClick={(e: React.MouseEvent) => getNotice(e, notice.id)}>
                  <div className="w-[6%] text-[#B3B3B3] font-[600] text-center">{idx+1}</div>
                  <div className="flex-1 font-[600] text-left">{notice.title}</div>
                  <div className="w-[13%] shrink-0">관리자</div>
                  <div className="w-[13%] text-[#B3B3B3] shrink-0">{notice.date}</div>
              </a>        
            </div>
            ))}
        </div> 

        {/* <ul class="pagination">
          <a href="?p=319&amp;page=1&amp;page=1" class="first">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M52.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l192 192c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L86.6 256 267.3 75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-192 192zm384-192l-192 192c-6.2 6.2-6.2 16.4 0 22.6l192 192c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 256 459.3 75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z"></path>
            </svg>
          </a>
          <a href="#url" class="prev">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path d="M20.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l192-192c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 256 235.3 436.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-192-192z"></path>
              </svg>
          </a>
                
            <ul class="num_list">
              <li class="active"><a href="#url" class="first">1</a></li>
              <li><a href=""></a></li>
              <li><a href="?p=319&amp;page=1&amp;page=3">3</a></li>               
            </ul>

            <a href="?p=319&amp;page=1&amp;page=11" class="next">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                  <path d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z"></path>
              </svg>
            </a>
            <a href="?p=319&amp;page=1&amp;page=13" class="last">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <path d="M75.3 459.3l192-192c6.2-6.2 6.2-16.4 0-22.6l-192-192c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L233.4 256 52.7 436.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zm192 0l192-192c6.2-6.2 6.2-16.4 0-22.6l-192-192c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L425.4 256 244.7 436.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z"></path>
              </svg>
            </a>
                
          </ul> */}
      </main>
    </Layout>
  );
}
