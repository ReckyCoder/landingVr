import data from "@json/home.json";

import logoVr from "@img/home/logoVr2.png";
import logoAppian from "@img/home/Appian.png";
import linkedin from "@img/home/linkedin.png";

export default function Footer() {
  return (
    <footer className="colorBg flex justify-between py-4 md:px-32 items-center px-5">
      <div className="flex items-center gap-5">
        <img
          className="w-0 invisible md:visible md:w-[130px]"
          src={logoVr}
          alt=""
        />
        <p className="text-white">{data.partnerShips}</p>
        <img className="ms-5 md:ms-0" src={logoAppian} alt="" />
      </div>
      <div className="flex gap-x-7 items-center">
        <p className="text-white">{data.siguenos}</p>
        <a
          href="https://www.linkedin.com/company/vr-group-chile/"
          target="_blank"
        >
          <img className="w-[50px]" src={linkedin} alt="" />
        </a>
      </div>
    </footer>
  );
}
