import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../HOC'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
            {live_link && (
              <div
                onClick={() => window.open(live_link, '_blank')}
                title='Live demo'
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <svg viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' className='w-1/2 h-1/2'>
                  <path d='M14 3h7v7M10 14 21 3M21 14v7H3V3h7' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </div>
            )}
            {source_code_link && (
              <div 
                onClick={() => window.open(source_code_link, '_blank')}
                title='Source code'
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img 
                  src={github}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          )) }
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills through real work across Web3, full-stack web, mobile and data analysis. Each project is briefly described with links to its code repository and live demo where available. Together they reflect my ability to solve complex problems, work with different technologies and ship projects end to end.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works')