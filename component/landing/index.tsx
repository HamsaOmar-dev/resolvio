import React from "react";
import Image from "next/image";
import styles from "@/styles/Landing.module.css";
import { Rate } from "antd";
import Header from "../common/Header";
import button_left from "../../public/img/button_left.svg";
import profit_left from "../../public/img/profit_left.svg";
import hero_bottom_bg from "../../public/img/hero_bottom_bg.svg";
import vuesax_icon from "../../public/img/vuesax_icon.svg";
import clock_icon from "../../public/img/clock_icon.svg";
import app_icon from "../../public/img/app_icon.svg";
import coin_icon from "../../public/img/coin_icon.svg";
import transfer_icon from "../../public/img/transfer_icon.svg";
import bag_icon from "../../public/img/bag_icon.svg";
import wallet_icon from "../../public/img/wallet_icon.svg";
import user_img from "../../public/img/user_img.svg";
import logo1 from "../../public/img/logo1.svg";
import logo2 from "../../public/img/logo2.svg";
import logo3 from "../../public/img/logo3.svg";
import logo4 from "../../public/img/logo4.svg";
import logo5 from "../../public/img/logo5.svg";
import next_arrow from "../../public/img/next_arrow.svg";
import prev_arrow from "../../public/img/prev_arrow.svg";
import border_dash from "../../public/img/border_dash.svg";
import quote from "../../public/img/quote.svg";
import Slider from "react-slick";

const Landing = () => {
  const companyLogos = [logo1, logo2, logo3, logo4, logo5];
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  function SampleNextArrow(props: any) {
    const { style, onClick } = props;
    return (
      <Image
        src={next_arrow}
        alt="next"
        className={styles.nextbtn}
        style={{
          ...style,
          position: "absolute",
          top: "36%",
          right: "-5px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { style, onClick } = props;
    return (
      <Image
        src={prev_arrow}
        alt="prev"
        className={styles.nextbtn}
        style={{
          ...style,
          position: "absolute",
          top: "36%",
          left: "-5px",
          zIndex: 999,
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  }

  const settings3 = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className={styles.hero_container}>
        <div className={styles.hero_header_text}>
          Get Your Profits Back. Take Control of Your Delivery Revenue
        </div>
        <div className={styles.hero_desc_container}>
          Our platform offers a comprehensive solution to help you recover lost
          revenue. Try it now for your Business solutions
        </div>
        <div className={styles.button_design}>
          <Image src={button_left} alt="design" />
          <a href="#get-strated">
            <button>Try it out</button>
          </a>
          <Image
            src={button_left}
            alt="design"
            className={styles.right_btn_img}
          />
        </div>
        <Image
          src={hero_bottom_bg}
          alt="bottom-bg"
          className={styles.bottom_bg}
        />
      </div>
      <div>
        <div className={styles.slider_header}>
          Trusted By Thousands of Restaurants
        </div>
        <div className={styles.slider_container2}>
          <Slider {...settings2}>
            {companyLogos.map((data, index) => (
              <div className={styles.company_logo_container} key={index}>
                <Image src={data} alt="company" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.profit_container} id="features">
        <div className={styles.image_container}>
          <Image src={profit_left} alt="" />
        </div>
        <div className={styles.profit_right_container}>
          <div className={styles.profit_text}>
            Increase your Profit with our Service
          </div>
          <div className={styles.profit_desc}>
            Lorem ipsum dolor sit amet consectetur. Nisl tincidunt dolor nulla
            in convallis nibh. Dui non arcu massa quisque et. Tellus et
            adipiscing ac magna mi cras condimentum hac interdum.{" "}
          </div>
          <div className={styles.icon_text_container}>
            <div className={styles.icon_text}>
              <Image src={border_dash} alt="" className={styles.border_dash} />
              <Image
                src={vuesax_icon}
                alt="gurantee"
                className={styles.icon_orange}
              />
              <div className={styles.icon_right_text}>
                Guranteed Compennsation for Lost Deliveries
              </div>
            </div>
            <div className={styles.icon_text}>
              <Image
                src={clock_icon}
                alt="clock"
                className={styles.icon_orange}
              />
              <div className={styles.icon_right_text}>
                Real Time Tracking and Monitoring
              </div>
            </div>
            <div className={styles.icon_text}>
              <Image src={app_icon} alt="app" className={styles.icon_orange} />
              <div className={styles.icon_right_text}>
                Seamless Integration with your Existing Systems
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="service">
        <div className={styles.choose_text}>
          Why you must Choose us as your Partners{" "}
        </div>
        <div className={styles.card_container}>
          <div className={styles.partner_card}>
            <Image src={coin_icon} alt="coin" />
            <h2>Fast and Easy Claim Process</h2>
            <div>
              With just a few clicks, you can submit your claim and our team
              will handle the rest.
            </div>
          </div>
          <div className={styles.partner_card}>
            <Image src={transfer_icon} alt="coin" />
            <h2>No Upfront Costs</h2>
            <div>
              We offer a contingency fee model where we only get paid if we
              successfully recover your losses.
            </div>
          </div>
          <div className={styles.partner_card}>
            <Image src={bag_icon} alt="coin" />
            <h2>Experienced Legal Team</h2>
            <div>
              With our expertise and knowledge of the law, we can help you get
              the compensation you deserve.
            </div>
          </div>
          <div className={styles.partner_card}>
            <Image src={wallet_icon} alt="coin" />
            <h2>Maximum Compensation</h2>
            <div>
              We will work tirelessly on your behalf to ensure that you get the
              best possible outcome for your claim
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testonomial_container} id="testimonial">
        <Slider {...settings3}>
          <div>
            <div className={styles.comment_container}>
              <span>&quot;</span>
              <div>
                Using this platform has been a game-changer for our restaurant.
                We no longer have to worry about losing money on deliveries, it
                helped us stay on top of all our orders
              </div>
              <span>&quot;</span>
            </div>
            <div className={styles.rating_name_container}>
              <div className={styles.name_img}>
                <Image src={user_img} alt="user" />
                <div>Omar</div>
              </div>
              <Rate disabled defaultValue={4} />
            </div>
          </div>
          <div>
            <div className={styles.comment_container}>
              <span>&quot;</span>
              <div>
                Using this platform has been a game-changer for our restaurant.
                We no longer have to worry about losing money on deliveries, it
                helped us stay on top of all our orders
              </div>
              <span>&quot;</span>
            </div>
            <div className={styles.rating_name_container}>
              <div className={styles.name_img}>
                <Image src={user_img} alt="user" />
                <div>Omar</div>
              </div>
              <Rate disabled defaultValue={4} />
            </div>
          </div>
        </Slider>
      </div>
      <div className={styles.form_container} id="get-strated">
        <div className={styles.form_title}>
          Revitalize Your Restaurant Revenue: Request a Demo of Our Driver Food
          Loss Recovery Solution
        </div>
        <div>
          <div className={styles.form_flex}>
            <div className={styles.label_input}>
              {/* <label>First Name</label> */}
              <input type="text" placeholder="First Name" />
            </div>
            <div className={styles.label_input}>
              {/* <label>last Name</label> */}
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className={styles.form_flex}>
            <div className={styles.label_input}>
              {/* <label>Company Email</label> */}
              <input type="email" placeholder="Company Email" />
            </div>
            <div className={styles.label_input}>
              {/* <label>Phone</label> */}
              <input type="number" placeholder="Phone" />
            </div>
          </div>
          <div className={styles.label_input}>
            {/* <label>Company Name</label> */}
            <input type="text" placeholder="Company Name" />
          </div>
          <button className={styles.demo_btn}>Get a Demo</button>
        </div>
      </div>
      <div className={styles.copy_right_text}>Copyright © Resolvio 2023</div>
    </>
  );
};

export default Landing;
