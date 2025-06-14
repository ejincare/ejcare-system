import BusinessIconBox from "./BusinessIconBox";



export default function BusinessIconBoxWrap() {

    const iconBoxCon = [
        {
            iconPath :"/img/icon1.png",
            title :"시설관리부문",
            description :"-기계 설비에 대한 유지관리 업무(열원설비,공조설비,급/배수 설비,급탕설비,가스설비,위생설비 등)<br/>-전기설비,정보통신에대한 유지 관리<br/>-방재센터 운영,법정선입,예방관리",
        },
        {
            iconPath :"/img/icon2.png",
            title :"행정관리 부문",
            description :"-빌딩 운영계획 수립, 관리단에 협초,지원,보고<br/>-운영예산 편성 및 관리비 부과<br/>-시설외주보수공사 현장 감독<br/>-비품,공기구관리,청소요품 수불보고<br/>-회계관리,고객 민원처리,조경관리 등",
        },
        {
            iconPath :"/img/icon3.png",
            title :"보안/주차/조경관리 부문",
            description :"-방범설비 작동여부,기계훼손 확인<br/>-입주자 보호 및 방문객 안내/통제<br/>-화재 및 도난/사고 예방관리<br/>-순찰 및 보안 활동 강화,시설물 파손 확인<br/>-조경 실내/외 관리",
        },
        {
            iconPath :"/img/icon4.png",
            title :"위생관리 부문",
            description :"-일상청소:로비,화장실,계단,복도<br/>-정기청소:내/외벽 유리,금속류 등<br/>-특별청소:시공관련 청소, 기타 등<br/>-야간청소:쓰레기수거,공용부문 왁스 작업<br/>-방역/소독:쓰레기 처리 등",
        }
    ]
    return (
        <section className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 min-h-48 text-gray-800 text-2xl font-bold my-20">
            {iconBoxCon.map((iconBoxCon, index) => (
                <BusinessIconBox key={index} iconPath={iconBoxCon.iconPath} title={iconBoxCon.title} description={iconBoxCon.description} />
            ))}
        </section>
    )
}