import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/IntroPage.css';

const productNames = [
  '올리브 오일 바디워시', '콜라겐 파우더', '신비 복숭아', '인공지능 자동 건조기', 
  '아보카도 오일', '스마트 거울', '블루투스 녹음기', '무알콜 로제 와인', 
  '180L 대형 바구니', '스크럽 바디워시', '엔드그레인 도마', '신형 적축 기계식 키보드', 
  '알레르기 성분 없는 데오드란트', '미슐랭 밀키트', 'SmartThings 연동 센서', 
  '경추 기능성 베개', '혈당 측정기', '자동식물 관리기', '방수 우산', 
  '에어홀 실크 웨어', '자동 채소 세척기', '슬림 여권 케이스', '높이 조절 책상', 
  '휴대용 샴푸', '100% 오크 원목 테이블', '광할나무 미백크림', '무선 LED 라이트', 
  '서리태 두부 두유', 'TPE 매트', '그릭요거트 쿠키', '무선 휴대 빙수기', 
  '1분 청소 스프레이', '프리미엄 모션 데스크', '휴대용 에어컨', '끈적임 없는 파운데이션', 
  '218g 휴대용 태블릿', '극세사 샤워 가운', '뽀송 파우더', '발이 안 아픈 깔창', 
  '크레마 커피머신', '화상방지 쿨링 고데기', '온도 측정 스마트 스푼', 
  '층간 소음 방지 에어 매트', '피부용 에이지샷 엠플', '초대형 240hz 모니터', 
  '습관 텀블러', '친환경 소재 동화책'
];

const IntroPage = () => {
  const [productName, setProductName] = useState(productNames[0]);
  const [viewerCount, setViewerCount] = useState(31300);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomProductName = productNames[Math.floor(Math.random() * productNames.length)];
      setProductName(randomProductName);
    }, 3000);

    const countInterval = setInterval(() => {
      setViewerCount(Math.floor(Math.random() * (500000 - 100000 + 1)) + 10000);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <div className="intro-page">
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="intromsg">
        <h2>지금, 이 곳에서는</h2>
        <h1>{productName}</h1>
        <p>{viewerCount} 명의 사람들이 보고 있어요.</p>
        <Link to="/main" className="start-button">지금 시작하기↗</Link>
      </div>
    </div>
  );
};

export default IntroPage;
