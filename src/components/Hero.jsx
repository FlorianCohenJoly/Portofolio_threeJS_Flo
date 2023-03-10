import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Florian</span> 👨🏻‍💻
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a student developer Web and Mobil on 2nd year of my studies. I
            love programming and especially mobile development.
            <br />
            <br />
            The <span className="text-[#915eff]">Flutter</span> language is my
            favorite language and it is the one I master the best for the
            moment.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
