import { memo, SVGProps } from 'react';

const Ellipse6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 91 87' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M91 43.5C91 67.5244 70.629 87 45.5 87C20.371 87 0 67.5244 0 43.5C0 19.4756 20.371 -7.09295e-06 45.5 -7.09295e-06C70.629 -7.09295e-06 91 19.4756 91 43.5Z'
      fill='url(#paint0_linear_23_104)'
    />
    <defs>
      <linearGradient id='paint0_linear_23_104' x1={83} y1={49} x2={15} y2={44} gradientUnits='userSpaceOnUse'>
        <stop offset={0.439902} stopColor='#FCB500' />
        <stop offset={0.440002} stopColor='#7C5E11' stopOpacity={0.425862} />
        <stop offset={0.440102} stopColor='#1E1E1E' stopOpacity={0.68} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Ellipse6Icon);
export { Memo as Ellipse6Icon };
