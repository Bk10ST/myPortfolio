import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.51162e-09 5.69333L14.5282 11.85C14.6739 11.9117 14.8357 11.944 15 11.944C15.1643 11.944 15.3261 11.9117 15.4718 11.85L30 5.69444V16.3889C30.0001 17.3113 29.567 18.1987 28.7895 18.8691C28.0121 19.5396 26.9493 19.9422 25.8191 19.9944L25.5682 20H4.43182C3.29981 20.0001 2.21069 19.6472 1.38787 19.0137C0.565046 18.3802 0.0709073 17.5142 0.00681835 16.5933L9.51162e-09 16.3889V5.69333ZM4.43182 7.75021e-09H25.5682C26.7002 -6.03853e-05 27.7893 0.352838 28.6121 0.986302C29.435 1.61977 29.9291 2.48577 29.9932 3.40667L30 3.61111V3.81556L15 10.1711L9.51162e-09 3.81556V3.61111C-7.41092e-05 2.68874 0.433028 1.8013 1.21046 1.13085C1.98789 0.460408 3.05072 0.0577763 4.18091 0.00555569L4.43182 7.75021e-09Z'
      fill='#FFC700'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };