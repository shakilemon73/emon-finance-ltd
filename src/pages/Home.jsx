import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Advertisers from './Advertisers';
import Publishers from './Publishers';
import Verticals from './Verticals';
import CaseStudy from './CaseStudy';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Advertisers />
      <Publishers />
      <Verticals />
      <CaseStudy />
    </>
  );
}