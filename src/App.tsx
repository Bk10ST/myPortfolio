import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Porftolio } from './components/Porftolio/Porftolio';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App() {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Porftolio />
    </div>
  );
});
