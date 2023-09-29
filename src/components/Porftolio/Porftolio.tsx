import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import { Arrow1Icon } from "./Arrow1Icon.tsx";
import { BiPhoneIcon } from "./BiPhoneIcon.tsx";
import { BussinessnavIcon2 } from "./BussinessnavIcon2.tsx";
import { BussinessnavIcon3 } from "./BussinessnavIcon3.tsx";
import { BussinessnavIcon4 } from "./BussinessnavIcon4.tsx";
import { BussinessnavIcon5 } from "./BussinessnavIcon5.tsx";
import { BussinessnavIcon6 } from "./BussinessnavIcon6.tsx";
import { BussinessnavIcon7 } from "./BussinessnavIcon7.tsx";
import { BussinessnavIcon } from "./BussinessnavIcon.tsx";
import { ChattingnavIcon2 } from "./ChattingnavIcon2.tsx";
import { ChattingnavIcon3 } from "./ChattingnavIcon3.tsx";
import { ChattingnavIcon4 } from "./ChattingnavIcon4.tsx";
import { ChattingnavIcon } from "./ChattingnavIcon.tsx";
import { DeviconFigmaIcon } from "./DeviconFigmaIcon.tsx";
import { Ellipse1Icon } from "./Ellipse1Icon.tsx";
import { Ellipse6Icon2 } from "./Ellipse6Icon2.tsx";
import { Ellipse6Icon3 } from "./Ellipse6Icon3.tsx";
import { Ellipse6Icon4 } from "./Ellipse6Icon4.tsx";
import { Ellipse6Icon5 } from "./Ellipse6Icon5.tsx";
import { Ellipse6Icon6 } from "./Ellipse6Icon6.tsx";
import { Ellipse6Icon7 } from "./Ellipse6Icon7.tsx";
import { Ellipse6Icon8 } from "./Ellipse6Icon8.tsx";
import { Ellipse6Icon9 } from "./Ellipse6Icon9.tsx";
import { Ellipse6Icon } from "./Ellipse6Icon.tsx";
import { Ellipse7Icon2 } from "./Ellipse7Icon2.tsx";
import { Ellipse7Icon3 } from "./Ellipse7Icon3.tsx";
import { Ellipse7Icon4 } from "./Ellipse7Icon4.tsx";
import { Ellipse7Icon5 } from "./Ellipse7Icon5.tsx";
import { Ellipse7Icon6 } from "./Ellipse7Icon6.tsx";
import { Ellipse7Icon7 } from "./Ellipse7Icon7.tsx";
import { Ellipse7Icon8 } from "./Ellipse7Icon8.tsx";
import { Ellipse7Icon } from "./Ellipse7Icon.tsx";
import { Ellipse8Icon } from "./Ellipse8Icon.tsx";
import { HomenavIcon2 } from "./HomenavIcon2.tsx";
import { HomenavIcon3 } from "./HomenavIcon3.tsx";
import { HomenavIcon4 } from "./HomenavIcon4.tsx";
import { HomenavIcon } from "./HomenavIcon.tsx";
import { LogosCss3Icon } from "./LogosCss3Icon.tsx";
import { LogosHtml5Icon } from "./LogosHtml5Icon.tsx";
import { LogosJavascriptIcon } from "./LogosJavascriptIcon.tsx";
import { LogosReactIcon } from "./LogosReactIcon.tsx";
import { MailIcon } from "./MailIcon.tsx";
import { MaskGroupIcon } from "./MaskGroupIcon.tsx";
import classes from "./Porftolio.module.css";
import { ProfilenavIcon2 } from "./ProfilenavIcon2.tsx";
import { ProfilenavIcon3 } from "./ProfilenavIcon3.tsx";
import { ProfilenavIcon4 } from "./ProfilenavIcon4.tsx";
import { ProfilenavIcon } from "./ProfilenavIcon.tsx";
import { Rectangle1Icon } from "./Rectangle1Icon.tsx";
import { SkillIconsReduxIcon } from "./SkillIconsReduxIcon.tsx";
import { SkillIconsTypescriptIcon } from "./SkillIconsTypescriptIcon.tsx";
import { TeenyiconsInstagramSolidIcon } from "./TeenyiconsInstagramSolidIcon.tsx";
import { VectorIcon } from "./VectorIcon.tsx";
import { motion } from "framer-motion";






const Varients = {
  photoInitial: {
    marginLeft: "-5000px",
  },
  AniPhoto: {
    marginLeft: "14px",
  },

  hidden: {
    opacity: 0,
  },
  visiable: {
    opacity: 1,
  },
};
// const Naver = {
//   shift: {
//     marginLeft: "2000px",
//   },
//   unshift: {
//     marginLeft: "1275px",
//   },
// };

const AboutButton = {
  abouthidden: {
    marginTop: "650px",
  },
  aboutVisiable: {
    marginTop: "450px",
  },
};

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const Porftolio: FC<Props> = memo(function Porftolio() {

  


  return (
    <div  className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.home1}></div>
      <motion.div
        initial={{
          marginLeft: "2000px"
        }}
        animate={{
          marginLeft:  "1275px" 
        }}
        transition={{ duration: 1.5 }}
        className={classes.navbar1}
      >
        <a href="#frame8">
        <motion.div className={classes.chattingNav}>
          <ChattingnavIcon className={classes.icon} />
        </motion.div>
        </a>
       
<a href="#frame9">
<motion.div className={classes.bussinessNav}>
          <BussinessnavIcon className={classes.icon2} />
        </motion.div>
</a>

        <motion.div className={classes.homenav}>
          <HomenavIcon className={classes.icon3} />
        </motion.div>
      <a href="#sectionB">
      <motion.div className={classes.profileNav}>
          <ProfilenavIcon className={classes.icon4} />
        </motion.div>
      </a>
      </motion.div>

      {/* tablet */}

      <motion.div
      initial={{
        marginTop: "-20px",
      }}
animate={{
  marginTop: "10px"
}}
transition={{
  duration: 1.2,
  type: "spring",
}}

        className={classes.navbar4}
      >
        <a href="#frame8">
        <motion.div className={classes.chattingNav}>
          <ChattingnavIcon className={classes.icon} />
        </motion.div>
        </a>
       
<a href="#frame9">
<motion.div className={classes.bussinessNav}>
          <BussinessnavIcon className={classes.icon2} />
        </motion.div>
</a>

      <a href="#profile">
      <motion.div className={classes.homenav}>
          <HomenavIcon className={classes.icon3} />
        </motion.div>

      </a>
        
      <a href="#sectionB">
      <motion.div className={classes.profileNav}>
          <ProfilenavIcon className={classes.icon4} />
        </motion.div>
      </a>
      </motion.div>






      <motion.div className={classes.portfolio} id="profile" >
        <motion.div className={classes.rectangle1}>
          <Rectangle1Icon className={classes.icon5} />
        </motion.div>
       
        <motion.div
          variants={Varients}
          initial="photoInitial"
          animate="AniPhoto"
          transition={{ duration: 1.9, type: "spring" }}
          className={classes.photo421}
        ></motion.div>


      </motion.div>
      <div className={classes.intro}>
        <div className={classes.rectangle2}></div>
        <motion.div
          variants={Varients}
          initial="hidden"
          whileInView="visiable"
          transition={{ duration: 1.9 }}
          className={classes.iMSANDESHBK}
        >
          I’M SANDESH BK.
        </motion.div>
        <motion.div
          variants={Varients}
          initial="hidden"
          whileInView="visiable"
          transition={{ duration: 1.9 }}
          className={classes.rEACTFRONTENDDEVELOPERFIGMADEV}
        >
          REACT FRONT END DEVELOPER | FIGMA DEVELOPER
        </motion.div>

<motion.div
        
        variants={Varients}
        initial="hidden"
        whileInView= "visiable" 
        transition={{ duration: 1.9 }}
        className={classes.iMAPassionateReactFrontendDeve}
      >
        I&#39;m a passionate React frontend developer and UI/UX designer 
        proficient in Figma, eager to apply my skills and learn from 
        experienced professionals. I believe in user-centered design  to
        enhance digital experiences and writing clean code .Joining your team
        as an intern would be a fantastic opportunity to contribute and grow.
      </motion.div>




      </div>
      <motion.div
        variants={AboutButton}
        initial="abouthidden"
        whileInView="aboutVisiable"
        transition={{ duration: 1.5 }}
        className={classes.aboutbtn}
      >
        <motion.div className={classes.rectangle3}></motion.div>
        <motion.div className={classes.ellipse1}>
          <Ellipse1Icon className={classes.icon6} />
        </motion.div>
        <div className={classes.moreAboutMe}>More about me </div>
        <div className={classes.arrow1}>
          <Arrow1Icon className={classes.icon7} />
        </div>
      </motion.div>

      <div className={classes.sectionB} id="sectionB">
        <div className={classes.pORTFOLIO}>PORTFOLIO</div>
        <motion.div
        initial={{marginLeft: "-200px"}}
        whileInView={{
          marginLeft: "550px"
        }}
        transition={{
          duration : 1.3 ,
        }}
        className={classes.aBOUTME}>
          <motion.p className={classes.labelWrapper}>
            <span className={classes.label}>ABOUT </span>
            <span className={classes.label2}>ME</span>
          </motion.p>
        </motion.div>


{/* Mobile */}

<motion.div
        initial={{marginLeft: "-200px"}}
        animate={{
          marginLeft: "100px"
        }}
        transition={{
          duration : 1.3 ,
        }}
        className={classes.aBOUTMEM}>
          <motion.p className={classes.labelWrapperM}>
            <span className={classes.labelM}>ABOUT </span>
            <span className={classes.label2M}>ME</span>
          </motion.p>
        </motion.div>








       
<motion.div 
initial={{opacity: 0}}
        whileInView={{
          opacity: 1
        }}
       className={classes.mYSKILLS}>MY SKILLS</motion.div>
    
        <div
        className={classes.frame19}>
         <div className={classes.edu}>
            <div className={classes.frame5}>
              <div className={classes.rectangle4}></div>
              <motion.div
              initial={{marginTop: "-20px" , opacity: 0}}
              whileInView={{marginTop: "0px" , opacity: 1}}
              transition={{delay: 0.6}}
              className={classes._2019}>2019</motion.div>
            </div>

            <div className={classes.frame6}>
              <div
              className={classes.rectangle42}></div>
              <motion.div
                initial={{marginTop: "-20px" , opacity: 0}}
                whileInView={{marginTop: "0px" , opacity: 1}}
                transition={{delay: 0.8}}
              className={classes._2021}>2021</motion.div>
            </div>

            <div className={classes.frame7}>
              <div className={classes.rectangle43}></div>
              <motion.div
              initial={{marginTop: "-20px" , opacity: 0}}
              whileInView={{marginTop: "0px" , opacity: 1}}
              transition={{delay: 1}}
              className={classes._2021OngoingBachelor}>
                2021 - ongoing bachelor
              </motion.div>
            </div>
            <motion.div
            initial={{marginTop: "-20px" , opacity: 0}}
            whileInView={{marginTop: "0px" , opacity: 1}}
            transition={{delay: 0.6}}
            className={classes.completedSEEFromVinayakHighSch}>
              Completed SEE from vinayak high school{" "}
            </motion.div>
            <motion.div
            initial={{marginTop: "-20px" , opacity: 0}}
            whileInView={{marginTop: "0px" , opacity: 1}}
            transition={{delay: 0.8}}
            className={classes.completed2FromUniglobeCollege}>
              Completed +2 from uniglobe college
            </motion.div>
            <div className={classes.eDUICON}>
              <motion.div
              initial={{marginTop: "-20px" , opacity: 0}}
              animate={{marginTop: "0px" , opacity: 1}}
              transition={{delay: 0.6}}
              className={classes.bussinessNav2}>
                <BussinessnavIcon2 className={classes.icon8} />
              </motion.div>

              <motion.div
              initial={{marginTop: "-20px" , opacity: 0}}
              animate={{marginTop: "0px" , opacity: 1}}
              transition={{delay: 1}}
              className={classes.bussinessNav3}>
                <BussinessnavIcon3 className={classes.icon9} />
              </motion.div>

              <motion.div
              initial={{marginTop: "-20px" , opacity: 0}}
              animate={{marginTop: "0px" , opacity: 1}}
              transition={{delay: 0.8}}
              className={classes.bussinessNav4}>
                <BussinessnavIcon4 className={classes.icon10} />
              </motion.div>

            </div>
            <motion.div
            initial={{marginTop: "-20px" , opacity: 0}}
            whileInView={{marginTop: "0px" , opacity: 1}}
            transition={{delay: 1}}
             className={classes.bCABachelorInComputerApplicati}>
              BCA (Bachelor in Computer Application)
            </motion.div>
          </div>
          <motion.div
          initial={{marginTop: "-20px" , opacity: 0}}
          whileInView={{marginTop: "0px" , opacity: 1}}
          transition={{duration: 0.3}}
          className={classes.education}>Education</motion.div>
        </div>
        <div className={classes.icons}>
          <motion.div 
           whileHover={{scale: 1.2 }}
          className={classes.frame11}>
            <motion.div className={classes.skillIconsTypescript}>
              <SkillIconsTypescriptIcon className={classes.icon11} />
            </motion.div>
            <motion.div className={classes.htmlSkill}>
              <motion.div className={classes.ellipse6}>
                <Ellipse6Icon className={classes.icon12} />
              </motion.div>
              <motion.div className={classes.ellipse7}>
                <Ellipse7Icon className={classes.icon13} />
              </motion.div>
              <motion.div className={classes._30}>10%</motion.div>
            </motion.div>
            <motion.div className={classes.typescript}>Typescript</motion.div>
          </motion.div>

          {/* html section */}
          <motion.div
           whileHover={{scale: 1.2}}
          className={classes.frame16}>
            <motion.div className={classes.htmlSkill2}>
              <motion.div className={classes.ellipse62}>
                <Ellipse6Icon2 className={classes.icon14} />
              </motion.div>
              <motion.div className={classes.ellipse72}>
                <Ellipse7Icon2 className={classes.icon15} />
              </motion.div>
              <motion.div className={classes._100}>100%</motion.div>
            </motion.div>
            <motion.div className={classes.frame4}>
              <motion.div className={classes.hTML}>HTML</motion.div>
              <motion.div className={classes.logosHtml5}>
                <LogosHtml5Icon className={classes.icon16} />
              </motion.div>
            </motion.div>
          </motion.div>

{/* CSS */}
          <motion.div 
          whileHover={{scale: 1.2 }}
          className={classes.frame3}>
            <motion.div className={classes.htmlSkill3}>
              <motion.div className={classes.ellipse63}>
                <Ellipse6Icon3 className={classes.icon17} />
              </motion.div>
              <motion.div className={classes.ellipse73}>
                <Ellipse7Icon3 className={classes.icon18} />
              </motion.div>
              <motion.div className={classes._1002}>100%</motion.div>
            </motion.div>
            <motion.div className={classes.cSS}>CSS</motion.div>
            <motion.div className={classes.logosCss3}>
              <LogosCss3Icon className={classes.icon19} />
            </motion.div>
          </motion.div>


{/* javascript */}
          <motion.div 
          whileHover={{scale: 1.2 }}
          className={classes.frame2}>
            <motion.div className={classes.htmlSkill4}>
              <motion.div className={classes.ellipse64}>
                <Ellipse6Icon4 className={classes.icon20} />
              </motion.div>
              <motion.div className={classes.ellipse74}>
                <Ellipse7Icon4 className={classes.icon21} />
              </motion.div>
              <motion.div className={classes._80}>80%</motion.div>
            </motion.div>
            <motion.div className={classes.jAVASCRIPT}>JAVASCRIPT</motion.div>
            <motion.div className={classes.logosJavascript}>
              <LogosJavascriptIcon className={classes.icon22} />
            </motion.div>
          </motion.div>

{/* always uodated */}
          <motion.div
           whileHover={{scale: 1.2 , }}
           className={classes.frame15}>
            <motion.div className={classes.maskGroup}>
              <MaskGroupIcon className={classes.icon23} />
            </motion.div>
            <motion.div className={classes.alwaysUpdate}>Always update</motion.div>
            <motion.div className={classes.htmlSkill5}>
              <motion.div className={classes.ellipse65}>
                <Ellipse6Icon5 className={classes.icon24} />
              </motion.div>
              <motion.div className={classes.ellipse75}>
                <Ellipse7Icon5 className={classes.icon25} />
              </motion.div>
              <motion.div className={classes._1003}>100%</motion.div>
            </motion.div>
          </motion.div>
          <motion.div className={classes.frame18}>

{/* figma */}
            <motion.div
             whileHover={{scale: 1.2 }}
            className={classes.frame10}>
               <motion.div 
             whileHover={{scale: 1.2 }}
            className={classes.deviconFigma}>
              <DeviconFigmaIcon className={classes.icon26} />
            </motion.div>
              <motion.div className={classes.htmlSkill6}>
                <motion.div className={classes.ellipse66}>
                  <Ellipse6Icon6 className={classes.icon27} />
                </motion.div>
                <motion.div className={classes.ellipse76}>
                  <Ellipse7Icon6 className={classes.icon28} />
                </motion.div>
                <motion.div className={classes._1004}>100%</motion.div>
              </motion.div>
              <motion.div className={classes.figma}>Figma</motion.div>
            </motion.div>
          </motion.div>

{/* react logo */}
          <motion.div
           whileHover={{scale: 1.2 }}
          className={classes.frame14}>
            <motion.div className={classes.logosReact}>
              <LogosReactIcon className={classes.icon29} />
            </motion.div>
            <motion.div className={classes.htmlSkill7}>
              <motion.div className={classes.ellipse67}>
                <Ellipse6Icon7 className={classes.icon30} />
              </motion.div>
              <motion.div className={classes.ellipse77}>
                <Ellipse7Icon7 className={classes.icon31} />
              </motion.div>
              <motion.div className={classes._90}>90%</motion.div>
            </motion.div>
            <motion.div className={classes.rEACT}>REACT</motion.div>
          </motion.div>

          {/* boostrap */}
          <motion.div
           whileHover={{scale: 1.2 }}
          className={classes.frame13}>
            <motion.div className={classes.vector}>
              <VectorIcon className={classes.icon32} />
            </motion.div>
            <motion.div className={classes.htmlSkill8}>
              <motion.div className={classes.ellipse68}>
                <Ellipse6Icon8 className={classes.icon33} />
              </motion.div>
              <motion.div className={classes.ellipse78}>
                <Ellipse7Icon8 className={classes.icon34} />
              </motion.div>
              <motion.div className={classes._1005}>100%</motion.div>
            </motion.div>
            <motion.div className={classes.bootstrap}>Bootstrap</motion.div>
          </motion.div>

          {/* redux */}
          <motion.div 
           whileHover={{scale: 1.2 }}
           className={classes.frame12}>
            <motion.div className={classes.skillIconsRedux}>
              <SkillIconsReduxIcon className={classes.icon35} />
            </motion.div>
            <motion.div className={classes.redux}>Redux</motion.div>
            <motion.div className={classes.frame17}>
              <motion.div className={classes.ellipse69}>
                <Ellipse6Icon9 className={classes.icon36} />
              </motion.div>
              <motion.div className={classes.ellipse8}>
                <Ellipse8Icon className={classes.icon37} />
              </motion.div>
              <motion.div className={classes._50}>50%</motion.div>
            </motion.div>
          </motion.div>

{/* Nav2 */}
        </div>
        <div className={classes.navbar2}>
      <a href="#frame8">
      <div className={classes.chattingNav2}>
            <ChattingnavIcon2 className={classes.icon38} />
          </div>
      </a>
        
<a href="#frame9">
<div className={classes.bussinessNav5}>
            <BussinessnavIcon5 className={classes.icon39} />
          </div>
</a>


      <a href="#profile">
      <div className={classes.homenav2}>
            <HomenavIcon2 className={classes.icon40} />
          </div>
      </a>
      <div className={classes.profileNav2}>
            <ProfilenavIcon2 className={classes.icon41} />
          </div>

      
        </div>
      </div>
      <div className={classes.frame8} id="frame8" >
        <div className={classes.contact}>
          <div className={classes.rectangle5}></div>
          <div className={classes.contact2}>Contact </div>
          <div className={classes.rEACTFRONTENDDEVELOPERFIGMADESs}>
            REACT FRONTEND DEVELOPER | FIGMA DESIGNER
          </div>
          <div className={classes.line4}></div>
          <div className={classes.phone}>
            <div className={classes._9808005497}>9808005497</div>
            <div className={classes.biPhone}>
              <BiPhoneIcon className={classes.icon42} />
            </div>
          </div>
          <div className={classes.mail}>
            <MailIcon className={classes.icon43} />
          </div>
          <div className={classes.bk10sandeshGmailCom}>
            bk10sandesh@gmail.com
          </div>
          <div className={classes.instagram}>
            <div className={classes.sandeshstbk}>sandeshstbk</div>
            <div className={classes.teenyiconsInstagramSolid}>
              <TeenyiconsInstagramSolidIcon className={classes.icon44} />
            </div>
          </div>
          <div className={classes.sANDESHBK}>
            <div className={classes.textBlock}>SANDESH BK</div>
            <div className={classes.textBlock2}>
              <p></p>
            </div>
          </div>
          <div className={classes.navbar3}>
            <div className={classes.chattingNav3}>
              <ChattingnavIcon3 className={classes.icon45} />
            </div>
          <a href="#frame9">
          <div className={classes.bussinessNav6}>
              <BussinessnavIcon6 className={classes.icon46} />
            </div>
          </a>
           
<a href="#profile">
<div className={classes.homenav3}>
              <HomenavIcon3 className={classes.icon47} />
            </div>
</a>

          <a href="#sectionB">
          <div className={classes.profileNav3}>
              <ProfilenavIcon3 className={classes.icon48} />
            </div>
          </a>

          </div>
        </div>
      </div>
      <div className={classes.frame9} id="frame9">

        <div className={classes.starshipIllustration1}></div>
      <div className={classes.navbar}>
<a href="#frame8">
<div className={classes.chattingNav4}>
            <ChattingnavIcon4 className={classes.icon49} />
          </div>
</a>
<div className={classes.bussinessNav7}>
            <BussinessnavIcon7 className={classes.icon50} />
          </div>

<a href="#profile">
<div className={classes.homenav4}>
            <HomenavIcon4 className={classes.icon51} />
          </div>
</a>


      <a href="#sectionB">
      <div className={classes.profileNav4}>
            <ProfilenavIcon4 className={classes.icon52} />
          </div></a>   
      </div>
      <motion.div 
      initial={{marginLeft: "-50PX"}}
      whileInView={{marginLeft: "25px"}}
      transition={{
        duration: 0.9
      }}
      className={classes.rEACTFROTNENDDEVELOPER}>
        <motion.div className={classes.textBlocker}>REACT </motion.div>
        <motion.div className={classes.textBlock2}>FRONTEND</motion.div>
        <motion.div className={classes.textBlock3}>DEVELOPER</motion.div>
      </motion.div>
      <motion.div
      initial={{marginLeft: "-50PX"}}
      whileInView={{marginLeft: "25px"}}
      transition={{
        duration: 0.9
      }}
      className={classes.andUIUXDESIGNER}>
        <motion.div className={classes.textBlock4}>and </motion.div>
        <motion.div className={classes.textBlock5}>UI / UX DESIGNER </motion.div>
      </motion.div>




       
      </div>

      







    </div>
  );
});
