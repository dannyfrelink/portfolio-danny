import Header from "@/components/Header";
import BaseText from "@/components/typography/BaseText";
import H2 from "@/components/typography/H2";

export default function Home() {
  return (
    <>
      <Header />

      <main className="[&>*]:mt-11 max-w-[528px] mx-auto">
        <section id="about">
          <article className="w-full max-w-[400px] mx-auto bg-backgroundSec py-8 sm:max-w-none sm:py-9 sm:rounded">
            <div className="flex items-center justify-between w-[85%] mx-auto">
              <div className="h-[110px] w-[94px] bg-secondary rounded-[40px] sm:h-[172px] sm:w-[147px] sm:rounded-[50px]"></div>
              <div className="sm:text-lg">
                <h1 className="mb-0.5">
                  I'm{" "}
                  <span className="text-secondary text-xl sm:text-[28px]">
                    Danny Frelink
                  </span>
                  ,
                </h1>
                <p>Front-end Developer</p>
                <button className="border-2 border-secondary rounded text-secondary mt-3 py-1.5 px-3 sm:mt-5">
                  Portfolio
                </button>
              </div>
            </div>
          </article>
          <article className="w-[85%] mt-6 mx-auto [&>p]:mt-3 [&>p:first-of-type]:mt-4 sm:w-full sm:mt-8 sm:[&>p:first-of-type]:mt-5 sm:[&>p]:mt-3.5">
            <H2>About</H2>
            <BaseText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostru exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </BaseText>
            <BaseText>
              Duis aute irure dolor in reprehend in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </BaseText>
          </article>
        </section>

        <section id="portfolio"></section>
      </main>

      <footer id="contact"></footer>
    </>
  );
}
