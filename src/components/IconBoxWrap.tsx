import IconBox from "./IconBox";



export default function IconBoxWrap() {

    const iconBoxCon = [
        {
            iconPath :"/img/iconImg1.jpg",
            title :"건물관리 업계 1위의 빌딩<br/> 자산관리 노하우 보유",
            description :"축적된 경험을 바탕으로 문제점을 파악해 빌딩의 자산 가치 극대화를 위한 맞춤 솔루션을 제시합니다.",
        },
        {
            iconPath :"/img/iconImg1.jpg",
            title :"맞춤형<br/>자산관리",
            description :"대형빌딩 관리 기법을 중소형빌딩에 접목해 최적화된 솔루션을 제공합니다.",
        },
        {
            iconPath :"/img/iconImg1.jpg",
            title :"건물관리 분야 전문가<br/>자격증 최다 보유",
            description :"유지관리부터 미래가치 상승까지 내 건물에 딱 맞는 통합자산관리서비스를 제공합니다.",
        },
        {
            iconPath :"/img/iconImg1.jpg",
            title :"약 13,000여개<br/>건물관리 노하우 보유",
            description :"신축, 증축, 리모델링 등 빌딩 가치 증대를 위한 솔루션 제안과  공정관리를 통해 건물 가치 상승이 가능합니다",
        }
    ]
    return (
        <section className="max-w-screen-xl mx-auto grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 min-h-48 text-gray-800 text-2xl font-bold">
            {iconBoxCon.map((iconBoxCon, index) => (
                <IconBox key={index} iconPath={iconBoxCon.iconPath} title={iconBoxCon.title} description={iconBoxCon.description} />
            ))}
        </section>
    )
}