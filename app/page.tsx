import Nav from '@/components/Nav';
import Terminal from '@/components/Terminal';
import SectionGroup from '@/components/SectionGroup';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
        <Terminal />

        <div
          id="content"
          className="mt-20 flex flex-col gap-16 sm:mt-28 sm:gap-20"
        >
          <SectionGroup category="fullstack" />
          <SectionGroup category="security" />
          <SectionGroup category="gamedev" />
          <SectionGroup category="research" />
          <About />
          <Contact />
        </div>
      </main>
    </>
  );
}
