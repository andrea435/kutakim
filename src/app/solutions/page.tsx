import React from 'react';


import FooterSection from '../components/footer';
import HeroSection from '../components/about';
import FeaturesSection from '../components/featuresection';
import ShuffleHero from '../components/shufflehero';
import BannerLeft from '../components/bannerleft';
import BannerRight from '../components/bannerright';
import MissionVision from '../components/missionvision';
import TrustedSection from '../components/trustedsection';
import WelcomeSection from '../components/welcomesection';
import Header from '../components/header2';

const SolutionsPage = () => {
  return (
    <><Header/><WelcomeSection/><BannerRight /><BannerLeft/> <MissionVision/><TrustedSection/> <FooterSection/></>
);
};

export default SolutionsPage;
