import React from 'react';
import Image from '../assets/avatar.svg';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
// import { motion } from "framer-motion";
// import { fadeIn  } from "../variants";

const Banner = () => {
  return (
      <section className="section" id="home">
          <div className="container mx-auto ">
              <div>
                  <div className="flex-1 text-center font-secondary lg:text-left">
                      <h1 className="text-[46px] font-bold leading-[0.8] lg:text-[72px]">
                          MWIHAKI<span>MWAURA</span>
                      </h1>

                  <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
                      <span className="text-white mr-4">I am</span>
                      <TypeAnimation sequence={['A SUPPLY CHAIN', 2000, 'PASSIONATE ABOUT IT', 2000]} speed={50} className='text-accent' wrapper="span" repeat={Infinity} />
                  </div>
                  </div>
                  <p className="mb-8 max-w-lg mx-auto lg:mx-0">
                      I am Mwihaki Mwaura, I am passionate about supply chain and distribution of products.
                  </p>
                  <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                      <button  className="btn btn-lg">Contact Me</button>

                      <a href="#" className="text-gradient btn-link">My Portfolio</a>
                  </div>
                  <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                        <a href="#">
                            <FaTwitter />
                        </a>
                      <a href="#">
                          <FaLinkedinIn />
                      </a>
                      <a href = "#">
                          <FaInstagram />
                      </a>

                  </div>
                  <div>
                      <img src={Image} alt="avatar" className="rounded-full mx-auto" />
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Banner;
