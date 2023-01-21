import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/wali-temuri"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/walitemuri" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://twitter.com/walitemuri" target="_blank" rel="noreferrer">
        <TfiTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
