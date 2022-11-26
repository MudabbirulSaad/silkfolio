import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import { GetStaticProps } from 'next';
import { PageInfo, Experiences, Skill, Project, Socials } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchExperiences } from '../utils/fetchExperiences';

type Props = {
  pageInfo: PageInfo;
  experiences: Experiences[];
  skills: Skill[];
  projects: Project[];
  socials: Socials[];
};

export default function index({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Saad's Home</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-center">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer text-[#F7AB0A] hover:animate-pulse" />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experiences = await fetchExperiences();
  const skills: Skill = await fetchSkills();
  const projects: Project = await fetchProjects();
  const socials: Socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
