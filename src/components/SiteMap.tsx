import React from "react";

const SiteMap = () => {
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