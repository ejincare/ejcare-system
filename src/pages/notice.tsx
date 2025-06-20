import Layout from "@/components/Layout";
import SubHeader from "@/components/SubHeader";
import { useQuery, gql } from "@apollo/client";
import { get } from "http";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Pagination from "@/components/Pagination";
import Link from "next/link";

export default function Notice() {
  const [content, setContent] = useState<string|undefined>()
  const [title, setTitle] = useState<string|undefined>()
  const [date, setDate] = useState<string|undefined>()
  const [viewCount, setViewCount] = useState<number|undefined>()
  const [contentID, setContentID] = useState<string|undefined>()
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const size = 10;


  interface Notice {
    id: string;
    databaseId: number;
    title: string;
    content: string;
    date: string;
  }
  interface NoticeNode {
    node: Notice;
  }  

  interface NoticeData  {
    notice: Notice | null;
  }
  interface NoticesData {
    notices: {
      edges: NoticeNode[];
      pageInfo: PageInfoNode;
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
    query NoticesQuery($size: Int!, $offset: Int!) {
      notices(where: {offsetPagination: {size: $size, offset:$offset }}) {
        edges {
          node {
            id
            databaseId
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

  const { data, loading, error } = useQuery<NoticesData>(GET_NOTICES, {
    variables: { size: size, offset: offset },
  });
  const { data: noticeData, loading: noticeLoading, error: noticeError } = useQuery<NoticeData>(GET_NOTICE, {
    variables: { id: contentID },
    skip: !contentID,
  });
  

  useEffect(() => {
    console.log('current page', currentPage);
    console.log((currentPage - 1) * size)
    setOffset((currentPage - 1) * size)
  }, [currentPage])

  const getNotice = (e: any, id: string) => {
    e.preventDefault();
    setContentID(id);
    console.log("id", id);
  }

  // if (loading) {
  //   return <h2>로딩중</h2>;
  // }

  // if (error) {
  //   return <h1>에러 발생</h1>;
  // }

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
  const notices = data?.notices.edges.map((edge) => edge.node);
  
  const pageCount = Math.ceil((data?.notices.pageInfo.offsetPagination?.total || 0) / size);
  console.log(pageCount);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected + 1);
  };
  

  return (
    <Layout>
      <main className="max-w-screen-xl mx-auto justify-center w-full text-center box-border px-5 xl:px-0 md:gap-[90px] pt-[72px] pb-[100px]">
        <SubHeader title_kor={"공지사항"} title_eng={"Notice"}/>

         <div className="pt-[100px]">
            <div className="flex items-center justify-start text-[1rem] font-[600] text-center border-t text-[#1f2937] border-black border-solid" >
                <div className="w-[6%] py-[1.4rem] px-[0]">번호</div>
                <div className="flex-1">제목</div>
                <div className="w-[13%] shrink-0">작성자</div>
                <div className="w-[13%] shrink-0">작성일자</div>
            </div>
            {notices?.map((notice: Notice, idx: number) => (
            <div key={`notice-${notice.id}`} className="w-full">
              {/* <a href={`/notice/${notice.databaseId}`} className="flex items-center justify-start py-[1.4rem] px-[0] border-t text-[#1f2937] border-[#e5e5e5] border-solid" > */}
              <Link href={{ pathname: '/notice/[id]', query: { id: notice.databaseId } }}
              className="flex items-center justify-start py-[1.4rem] px-[0] border-t text-[#1f2937] border-[#e5e5e5] border-solid"
              >
                <div className="w-[6%] text-[#B3B3B3] font-[600] text-center">{idx+1}</div>
                <div className="flex-1 font-[600] text-left">{notice.title}</div>
                <div className="w-[13%] shrink-0">관리자</div>
                <div className="w-[13%] text-[#B3B3B3] shrink-0">{notice.date.split("T")[0]}</div>
              </Link>
            </div>
            ))}
        </div> 

        {/* 페이지네이션 */}
        {pageCount > 0 && (
          <Pagination
            pageCount={Math.max(1, pageCount)}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        )}
      </main>
    </Layout>
  );
}
