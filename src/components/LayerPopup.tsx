import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from 'next/image';

interface LayerPopupProps {
  isPopupOpen: boolean;
}
import ReactModal from "react-modal";

export default function LayerPopup({isPopupOpen}: LayerPopupProps) {
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    setIsPopup(isPopupOpen);
  }, [isPopupOpen]);
  
  function  handleCloseModal () {
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
        <Image src="/layerPopup_img01.png" alt="Layer Popup" className="cursor-pointer" width={891} height={1260} onClick={() => window.open("https://kij0423.mycafe24.com/user2/index.php", '_blank')}/>
        <button onClick={handleCloseModal} style={{padding:'5px 10px',backgroundColor:'#3c3c3c'}}>Close</button>
      </ReactModal>
    </div>
  )
}

// Removed duplicate export default statement