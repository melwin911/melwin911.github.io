import React from "react";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies/ Skills
      </h2>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-4'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
