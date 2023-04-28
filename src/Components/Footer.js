import React from "react";

export default function Footer() {
  return (
    <div className="footer bg-dark">
      <p className="footer-cont1">copyright &#169; All Rights Reserved </p>
      <div className="footer-cont2">
        <li className="item footerItem">
          <a className="link active footerLinkPP" aria-current="page" href="/">
            Privacy Policy
          </a>
        </li>
        <li className="item footerItem">
          <a className="link footerLinkTNC" href="/">
            Terms & Conditions
          </a>
        </li>
      </div>
    </div>
  );
}
