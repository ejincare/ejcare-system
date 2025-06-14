import Layout from "@/components/Layout";
import SubHeader from "@/components/SubHeader";
import { useQuery, gql } from "@apollo/client";
import { get } from "http";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Pagination from "@/components/Pagination";
import { GetServerSideProps, NextPage } from "next";
import { client } from "@/utils/apolloClient";
import { log } from "console";
import Link from "next/link";

interface Notice {
    id: string;
    title: string;
    content: string;
    date: string;
}

interface NoticeData {
    noticeBy: Notice | null;
}

const GET_NOTICE = gql`
query NoticeQuery($noticeId: Int!) {
    noticeBy(noticeId: $noticeId) {
    id
    title
    content
    date
    }
}
`;

const NoticeDetail: NextPage<NoticeData> = ({ noticeBy }) => {
    const { id, title, content, date } = noticeBy || {};
    // console.log("NoticeDetail props:", noticeBy);
    
    if (!noticeBy) {  // 게시글이 없을 경우 처리
        return (
            <Layout>
                <main className="max-w-screen-xl mx-auto justify-center w-full text-center box-border px-5 xl:px-0 md:gap-[90px] pt-[72px] pb-[100px]">
                <SubHeader title_kor="공지사항" title_eng={""} />
                <div className="notice-detail">
                    <h1>공지사항을 찾을 수 없습니다.</h1>
                </div>
                </main>
            </Layout>
        );
    }
    
    return (
        <Layout>
            <main className="max-w-screen-xl mx-auto justify-center w-full text-center box-border px-5 xl:px-0 md:gap-[90px] pt-[72px] pb-[100px] text-black">
                <SubHeader title_kor={title ?? ''} title_eng={""} />
                <div className="notice-detail ">
                    {/* <h1>{title}</h1> */}
                    <p className="my-4">{date}</p>
                    <div dangerouslySetInnerHTML={{ __html: content || "" }} className="text-wrap my-6 py-4 bg-gray-100 rounded-md"/>
                </div>
                <div className="">
                    <Link href={{ pathname: '/notice/' }}
                    className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md my-4 inline-block">
                    목록으로 돌아가기
                    </Link>
                </div>
            </main>
        </Layout>
    );
}

// 서버 측에서 데이터를 가져오는 함수 (GraphQL 사용)
export const getServerSideProps : GetServerSideProps<NoticeData, { id: string }> = async (context) =>{
  if (!context.params || !context.params.id) {
    return {
      notFound: true,
    };
  }
  const { id } = context.params; // URL에서 동적 파라미터(id)를 가져옵니다.

//   console.log("Fetching notice with ID:", id);

  // 쿼리 변수 설정
  const queryOptions = {
    query: GET_NOTICE,
    variables: { noticeId: parseInt(id, 10) },
    skip: !id,
  };

  try {
    // GraphQL 쿼리 실행
    const data = await client.query<NoticeData>(queryOptions);

    // console.log("GraphQL response data:", data);
    // console.log("GraphQL response data.data:", data?.data?.noticeBy);

    // GraphQL 응답에서 게시글 데이터 추출
    const notice = data?.data?.noticeBy || null; // data 객체 안에 notice 필드에 데이터가 있습니다.

    if (!notice) {
       // 게시글을 찾지 못했을 경우 404 페이지 반환
      return {
        notFound: true,
      };
    }

    // 가져온 데이터를 props로 페이지 컴포넌트에 전달
    return {
      props: {
        noticeBy: notice || null, // notice 필드가 없을 경우 null 처리
      },
    };

  } catch (error) {
    console.error("GraphQL 요청 중 에러 발생:", error);
    // 에러 발생 시 404 페이지 또는 에러 페이지를 보여줄 수 있습니다.
    return {
      notFound: true,
    };
  }
}

export default NoticeDetail;