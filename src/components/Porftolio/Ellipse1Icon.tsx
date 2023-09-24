import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={23} cy={21} rx={23} ry={21} fill='#FCB500' />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
