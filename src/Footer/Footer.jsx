import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center gap-[10px]  md:justify-between px-14 pt-[40px] pb-[80px] md:pb-[34px]">
      <div className="flex flex-col gap-[12px] md:flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          width="10"
          height="10"
          preserveAspectRatio="xMidYMid slice"
          style={{
            transform: "translate3d(0px, 0px, 0px)",
          }}
          className="w-[30%] h-[30%] lg:w-[20%] lg:h-[20%]"
        >
          <defs>
            <clipPath id="__lottie_element_2">
              <rect width="800" height="800" x="0" y="0"></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#__lottie_element_2)">
            <g
              transform="translate(400 400)"
              opacity="1"
              style={{ display: "block" }}
            >
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity="0"
                strokeMiterlimit="4"
                stroke="rgb(0,0,0)"
                strokeOpacity="1"
                strokeWidth="20"
                d=" M-243.26100158691406,-243.22900390625 C-243.26100158691406,-243.22900390625 243.26100158691406,243.22900390625 243.26100158691406,243.22900390625 M-243.22999572753906,243.25999450683594 C-243.22999572753906,243.25999450683594 243.22999572753906,-243.26100158691406 243.22999572753906,-243.26100158691406 M-344.0010070800781,0.02199999988079071 C-344.0010070800781,0.02199999988079071 344.0010070800781,-0.02199999988079071 344.0010070800781,-0.02199999988079071 M-0.02199999988079071,-344 C-0.02199999988079071,-344 0.02199999988079071,344 0.02199999988079071,344"
              >
                <animate
                  attributeName="stroke-width"
                  values="20; 20; 80; 80; 180; 180; 20; 20;"
                  keyTimes="0; 0.2; 0.333; 0.4; 0.533; 0.6; 0.8; 1"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  dur="3s"
                  repeatCount="indefinite"
                  keyTimes="0; 0.2; 0.333; 0.4; 0.533; 0.6; 0.8; 1"
                  values="0 0 0; 0 0 0; 45 0 0; 45 0 0; 90 0 0; 90 0 0; 135 0 0; 135 0 0;"
                />
              </path>
            </g>
          </g>
        </svg>

        <h4 className="text-[14px] md:w-40">© Shola Oladunjoye 2024</h4>
      </div>
      <div className="flex gap-[15px] text-[14px]">
        <h4 className="cursor-pointer hover:text-black/50">Twitter</h4>
        <h4 className="cursor-pointer hover:text-black/50">LinkedIn</h4>
        <h4 className="cursor-pointer hover:text-black/50">Mail</h4>
      </div>
    </footer>
  );
};

export default Footer;
