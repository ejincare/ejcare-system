import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from 'next/image';

interface LayerPopupProps {
  isPopupOpen: boolean;
}
import ReactModal from "react-modal";

const POPUP_KEY = "layerPopupClosedUntil";

export default function LayerPopup({isPopupOpen}: LayerPopupProps) {
  const [isPopup, setIsPopup] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const closedUntil = localStorage.getItem(POPUP_KEY);
      if (closedUntil && new Date(closedUntil) > new Date()) {
        setIsPopup(false);
      } else {
        setIsPopup(isPopupOpen);
      }
    }
  }, [isPopupOpen]);

  function handleCloseModal() {
    if (dontShow) {
      const until = new Date();
      until.setHours(until.getHours() + 24);
      localStorage.setItem(POPUP_KEY, until.toISOString());
    }
    setIsPopup(false);
  }

  return (
    <div>
      <ReactModal 
          isOpen={isPopup}
          contentLabel="Minimal Modal Example"
          style={{ 
            overlay: { zIndex: 1000, backgroundColor:'rgba(0, 0, 0, 0.75)' } 
            , content: {position:'relative', width: '400px', height: 'auto', inset:'unset', margin: '100px auto', padding: '0', border: 'none', backgroundColor:'transparent',color :'#fff'}
          }}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={handleCloseModal}
      >
        <Link href="https://kij0423.mycafe24.com/user2/search_addr.php" target="_blank" title="관리비 견적내기 링크">
          <Image src="/layerPopup_img01.png" alt="Layer Popup" className="cursor-pointer" width={891} height={1260} />    
        </Link>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <label style={{display: 'flex', alignItems: 'center', fontSize: 14}}>
            <input
              type="checkbox"
              checked={dontShow}
              onChange={e => setDontShow(e.target.checked)}
              style={{marginRight: 6}}
            />
            오늘 하루 열지 않기
          </label>
          <button onClick={handleCloseModal} style={{padding:'5px 10px',backgroundColor:'#3c3c3c'}}>닫기</button>
        </div>
      </ReactModal>
    </div>
  )
}