import { memo, SVGProps } from 'react';

const LogosCss3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 83 124' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M41.4494 123.687L7.67166 113.752L0.144278 24.3074H82.8557L75.3206 113.739L41.4494 123.687Z'
      fill='#264DE4'
    />
    <path d='M68.8696 108.044L75.3086 31.6207H41.5V116.083L68.8696 108.044Z' fill='#2965F1' />
    <path
      d='M17.4005 64.7946L18.3284 75.7647H41.5V64.7946H17.4005ZM15.5356 42.5911L16.4768 53.5611H41.5V42.5911H15.5356ZM41.5 93.2851L41.4546 93.2978L29.9228 89.9989L29.1855 81.2499H18.7911L20.2416 98.4746L41.4523 104.712L41.5 104.699V93.2851Z'
      fill='#EBEBEB'
    />
    <path
      d='M65.5334 64.7946L67.4025 42.5911H41.4643V53.5611H56.0548L55.1126 64.7946H41.4643V75.7647H54.2149L53.0127 89.9921L41.464 93.2944V104.707L62.6916 98.4745L62.8472 96.6211L65.2808 67.7404L65.5334 64.7946Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(LogosCss3Icon);
export { Memo as LogosCss3Icon };
