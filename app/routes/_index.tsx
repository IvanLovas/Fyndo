import { useEffect, useState } from "react";
import ContainerComponent from "~/components/layout/ContainerComponent";
import LayoutComponent from "~/components/layout/LayoutComponent";
import HeroSection from "~/components/hero-section/HeroSection";
import SectionComponent from "~/components/layout/SectionComponent";
import xImg from './../assets/x.png';
import arrowRightImg from "./../assets/arrow-right.png";
import fyndoLogo from './../assets/fyndo-logo-gray.png';
import plusImg from './../assets/plusicon.png';
import ListItem from "~/components/shared/ListItemComponent";
import IconContainer from "~/components/shared/IconContainerComponent";
import IconContainerComponent from "~/components/shared/IconContainerComponent";
import EmailComponent from "~/components/shared/EmailComponent";
import StepsComponent from "~/components/steps/StepsComponent";
import DotsComponent from "~/components/shared/DotsComponents";
import ModalComponent from "~/components/modal/ModalComponent";


export default function Index() {

  const MainSectionList = [
    { text: 'Poorly defined scope lead to misalignment and failure', imgSrc: xImg },
    { text: 'Delays impact business operations and trust', imgSrc: xImg },
    { text: 'Using outdated tools can limit project success', imgSrc: xImg },
    { text: 'Unplanned expenses can exhaust funding', imgSrc: xImg },
    { text: 'Lack of skilled personnel, and poor collaboration disrupt workflow and quality', imgSrc: xImg },
  ];

  const TechStackSectionList = [
    { text: 'We create realistic timelines, set clear milestones', imgSrc: plusImg },
    { text: 'Bridge the gap between business goals and technology', imgSrc: plusImg },
    { text: 'By identifying potential risks early', imgSrc: plusImg },
    { text: 'We optimize resources, preventing costly mistakes and ensuring the project stays within budget', imgSrc: plusImg },
    { text: 'Founders can maintain control over technology', imgSrc: plusImg },
  ];

  const FaqSectionList = [
    { text: 'We create realistic timelines, set clear milestones', imgSrc: plusImg, extraText: "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise." },
    { text: 'We create realistic timelines, set clear milestones', imgSrc: plusImg, extraText: "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise." },
  ];

  const MainSupHeading = 'THE COSTLY TRUTH';
  const MainHeading = '1 in 2 Project Fails, 80% Blow the Budget.';
  const MainParagraph = 'Nearly 1 in 2 IT projects fails due to poor planning, shifting requirements, lack of user involvement, unrealistic timelines, and resource constraints. Shockingly, only 30% meet deadlines, budgets, and goals, while 70% suffer scope creep, draining billions annually.';

  const SecondSupHeading = 'OUR ADVANTAGE';
  const SecondHeading = 'Independent Tech Experts, Committed to Helping Founders Thrive';
  const SecondParagraph = "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise.";

  const ThirdSupHeading = 'TECH STACK'

  const FourthSupHeading = 'STEPS SIMPLE'

  const FifthSupHeading = 'TEAM'

  const SixthSupHeading = 'FAQ'

  const SeventhSupHeading = 'SUPPORT'

  const EightSupHeading = 'CONTACT'

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollingDown(currentScrollY > lastScrollY); // Determine scroll direction

      handleScroll(); // Call the scroll handler to highlight the appropriate div

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll);
    handleScroll(); // Call initially to handle the first highlight when the page loads

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);


  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [scrollingDown, setScrollingDown] = useState<boolean>(true);

  // Example mock data for sections (will be fetched from Sanity)
  const sectionData = [
    {
      _id: '1',
      slug: 'truth',
      supHeading: 'THE COSTLY TRUTH',
      heading: '1 in 2 Project Fails, 80% Blow the Budget.',
      paragraph: 'Nearly 1 in 2 IT projects fails due to poor planning, shifting requirements, lack of user involvement, unrealistic timelines, and resource constraints.',
    },
    {
      _id: '2',
      slug: 'undefined',
      supHeading: 'OUR ADVANTAGE',
      heading: 'Independent Tech Experts, Committed to Helping Founders Thrive',
      paragraph: "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise."
    },
    {
      _id: '3',
      slug: 'features',
      supHeading: 'TECH STACK',
      heading: 'Independent Tech Experts, Committed to Helping Founders Thrive',
      paragraph: "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise."
    },
    {
      _id: '4',
      slug: 'undefined',
      supHeading: 'STEPS SIMPLE',
      heading: 'Independent Tech Experts, Committed to Helping Founders Thrive',
      paragraph: "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise."
    },
    {
      _id: '5',
      slug: 'team',
      supHeading: 'TEAM',
      heading: 'Independent Tech Experts, Committed to Helping Founders Thrive',
      paragraph: "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise."
    },
    {
      _id: '6',
      slug: 'faq',
      supHeading: 'FAQ',
      heading: 'Independent Tech Experts, Committed to Helping Founders Thrive',
      paragraph: "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise."
    },
    {
      _id: '7',
      slug: 'support',
      supHeading: 'SUPPORT',
      heading: 'Independent Tech Experts, Committed to Helping Founders Thrive',
      paragraph: "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise."
    },
    {
      _id: '8',
      slug: 'undefined',
      supHeading: 'CONTACT',
      heading: 'Independent Tech Experts, Committed to Helping Founders Thrive',
      paragraph: "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise."
    },
  ];

  // Handle scroll highlighting and smooth scroll to section
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const screenHeight = window.innerHeight;
    const middleOfScreen = scrollPosition + screenHeight / 1.7;

    const divs = Array.from(document.querySelectorAll('.highlight-div'));
    const divOffsets = divs.map((div) => (div as HTMLElement).offsetTop);
    const divHeights = divs.map(div => div.clientHeight);

    let currentHighlightedIndex = -1;

    if (scrollingDown) {
      for (let i = 0; i < divOffsets.length; i++) {
        if (middleOfScreen >= divOffsets[i] && middleOfScreen < (divOffsets[i] + divHeights[i])) {
          currentHighlightedIndex = i;
          break;
        }
      }
    } else {
      for (let i = divOffsets.length - 1; i >= 0; i--) {
        if (middleOfScreen >= divOffsets[i] && middleOfScreen < (divOffsets[i] + divHeights[i])) {
          currentHighlightedIndex = i;
          break;
        }
      }
    }

    setHighlightedIndex(currentHighlightedIndex);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      handleScroll();
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Scroll to a specific section based on its slug
  const handleScrollToSection = (slug: string) => {
    const section = document.getElementById(slug);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LayoutComponent>
      <ContainerComponent styles="flex-60 p-3">
        <div className="gradient-primary rounded-4xl">

          <HeroSection />

          <SectionComponent 
            key={sectionData[0]._id}
            supHeading={sectionData[0].supHeading}
            heading={sectionData[0].heading}
            paragraph={sectionData[0].paragraph}
            slug={sectionData[0].slug}
            onClick={() => handleScrollToSection(sectionData[0].slug)} 
                textColorClass="gradient-secondary-text"
                containerClassName="additional-container-styles">
                {MainSectionList.map((item: any, index: any) => (
                  <ListItem key={index} text={item.text} imgSrc={item.imgSrc} />
                ))}
          </SectionComponent>
        </div>

        <SectionComponent
          key={sectionData[1]._id}
          supHeading={sectionData[1].supHeading}
          heading={sectionData[1].heading}
          paragraph={sectionData[1].paragraph}
          slug={sectionData[1].slug}
          onClick={() => handleScrollToSection(sectionData[1].slug)} 
          textColorClass="gradient-primary-text"
          containerClassName="additional-container-styles">
          {TechStackSectionList.map((item: any, index: any) => (
            <ListItem key={index} text={item.text} imgSrc={item.imgSrc} />
          ))}
        </SectionComponent>

        <SectionComponent
        key={sectionData[2]._id}
        supHeading={sectionData[2].supHeading}
        heading={sectionData[2].heading}
        paragraph={sectionData[2].paragraph}
        slug={sectionData[2].slug}
        onClick={() => handleScrollToSection(sectionData[2].slug)} 
          textColorClass="gradient-primary-text"
          containerClassName="additional-container-styles">
          <IconContainer />
          <IconContainer />
          <IconContainer />
        </SectionComponent>

        <SectionComponent
         key={sectionData[3]._id}
         supHeading={sectionData[3].supHeading}
         heading={sectionData[3].heading}
         paragraph={sectionData[3].paragraph}
         slug={sectionData[3].slug}
         onClick={() => handleScrollToSection(sectionData[3].slug)} 
          textColorClass="gradient-primary-text"
          containerClassName="additional-container-styles">
          <StepsComponent highlightedIndex={highlightedIndex} />
        </SectionComponent>

        <SectionComponent 
        key={sectionData[4]._id}
        supHeading={sectionData[4].supHeading}
        heading={sectionData[4].heading}
        paragraph={sectionData[4].paragraph}
        slug={sectionData[4].slug}
        onClick={() => handleScrollToSection(sectionData[4].slug)} 
          textColorClass="gradient-primary-text"
          containerClassName="additional-container-styles">
          <IconContainer big={true} />
        </SectionComponent>

        <SectionComponent
          key={sectionData[5]._id}
          supHeading={sectionData[5].supHeading}
          heading={sectionData[5].heading}
          paragraph={sectionData[5].paragraph}
          slug={sectionData[5].slug}
          onClick={() => handleScrollToSection(sectionData[5].slug)} 
        
          textColorClass="gradient-primary-text"
          containerClassName="additional-container-styles">
          {FaqSectionList.map((item: any, index: any) => (
            <ListItem key={index} text={item.text} extraText={item.extraText} imgSrc={item.imgSrc} />
          ))}
        </SectionComponent>

        <SectionComponent
          key={sectionData[6]._id}
          supHeading={sectionData[6].supHeading}
          heading={sectionData[6].heading}
          paragraph={sectionData[6].paragraph}
          slug={sectionData[6].slug}
          onClick={() => handleScrollToSection(sectionData[6].slug)} 
              textColorClass="gradient-primary-text"
              containerClassName="additional-container-styles">
          <EmailComponent />
        </SectionComponent>

        <SectionComponent
          key={sectionData[7]._id}
          supHeading={sectionData[7].supHeading}
          // heading={sectionData[7].heading}
          paragraph={sectionData[7].paragraph}
          slug={sectionData[7].slug}
          onClick={() => handleScrollToSection(sectionData[6].slug)} 
              textColorClass="gradient-primary-text"
              containerClassName="additional-container-styles">
          <h1 className="gradient-primary-text text-4xl">support@company.com</h1>
        </SectionComponent>

          <div className="footer-container flex flex-col items-start px-6 mb-10 container-style">
            <div>
              <span className="text-xs">Legal</span>
            </div>
            <div className="flex items-center">
              <img className="fyndo-logo mr-3" src={fyndoLogo}/>
              <div className="footer-text">
                <span className="text-xs mr-3">2025 Copyright company name</span>
                <a className="text-xs mr-3" href='#'>Legal terms</a>
                <a className="text-xs" href='#'>Privacy policy</a>
              </div>
            </div>
          </div>

      </ContainerComponent>
      <DotsComponent>
        <ModalComponent/>
      </DotsComponent>
    </LayoutComponent>
  );
}
