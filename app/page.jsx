import Image from "next/image";
import heroSectionBackground from "/public/assets/images/HeroSection-2.jpg";

const Home = () => {
  return (
    <section className="flex-center flex-col ">
      <h1 className="header_text text-center">
        Capturing{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-stone-600 from-gray-800">
          {" "}
          Moments
        </span>
        <br /> Through the Lens of Life
      </h1>
      <p className="desc text-center">
        Welcome to my gallery, where I showcase the beauty of the world through
        my lens. Explore my work and get inspired.
      </p>
      <Image
        src={heroSectionBackground}
        alt="Hero Section Background"
        className="mt-10"
      />
    </section>
  );
};

export default Home;
