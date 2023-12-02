import Counter from '@/components/Counter';
import Link from 'next/link';
import React from 'react';

const HomeComponent = () => {
  return (
    <div>
      <p className='text-red-600'>hello world</p>
      <Counter />
     <Link href={'/nazmul'}> <p>Nazmul route</p></Link>
     <Link href={'/nafisa'}><p>Nafisa route</p></Link>
    </div>
  );
};

export default HomeComponent;