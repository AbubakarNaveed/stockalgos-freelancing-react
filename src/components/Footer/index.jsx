import React from "react";
import "../../styles/Footer/footer.css";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineCopyright,
} from "react-icons/ai";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const index = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__social_media">
          <p>Follow us on</p>
          <AiFillInstagram size={18} color={"#717272"} />
          <AiFillTwitterCircle size={18} color={"#717272"} />
          <BsFacebook size={18} color={"#717272"} />
          <AiFillLinkedin size={18} color={"#717272"} />
          <FaTiktok size={18} color={"#717272"} />
        </div>
        <div className="footer__contact">
          <div className="footer__contact__border__flex">
            <AiOutlineMail size={14} color={"#717272"} />
            <p>admin1@stockalgos.com</p>
          </div>
          <div className="footer__contact__border">
            <p>Give Feedback</p>
          </div>
          <div className="footer__contact__border">
            <p>Experts</p>
          </div>
          <div className="footer__contact__border">
            <p>Help & Support</p>
          </div>
          <div className="footer__contact__border">
            <p>Privacy Policy</p>
          </div>
          <div className="footer__contact__noborder">
            <p>Merch Store</p>
          </div>
        </div>
        <div className="footer__copyright__section">
          <div className="footer__contact__border__flex">
            <AiOutlineCopyright size={14} color={"#717272"} />
            <p> 2023 StockAlgos</p>
          </div>
          <div className="footer__contact__noborder">
            <p>Proudly Canadian</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
