import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.0969 1.27392C22.6673 0.673179 22.6427 -0.27625 22.042 -0.846691L12.2524 -10.1426C11.6516 -10.713 10.7022 -10.6884 10.1318 -10.0877C9.56132 -9.48696 9.58589 -8.53753 10.1866 -7.96708L18.8885 0.295908L10.6255 8.9978C10.0551 9.59854 10.0797 10.548 10.6804 11.1184C11.2811 11.6889 12.2306 11.6643 12.801 11.0636L22.0969 1.27392ZM1.02964 2.25844L21.0479 1.74054L20.9703 -1.25845L0.952051 -0.740557L1.02964 2.25844Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
