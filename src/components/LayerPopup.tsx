import Link from "next/link";
import React, { useEffect, useState } from "react";

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
            , content: {width: '400px', height: '100%', top: '100px', left: '0', right: '0', bottom: '0', margin: 'auto', padding: '0', border: 'none', backgroundColor:'transparent'}
          }}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={handleCloseModal}
      >
        <img src="/layerPopup_img01.png" alt="Layer Popup" className="cursor-pointer" width={"100%"} onClick={() => window.open("https://kij0423.mycafe24.com/user2/index.php", '_blank')}/>
        <button onClick={handleCloseModal}>Close</button>
      </ReactModal>
    </div>
  )
}

// Removed duplicate export default statement