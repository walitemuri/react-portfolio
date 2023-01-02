import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/wali-temuri-b4ba23248"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/walitemuri" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/OneWhoProfesses" target="_blank">
        <TfiTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
