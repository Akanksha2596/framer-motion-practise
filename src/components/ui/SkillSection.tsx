import { motion } from "framer-motion";
import React from "react";

const SkillSection = () => {
  // staggerred animation with delay on each list
  const skills = [
    {
      name: "CSS",
    },
    {
      name: "HTML5",
    },
    {
      name: "Javascript",
    },
    {
      name: "ReactJS",
    },
    {
      name: "NextJS",
    },
    {
      name: "Tailwind",
    },
    {
      name: "CSS",
    },
    {
      name: "HTML5",
    },
    {
      name: "CSS",
    },
    {
      name: "HTML5",
    },
    {
      name: "CSS",
    },
    {
      name: "HTML5",
    },
    {
      name: "CSS",
    },
    {
      name: "HTML5",
    },
    {
      name: "CSS",
    },
  ];

  const fadeINAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05 * index,
        },
      };
    },
  };
  return (
    <>
      <h1 className="flex justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-500 md:text-2xl lg:text-4xl dark:text-white">
        My Skills
      </h1>
      <motion.div className="bg-blue-200 px-5 py-5 ml-20 mr-20 rounded border-left border-blue-800">
        <motion.ul className="flex flex-wrap justify-center gap-2 teaxt-lg text-gray-800">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-white border border-grey rounded-lg px-2 py-2"
              variants={fadeINAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill.name}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
};

export default SkillSection;
