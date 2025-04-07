import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"
import { default as defaultCardImage, default as ShieldIconImage } from "images/shield-icon.svg";

export default () => {

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description: "We strictly only deal with vendors that provide top notch security infrastructure."
    },
  ]

  return (
    <AnimationRevealPage>
      <Hero 
        heading="Promotoras Legais Populares de Guaíba"
        description="Lorem Ipsum"
        primaryButtonText="Saiba mais"
        primaryButtonUrl=""
        imageSrc=""
        name="PLP"
      />
      <MainFeature 
        subheading="Reliable"
        heading="Highly Redundant Servers With Backup"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
      />
      <Features
        cards={cards}
        heading="Valores"
        subheading="Lorem ipsum"
        description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <MainFeature 
        subheading="Secure"
        heading="State of the Art Computer Security"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      />
      <Testimonial />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
}
