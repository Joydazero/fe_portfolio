import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import trafficSystemImg from "../assets/imgs/project/y_2024_trafficsystem.jpg";
import keyangImg from "../assets/imgs/project/keyang.jpg";
import museumImg from "../assets/imgs/project/museumgo.jpg";
import dwshopImg from "../assets/imgs/project/dwshop.jpg";
import cellmedImg from "../assets/imgs/project/cellmed.jpg";
import lsmtronImg from "../assets/imgs/project/lsmtron.jpg";
import nextmomImg from "../assets/imgs/project/nextmom.jpg";
import kwshopImg from "../assets/imgs/project/kwshop.jpg";
import wholeseeImg from "../assets/imgs/project/wholesee.jpg";
import hijunguImg from "../assets/imgs/project/hijungu.jpg";
// import guccImg from "../assets/imgs/project/gucc.png";
// import newtreemallImg from "../assets/imgs/project/newtreemall.jpg";
// import storyhelperImg from "../assets/imgs/project/storyhelper.jpg";
// import velixerImg from "../assets/imgs/project/velixer.jpg";
// import omkImg from "../assets/imgs/project/omk.jpg";
// import jejejikImg from "../assets/imgs/project/jejejik.jpg";
// import hanlifeImg from "../assets/imgs/project/hanlife.jpg";
interface PublisherProject {
  title: string;
  description?: string[];
  tech: string[];
  date?: string;
  contribution: string;
  url?: string;
}
const publisherProjects: PublisherProject[] = [
  {
    title: "[보안]교통예보시스템 기능개선",
    description: [
      "디자인&퍼블리싱 : 기업홍보물 디자인, 관리자 신규페이지, 데이터 시각화 작업",
      "[내부]한국도로공사 교통예보시스템 : 교통안전 예보 총괄 및 모니터링 시스템 고도화 작업(반응형 웹, 레이아웃, 데이터 분석 그래프 개선)",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "echarts",
      "Photoshop",
      "Illustrator",
    ],
    date: "2024",
    contribution: "100%",
    url: trafficSystemImg,
  },
  {
    title: "BYC",
    description: ["BYC 공식 온라인 쇼핑몰"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    date: "2021~2023",
    contribution: "100%",
    url: "https://www.byc.co.kr/",
  },
  {
    title: "유니베라",
    description: ["유니베라 브랜드 쇼핑몰"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "100%",
    url: "https://www.univeramall.com/",
  },
  {
    title: "아에르",
    description: ["라이프 케어 솔루션"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "100%",
    url: "https://www.the-aer.com/",
  },
  {
    title: "포켓샐러드",
    description: ["건강한 다이어트 샐러드 제조,판매 브랜드"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "100%",
    url: "https://www.pocketsalad.co.kr/",
  },
  {
    title: "매크로온",
    description: ["수입사 직영 온라인몰"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "100%",
    url: "https://macro-on.com/",
  },
  {
    title: "곰표하우스",
    description: ["곰표의 70년 감성을 새롭게 재해석한 온라인 플래그쉽 스토어"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "100%",
    url: "https://www.gompyo.net/",
  },
  {
    title: "어도어럭스",
    description: ["유럽 60여개 부띠끄 직배송하는 온라인 명품쇼핑몰"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "100%",
    url: "https://www.adorelux.com/",
  },
  {
    title: "GC라이프케어",
    description: ["GC케어 공식 온라인 쇼핑몰"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "100%",
    url: "https://gclifecare.com/",
  },
  {
    title: "이브살로몬",
    description: ["100년 이상의 오랜 역사를 지닌 프랑스 프리미엄 퍼 브랜드"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "100%",
    url: "https://kr.yves-salomon.com/",
  },
  {
    title: "이솔화장품",
    description: ["정직한 기능성 저자극 화장품"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "100%",
    url: "https://www.2sol.co.kr/",
  },
  {
    title: "아크웰&지베르니",
    description: ["아크웰&지베르니 공식사이트"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "80%",
    url: "https://www.e-giverny.com/",
  },
  {
    title: "어바웃미",
    description: ["자연의 소재를 더 깨끗하게 정제하여 완성한 클린 뷰티 라이프"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "60%",
    url: "https://www.aboutmeshop.com/",
  },
  {
    title: "보틀웍스",
    description: ["마시는 차 정기구독 서비스"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "50%",
    url: "https://www.bottleworks.co.kr/",
  },
  {
    title: "하나원비즈마켓",
    description: ["고객과 함께 성장하는 판촉/사은품 브랜드"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "부분 작업 및 유지 보수",
    url: "https://www.bizpanchok.co.kr/"
  },
  {
    title: "일상건강 매거진",
    description: ["더 활기찬 내일을 위한 라이프스타일 가이드"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "부분 작업 및 유지 보수",
    url: "https://www.everydayhealth.co.kr/magazine/"
  },
  {
    title: "듀코몰",
    description: ["SJ.Duko 온라인 쇼핑몰 구축"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "부분 작업 및 유지 보수, 프로모션 이벤트 작업",
    url: "https://www.dukomall.com/"
  },
  {
    title: "TJ미디어(주)/리얼마스터몰",
    description: ["대한민국 반주기 업계 대표 브랜드 TJ미디어 스토어"],
    tech: [
      "반응형",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
    ],
    date: "2014~2019",
    contribution: "70%",
    url: "https://www.realmastermall.com/index.asp"
  },
  {
    title: "(주)계양전기",
    description: ["Global Mechatronics Company Site"],
    tech: [
      "반응형",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
    ],
    contribution: "70%",
    url: keyangImg
    //url: "https://www.keyang.co.kr/main/"
    //url: "http://www.keyang.kr/shop/main/index.php"
  },
  {
    title: "국립중앙박물관",
    description: ["국립중앙박물관 스토어"],
    tech: [
      "PC/Mobile Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
    ],
    contribution: "100%",
    url: museumImg
  },
  {
    title: "게임이용자보호센터",
    description: ["게임이용자보호센터"],
    tech: [
      "PC",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
    ],
    contribution: "60%",
    url: "http://www.gucc.or.kr/",
    //url: guccImg
  },
  {
    title: "뉴트리몰",
    description: ["건강기능식품 전문몰"],
    tech: [
      "Web/Mobile",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "100%",
    url: "https://newtreemall.co.kr",
    //url: newtreemallImg
  },
  {
    title: "대원미디어/대원샵",
    description: ["건강기능식품 전문몰"],
    tech: [
      "PC Web",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning",
    ],
    contribution: "100%",
    //url: "https://www.daewonshop.com",
    url: dwshopImg
  },
  {
    title: "KT Enterprise Service Portal 내부시스템 구축",
    description: ["내부 System Dev"],
    tech: [
      "PC Web",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
    ],
    contribution: "100%",
    url: "",
  },
  {
    title: "셀메드",
    tech: [
      "PC/Mobile Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "Gabia firstmall",
    ],
    contribution: "100%",
    url: cellmedImg
  },
  {
    title: "엔씨소프트문화재단/스토리헬퍼",
    tech: [
      "PC Web",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
    ],
    contribution: "100%",
    url: "https://www.ebn.co.kr/news/articleView.html?idxno=767671"
    //url: storyhelperImg
  },
  {
    title: "(주)청도프린팅/Revivook",
    tech: [
      "PC/Mobile Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning"
    ],
    contribution: "100%",
    url: "http://www.revivook.co.kr/"
  },
  {
    title: "LS그룹 / LS 엠트론 기술 교육 기관",
    tech: [
      "IR Web",
      "반응형웹",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
    ],
    contribution: "100%",
    //url: "http://lsmtronacademy.com/"
    url: lsmtronImg
  },
  {
    title: "Agabang/NEXTMOM",
    tech: [
      "PC/Mobile Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "Gabia firstmall",
    ],
    contribution: "100%",
    //url: "http://www.nextmom.co.kr"
    url: nextmomImg
  },
  {
    title: "강원전자",
    tech: [
      "PC/Mobile Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning"
    ],
    contribution: "60%",
    //url: "http://www.kwshop.co.kr"
    url: kwshopImg
  },
  {
    title: "에코샵홀씨(주)",
    tech: [
      "PC/Mobile Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning"
    ],
    contribution: "60%",
    //url: "http://www.wholesee.com/"
    url: wholeseeImg
  },
  {
    title: "하이전구",
    description: ["대한민국에서 사용하는 모든 전구를(10,000여개) 판매, 유통 BRAND"],
    tech: [
      "PC/Mobile Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning"
    ],
    contribution: "부분 작업 및 유지 보수",
    //url: "http://www.hijungu.com"
    url: hijunguImg
  },
  {
    title: "천하제일사료/벨릭서몰",
    description: ["동물병원 전문 BRAND"],
    tech: [
      "PC/Mobile Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning"
    ],
    contribution: "100%",
    url: "http://www.velixer.co.kr"
    //url: velixerImg
  },
  {
    title: "(주)옵티칼코리아/오마켓",
    description: ["대한민국 No.1 안경 도매몰"],
    tech: [
      "PC/Mobile Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "원데이넷 Solution"
    ],
    contribution: "100%",
    url: "http://www.opticalomarket.com/"
    //url: omkImg
  },
  {
    title: "아벤트코리아/jejejik",
    description: ["아벤트코리아 공식 쇼핑몰", "육아 큐레이터 제제지크"],
    tech: [
      "PC/Mobile Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning"
    ],
    contribution: "100%",
    url: "http://www.jejejik.com"
    //url: jejejikImg
  },
  {
    title: "(주)한생연",
    tech: [
      "PC/Mobile Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning"
    ],
    contribution: "100%",
    url: "http://hanlife.kr/"
    //url: hanlifeImg
  },
  {
    title: "(주)ASSA ABLOY KOREA/게이트맨",
    tech: [
      "Sales Registration System Mobile Web",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
    ],
    contribution: "50%",
    //url: hanlifeImg
  },
  {
    title: "리프가구",
    tech: [
      "PC Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning"
    ],
    contribution: "70%",
    //url: "http://lifoa.co.kr/"
  },
  {
    title: "하늘재/팜스힐",
    tech: [
      "PC Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "godo Solution Tuning"
    ],
    contribution: "100%",
    //url: "http://hanulj.com/"
  },
  {
    title: "녹색한우",
    tech: [
      "PC Shopping mall",
      "HTML5",
      "CSS3",
      "js",
      "jQuery",
      "Gabia firstmall",
    ],
    contribution: "100%",
    //url: "http://www.greenhanwoo.com/"
  },
];




const WebPublisherPage: React.FC = () => {
  return (
    <div className="container mx-auto py-32 px-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-20"
      >
        <Link
          to="/projects"
          className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-4 block"
        >
          ← Back to Projects
        </Link>
        <h1 className="text-6xl font-black mb-4 tracking-tighter italic">
          WEB PUBLISHER
          <br />
          PROJECTS
        </h1>
        <p className="text-gray-500 text-xl font-light">
          마크업과 시맨틱 태그에 집중한 웹 퍼블리싱 결과물들입니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 max-w-5xl">
        {publisherProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ delay: index * 0.05 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{
              duration: 0.4,
              delay: index % 5 * 0.02,
              ease: "easeOut"
            }}
            className="group border-b border-gray-100 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          >
            <div className="flex-1">
              <span className="text-xs font-mono text-gray-400 mb-2 block">
                {project.date}
              </span>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent decoration-2 underline-offset-8">
                {project.title}
              </h2>
              {project.description?.map((d) => (
                <p className="text-gray-500 text-lg mb-6 max-w-2xl" key={d}>
                  {d}
                </p>
              ))}
              <p className="text-gray-500 text-lg mb-6 max-w-2xl">
                작업 기여도 : {project.contribution}
              </p>
              <div className="flex gap-3 flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-300 rounded-full text-xs font-bold text-gray-950 uppercase tracking-widest cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {project.url && (
              <Link
                to={project.url}
                target="_blank"
                className="px-8 py-4 border border-black rounded-full font-bold hover:bg-black hover:text-white transition-all transform hover:scale-105"
              >
                View Project
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebPublisherPage;
