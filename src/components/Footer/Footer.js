import React from "react";
import useFooter from "../../custom-hooks/useFooter";

export default function Footer() {
  const [footerContent, isLoading] = useFooter();

  console.log(footerContent[0]);

  return (
    <footer>
      <div class="footer_wrapper">
        <div className="footer__nav">
          <p>{isLoading ? "..." : footerContent[0].fields.footerBlurb}</p>
        </div>
        <div className="footer__socials">
          <img
            src={process.env.PUBLIC_URL + "/assets/burger.png"}
            alt="Website navigation button"
          />
        </div>
      </div>
    </footer>
  );
}
