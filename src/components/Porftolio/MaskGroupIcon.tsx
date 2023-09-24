import { memo, SVGProps } from 'react';

const MaskGroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 76 66' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_23_125'
      style={{
        maskType: 'luminance',
      }}
      maskUnits='userSpaceOnUse'
      x={-2}
      y={-2}
      width={80}
      height={70}
    >
      <path
        d='M38 66C58.9874 66 76 51.2259 76 33C76 14.7741 58.9874 0 38 0C17.0126 0 0 14.7741 0 33C0 51.2259 17.0126 66 38 66Z'
        fill='white'
        stroke='white'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M56.1298 37.95C53.7092 44.644 46.5082 49.5 38 49.5C29.4937 49.5 22.2908 44.644 19.8702 37.95V47.85M56.1298 18.15V28.05C53.7092 21.3559 46.5082 16.5 38 16.5C29.4937 16.5 22.2908 21.3559 19.8702 28.05'
        stroke='black'
        strokeWidth={4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </mask>
    <g mask='url(#mask0_23_125)'>
      <path d='M-7.60001 -6.60001H83.6V72.6H-7.60001V-6.60001Z' fill='#F48609' />
    </g>
  </svg>
);
const Memo = memo(MaskGroupIcon);
export { Memo as MaskGroupIcon };
