import type { MetaFunction } from "@remix-run/node";
import ContainerComponent from "~/components/layout/ContainerComponent";
import LayoutComponent from "~/components/layout/LayoutComponent";
import HeroSection from "~/components/hero-section/HeroSection";
import SectionComponent from "~/components/layout/SectionComponent";
import xImg from './../assets/x.png'
import plusImg from './../assets/plusicon.png'
import ListItem from "~/components/shared/ListItemComponent";
import IconContainer from "~/components/shared/IconContainerComponent";
import IconContainerComponent from "~/components/shared/IconContainerComponent";
import EmailComponent from "~/components/shared/EmailComponent";

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
  ]

  const FaqSectionList = [
    { text: 'We create realistic timelines, set clear milestones', imgSrc: plusImg, extraText: "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise."},
    { text: 'We create realistic timelines, set clear milestones', imgSrc: plusImg, extraText:  "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise."},
  ]

  const MainHeading = '1 in 2 Project Fails, 80% Blow the Budget.'
  const MainParagraph = 'Nearly 1 in 2 IT projects fails due to poor planning, shifting requirements, lack of user involvement, unrealistic timelines, and resource constraints. Shockingly, only 30% meet deadlines, budgets, and goals, while 70% suffer scope creep, draining billions annually.'

  const SecondHeading = 'Independent Tech Experts, Committed to Helping Founders Thrive'
  const SecondParagraph = "As tech experts, we bring hands-on experience in solving real-world challenges, ensuring your project's success. We understand complex technical hurdles, optimize costs, and streamline business operations, minimizing risks. Our support empowers your vision, driving efficiency and growth. Choose us for unmatched expertise."

  return (
    <LayoutComponent>
      <ContainerComponent styles="flex-60 p-3">
        <div className="gradient-primary rounded-4xl">
        <HeroSection/>
        <SectionComponent heading={MainHeading}
          paragraph={MainParagraph}
          textColorClass="gradient-secondary-text"
          containerClassName="additional-container-styles">
            {MainSectionList.map((item:any, index:any) => (
          <ListItem key={index} text={item.text} imgSrc={item.imgSrc} />
        ))}
          </SectionComponent>
        </div>
        <SectionComponent 
          heading={SecondHeading}
          paragraph={SecondParagraph}
          textColorClass="gradient-primary-text"
          containerClassName="additional-container-styles">
              {TechStackSectionList.map((item:any, index:any) => (
          <ListItem key={index} text={item.text} imgSrc={item.imgSrc} />
        ))}
          </SectionComponent>
          <SectionComponent heading={SecondHeading}
          paragraph={SecondParagraph}
           textColorClass="gradient-primary-text"
          containerClassName="additional-container-styles">
             <IconContainer />
             <IconContainer />
             <IconContainer />
          </SectionComponent>
          <SectionComponent heading={SecondHeading}
          paragraph={SecondParagraph}
           textColorClass="gradient-primary-text"
          containerClassName="additional-container-styles">
              <IconContainer big={true}/>
          </SectionComponent>
          <SectionComponent 
            heading={SecondHeading}
            paragraph={SecondParagraph}
            textColorClass="gradient-primary-text"
            containerClassName="additional-container-styles">
                  {FaqSectionList.map((item:any, index:any) => (
          <ListItem key={index} text={item.text} extraText={item.extraText} imgSrc={item.imgSrc} />
        ))}
          </SectionComponent>
          <SectionComponent 
            heading={SecondHeading}
            paragraph={SecondParagraph}
            textColorClass="gradient-primary-text"
            containerClassName="additional-container-styles">
              <div className="flex">
                 <IconContainerComponent layout="single" big={true} />
                 <EmailComponent/>
              </div>
          </SectionComponent>
          <SectionComponent 
            paragraph={SecondParagraph}
            textColorClass="gradient-primary-text"
            containerClassName="additional-container-styles">
             <h1 className="text-3xl mb-6 gradient-primary-text">support@company.com</h1>
          </SectionComponent>
      </ContainerComponent>
      
      <ContainerComponent styles="flex-40 dotted-background">
        <></>
      </ContainerComponent>
    </LayoutComponent>
  );
}

