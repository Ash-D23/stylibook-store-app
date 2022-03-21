import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import Drawer from '../Drawer/Drawer';

function Navigation() {

  const [showdrawer, setshowdrawer] = useState(false)

  const onMenuClick = () => setshowdrawer(true)

  const closeDrawer = () => setshowdrawer(false)
  return (
    <>
      <Navbar onMenuClick={onMenuClick} />
      <Drawer show={showdrawer} closeDrawer={closeDrawer} />
    </>
  )
}

export default Navigation