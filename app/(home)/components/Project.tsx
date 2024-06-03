import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Title from './Title'; // Adjust the import based on your file structure
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

const Projects = () => {
  return (
    <div className='py-10 p-5 sm:p-0'>
      <Title 
        text="Project📋" 
        className="flex flex-col items-center justify-center transform -rotate-6"
      />
      
    </div>
  );
};

export default Projects;
