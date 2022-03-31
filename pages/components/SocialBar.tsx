import React, {useState, useEffect, useRef} from 'react'
import { gsap } from "gsap"

import { motion } from "framer-motion";

import Link from 'next/link';


const SocialBar = (props:any) => {
  
  let boxRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      gsap.to(boxRef.current, 0.5, { 
        x:- window.scrollY,        
      });
    })
  }, [])
      
  useEffect(() => {    
    gsap.to(boxRef.current, 1, { 
      y: 0,
      opacity:2,
      delay:2
    });
  },[]);

  const animation = {
    exit : {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: [.19,1,.22,1]
      }
    },
  }

  return (
    <>
      {
        <motion.div variants={animation} exit="exit">
          <div className="h-[100px] overflow-hidden">
            <div className="w-fit text-[64px] text-black font-normal md:text-[64px] leading-[55px] md:leading-[70px] marquee-effect 
              h-[100px] pt-3.5 bg-[#FF3D00]" ref={boxRef} style={{opacity:0, transform:"translate(0,200px)"}}>
                
              <Link href={'#'}>
                <a target={'_blank'}>
                  Facebook
                </a>
              </Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <Link href={'#'}>
                <a target={'_blank'}>
                  INSTAGRAM
                </a>
              </Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <Link href={'#'}>
                <a target={'_blank'}>
                  LINKEDIN
                </a>
              </Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <Link href={'#'}>
                <a target={'_blank'}>
                  Facebook
                </a>
              </Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <Link href={'#'}>
                <a target={'_blank'}>
                  INSTAGRAM
                </a>
              </Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <Link href={'#'}>
                <a target={'_blank'}>
                  LINKEDIN
                </a>
              </Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <Link href={'#'}>
                <a target={'_blank'}>
                  Facebook
                </a>
              </Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <Link href={'#'}>
                <a target={'_blank'}>
                  INSTAGRAM
                </a>
              </Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <Link href={'#'}>
                <a target={'_blank'}>
                  LINKEDIN
                </a>
              </Link>
              &nbsp;&nbsp;/&nbsp;&nbsp;

            </div>
          </div>
        </motion.div>
      }
    </>       
  )
}

export default SocialBar