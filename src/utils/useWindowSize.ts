import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // 윈도우 리사이즈 시 사이즈 업데이트 함수
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 초기 사이즈 설정
    handleResize();

    // 클린업 함수: 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('resize', handleResize);
  }, []); // 빈 배열을 넣어 마운트 될 때 한 번만 실행되도록 함

  return windowSize;
}

export default useWindowSize;
