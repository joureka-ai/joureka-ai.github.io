import React, { useEffect } from "react";
import Head from 'next/head';
import Section from "../components/Section/Section";
import IntroductionSection from "../components/Section/IntroductionSection";
import ProjectSection from "../components/Section/ProjectSection";
import AboutSection from "../components/Section/AboutSection";
import InstallationSection from "../components/Section/InstallationSection";
import TeamSection from "../components/Section/TeamSection";
import { useRouter } from "next/router";
import ContactSection from "../components/Section/ContactSection";

export default function Home() {
  const router = useRouter();
  const refToIntorduction = React.useRef(null);
  const refToDescription = React.useRef(null);
  const refToInstallation = React.useRef(null);
  const refToAbout = React.useRef(null);
  const refToTeam = React.useRef(null);
  const refToContact = React.useRef(null);


  useEffect(() => {
    async function animate() {
      if (refToIntorduction.current) {
        const sr = (await import("scrollreveal")).default
        sr().reveal(refToIntorduction.current, { delay: 500 })
      }
      if (refToDescription.current) {
        const sr = (await import("scrollreveal")).default
        sr().reveal(refToDescription.current, { delay: 500 })
      }
      if (refToInstallation.current) {
        const sr = (await import("scrollreveal")).default
        sr().reveal(refToInstallation.current, { delay: 500 })
      }
      if (refToAbout.current) {
        const sr = (await import("scrollreveal")).default
        sr().reveal(refToAbout.current, { delay: 500 })
      }
      if (refToTeam.current) {
        const sr = (await import("scrollreveal")).default
        sr().reveal(refToTeam.current, { delay: 500 })
      }
      if (refToContact.current) {
        const sr = (await import("scrollreveal")).default
        sr().reveal(refToContact.current, { delay: 500 })
      }
    }
    animate()
  }, [])

  useEffect(() => {
    const path = router.asPath;
    if (path && path.includes('/#')) {
      const sectionName = path.replace('/#', '');
      switch (sectionName) {
        case 'About':
          refToAbout.current.scrollIntoView({block: 'center', behavior: 'smooth' });
          break;
        case 'Install':
          refToInstallation.current.scrollIntoView({block: 'center', behavior: 'smooth' });
          break;
        case 'Team':
          refToTeam.current.scrollIntoView({block: 'center', behavior: 'smooth' });
          break;
        case 'Contact':
          refToContact.current.scrollIntoView({block: 'center', behavior: 'smooth' });
        break;
        default:
          break;
      }
    }
  }, [router.asPath]);

  return (
    <div>
      <Head>
        <title>joureka Website</title>
        <meta name="description" content="This is where the marketing website of the joureka project lives." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={refToIntorduction}>
        <Section id="Introduction">
          <IntroductionSection></IntroductionSection>
        </Section>
      </div>
      <div ref={refToDescription}>
        <Section id="Description">
          <AboutSection></AboutSection>
        </Section>
      </div>
      <div ref={refToInstallation}>
        <Section id="Install">
          <InstallationSection></InstallationSection>
        </Section>
      </div>
      <div ref={refToAbout}>
        <Section id="About">
          <ProjectSection></ProjectSection>
        </Section>
      </div>
      <div ref={refToTeam}>
        <Section id="Team">
          <TeamSection></TeamSection>
        </Section>
      </div>
      <div ref={refToContact}>
        <Section id="Contact">
          <ContactSection></ContactSection>
        </Section>
      </div>
    </div>
  )
}
