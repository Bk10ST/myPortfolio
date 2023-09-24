import { memo, SVGProps } from 'react';

const ProfilenavIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 47 47' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={23.5} cy={23.5} r={23.5} fill='#FCB500' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19 19C19 17.9391 19.4214 16.9217 20.1716 16.1716C20.9217 15.4214 21.9391 15 23 15C24.0609 15 25.0783 15.4214 25.8284 16.1716C26.5786 16.9217 27 17.9391 27 19C27 20.0609 26.5786 21.0783 25.8284 21.8284C25.0783 22.5786 24.0609 23 23 23C21.9391 23 20.9217 22.5786 20.1716 21.8284C19.4214 21.0783 19 20.0609 19 19ZM19 25C17.6739 25 16.4021 25.5268 15.4645 26.4645C14.5268 27.4021 14 28.6739 14 30C14 30.7956 14.3161 31.5587 14.8787 32.1213C15.4413 32.6839 16.2044 33 17 33H29C29.7956 33 30.5587 32.6839 31.1213 32.1213C31.6839 31.5587 32 30.7956 32 30C32 28.6739 31.4732 27.4021 30.5355 26.4645C29.5979 25.5268 28.3261 25 27 25H19Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(ProfilenavIcon2);
export { Memo as ProfilenavIcon2 };
