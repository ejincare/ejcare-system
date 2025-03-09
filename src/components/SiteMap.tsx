import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";


interface SiteMapProps {
  siteMapClose: (isSiteMap: boolean) => void;
}

const SiteMap: React.FC<SiteMapProps> = ({ siteMapClose }) => {
    const [isSiteMap, setIsSiteMap] = useState(true);
    function SiteMapClose () {
      setIsSiteMap((isSiteMap) => !isSiteMap)
      siteMapClose(isSiteMap);
    };
    return (
      <div className="cont">
        <ul className="list mt-3 flex flex-col">
          <li className="depth1 px-4 py-3">회사소개</li>
          <li className="depth1 px-4 py-3">사업분야</li>
          <li className="depth1 px-4 py-3">견적문의</li>
          <li className="depth1 px-4 py-3">사업실적</li>
          <li className="depth1 px-4 py-3">고객센터</li>
        </ul>
      </div>
    )
}

export default SiteMap;