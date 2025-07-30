import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const FeedbackCard = ({
  index,
  certificate,
  date,
  expiry,
  link,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px] hover:text-blue-800 hover:underline cursor-pointer'  onClick={() => window.open(link, "_blank")}>{certificate}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='mt-1 text-secondary text-[12px]'>
            {date}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {expiry}
          </p>
        </div>

        <img
          src={image}
          alt={`Certificate: ${certificate}`}
          className='w-10 h-10 object-contain'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>Certificates</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((certificate, index) => (
          <FeedbackCard key={certificate.id} index={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "certificates");
