import { memo, SVGProps } from 'react';

const Rectangle1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 201 342' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H88.0571L201 342H0V0Z' fill='#FCB500' />
  </svg>
);
const Memo = memo(Rectangle1Icon);
export { Memo as Rectangle1Icon };
