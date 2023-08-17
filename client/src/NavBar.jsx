import React, { useState } from 'react'
import './style.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'; // Import the Bootstrap Icons CSS

function NavBar() {

    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    const toggleMobileNav = () => {
      setIsMobileNavVisible(!isMobileNavVisible);
    };

  return (
    <>
    <div className='nav-container  d-flex justify-content-between align-items-center position-absolute w-100 z-3 '>
        <div className=' m-3 '>
            <h1 className='logo p-1 m-0 ' style={{ 
            background: 'linear-gradient(to bottom right, yellow, blue)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'}}>USA</h1>
        </div>

        <div className='  gap-5 m-3 d-lg-flex d-md-flex d-none'>
            <div className='p-1'>
                <p className='m-0 nav-links'>Who We Are</p>
            </div>

            <div className=' p-1'>
                <p className='m-0 nav-links'>Membership</p>
            </div>

            <div className=' p-1'>
                <p className='m-0 nav-links'>Events</p>
            </div>

            <div className=' p-1'>
                <p className='m-0 nav-links'>Partnership</p>
            </div>
        </div>

        <div className=' d-flex gap-5 m-3 '>
            <div className=' p-1'>
                <p className='m-0 nav-links d-lg-flex d-md-flex d-none'>Sign in</p>
                <p className='m-0 d-lg-none d-md-none d-flex  ' onClick={toggleMobileNav}> <span className='bi bi-list fs-2'></span>  </p>
            </div>
        </div>

    </div>
    
          {/* Render the mobile navigation container based on isMobileNavVisible */}
          {isMobileNavVisible && (
        <div className='z-3  mobile-nav-container border d-flex justify-content-center align-items-center rounded-3'>
            <div className=' flex-column  mobile-nav w-100'>
            
            <div className=' m-3 text-center '>
                <h1 className='logo p-1 m-0 ' style={{ 
                background: 'linear-gradient(to bottom right, yellow, blue)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent'}}>USA</h1>
            </div>

            <div className='p-1  text-center p-2 '>
                <p className='m-0 nav-links'>Who We Are</p>
            </div>

            <div className=' p-1  text-center p-2'>
                <p className='m-0 nav-links'>Membership</p>
            </div>

            <div className=' p-1  text-center p-2'>
                <p className='m-0 nav-links'>Events</p>
            </div>

            <div className=' p-1 text-center p-2'>
                <p className='m-0 nav-links'>Partnership</p>
            </div>

            <div className=' p-1 text-center p-2'>
                <p className='m-0 bi bi-x fs-1 ' onClick={toggleMobileNav}></p>
            </div>

        </div>
        </div>
      )}


    </>
  )
}

export default NavBar