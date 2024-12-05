import React from 'react';


import FooterSection from '../components/footer';
import HeroSection from '../components/about';

import ShuffleHero from '../components/shufflehero';
import BannerLeft from '../components/bannerleft';
import BannerRight from '../components/bannerright';
import MissionVision from '../components/missionvision';
import FeaturesSection from '../components/feature';
import SupportSection from '../components/section2';
import WelcomeSection from '../components/welcomesection2';
import Header from '../components/header2';


const AboutPage = () => {
  return (
    <><Header/><WelcomeSection/> <BannerRight /><BannerLeft/> <MissionVision/><FooterSection/></>
);
};

export default AboutPage;
