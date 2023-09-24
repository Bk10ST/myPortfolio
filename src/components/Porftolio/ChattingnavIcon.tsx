import { memo, SVGProps } from 'react';

const ChattingnavIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 47 47' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={23.5} cy={23.5} r={23.5} fill='#1E1E1E' />
    <path
      d='M24 10.375C30.875 10.375 36.5 15.5958 36.5 22.0417C36.5 28.4875 30.875 33.7083 24 33.7083C22.45 33.7083 20.9625 33.4458 19.5875 32.9792C15.9375 36.625 11.5 36.625 11.5 36.625C14.4125 33.2271 14.875 30.9375 14.9375 30.0625C12.8125 27.9771 11.5 25.1479 11.5 22.0417C11.5 15.5958 17.125 10.375 24 10.375Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(ChattingnavIcon);
export { Memo as ChattingnavIcon };
