import React from 'react'
import classes from './Porftolio.module.css'
import { ChattingnavIcon } from './ChattingnavIcon'
import { ProfilenavIcon } from './ProfilenavIcon'
import { HomenavIcon } from './HomenavIcon'
import { BussinessnavIcon } from './BussinessnavIcon'



const TabNavBarHome: React.FC = () => {
  return (
    <div>
      <div
        className={classes.navbar1}
      >
        <a href="#frame8">
        <div className={classes.chattingNav}>
          <ChattingnavIcon className={classes.icon} />
        </div>
        </a>
       
<a href="#frame9">
<div className={classes.bussinessNav}>
          <BussinessnavIcon className={classes.icon2} />
        </div>
</a>

        <div className={classes.homenav}>
          <HomenavIcon className={classes.icon3} />
        </div>
      <a href="#sectionB">
      <div className={classes.profileNav}>
          <ProfilenavIcon className={classes.icon4} />
        </div>
      </a>
      </div>



    </div>
  )
}

export default TabNavBarHome;