import Image from "next/image";
const Home: React.FC = () => {
  return (
    <>
      <div
        data-testid="home"
        className=" mt-12 mb-12 justify-around space-x-4 p-2"
      >
        <p className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-green-500 font-extrabold">
          Intro
        </p>
      </div>
      <div
        className="flex flex-wrap justify-center  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row gap-4 p-2"
        id="intro"
      >
        <div className=" hover:shadow-lg  hover:shadow-zinc-500 flex flex-col items-center bg-zinc-900 p-8 rounded-3xl h-auto w-96  sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 mb-4 gap-4">
          <Image
            src="/assets/faaiz.jpeg"
            loading="lazy"
            className="h-auto w-auto border-2 border-green-500 rounded-full"
            alt="picture of faaiz"
            width={0}
            height={0}
          />

          <p className=" text-justify font-normal break-normal text-zinc-400">
            Hello, Welcome to my portfolio, here&apos;s my brief introduction{" "}
            <br></br>
            I&apos;m a 8th semester student @ COMSATS A self-motivated
            programmer with a passion to learn new things by experimenting. I
            look forward to get hands-on experience with test driven (TDD) as
            well as behaviour driven development (BDD) to build solutions that
            are robust and scalable. The portfolio starts off with my
            introduction, followed by my future plans and what I&apos;ve done
            including my education and technical skills. After that I&apos;ve
            used GitHub API to present a statistical and tabular view of my
            repositories. At the end there&apos;s a form that you can fill to
            have detailed converstion with me. Thank you!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
