import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';


function Home() {
  const text = "WVSU - University Students' Alliance";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100); // Adjust the delay time here
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text]);

  return (
    <>
    <div className='body'>

      <div className='w-100 vh-100 position-absolute'>
        <img className='img-cover'  src="https://www.finduniversity.ph/_resources/business/7515/wvsu-393.jpeg" alt="" />
        <div className='overlay'></div>
      </div>

      <div className='d-flex justify-content-center align-items-center vh-100 container'>
        <div className='container position-absolute col-12  h-100  d-flex justify-content-center '>
          <div className=' col-lg-6 mx-2 m-md-0 col-md-4  d-flex flex-column  justify-content-center align-items-center '>
           
            <h1 className='hero-name text-center ' style={{ 
            background: 'linear-gradient(to bottom right, yellow, blue)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'}}>{displayedText}</h1>

            <p className=' text-center w-75 hero-desc'> A political socio-civic, cause-oriented, and student-led organization for, with, and by Taga-Wests'</p>
           <br />
           <ScrollLink to="brief-desc" className='p-1 rounded-1 m-0 border-0 shadow text-center w-25 hero-des hero-button button-animation' smooth={true} duration={500}>
            <button className='border-0 bg-transparent' style={{fontWeight: 'normal', letterSpacing: '2px'}}> EXPLORE </button>
          </ScrollLink>

          </div>

          <div className=' col-lg-6 mx-2 m-md-0  d-sm-none d-lg-flex flex-column justify-content-center align-items-center   d-md-flex  d-none  '>
            <img className='hero-avatar' src="../images/borce.png" alt="" />
          </div>
        </div>
      </div>

      <div className='container posts my-4 d-flex justify-content-center' id='brief-desc' >
        <div className=' m-3 p-4 rounded-2  d-flex flex-column justify-content-center align-items-center' 
        style={{width: '200px', height: '150px'}}>

          <div>
            <h1 style={{ 
            background: 'linear-gradient(to bottom right, yellow, blue)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            fontWeight: 'bolder'}} className='bi-people'></h1>
          </div>
              <h1 style={{ 
            background: 'linear-gradient(to bottom right, yellow, blue)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            fontWeight: 'bolder'}}> 250+ </h1>

            <h6 style={{ 
            background: 'linear-gradient(to bottom right, yellow, blue)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            fontWeight: 'bolder'}}>KA-USA MEMBERS</h6>
        </div>

        <div style={{width: '200px', height: '150px'}} className=' m-3 p-4 rounded-2  d-flex flex-column justify-content-center align-items-center'>
             
        <div>
            <h1 style={{ 
            background: 'linear-gradient(to bottom right, yellow, blue)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            fontWeight: 'bolder'}} className='bi-book-half '></h1>
          </div>

              <h1 style={{ 
            background: 'linear-gradient(to bottom right, yellow, blue)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            fontWeight: 'bolder'}}> 50+ </h1>

          <h6 style={{ 
            background: 'linear-gradient(to bottom right, yellow, blue)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            fontWeight: 'bolder'}}>KAWSA PROJECTS</h6>
        </div>

        <div style={{width: '200px', height: '150px'}} className=' m-3 p-4 rounded-2  d-flex flex-column justify-content-center align-items-center'>
             
             <div>
                 <h1 style={{ 
                 background: 'linear-gradient(to bottom right, yellow, blue)',
                 '-webkit-background-clip': 'text',
                 '-webkit-text-fill-color': 'transparent',
                 fontWeight: 'bolder'}} className='bi-calendar '></h1>
               </div>
     
                   <h1 style={{ 
                 background: 'linear-gradient(to bottom right, yellow, blue)',
                 '-webkit-background-clip': 'text',
                 '-webkit-text-fill-color': 'transparent',
                 fontWeight: 'bolder'}}> 2014 </h1>
     
               <h6 style={{ 
                 background: 'linear-gradient(to bottom right, yellow, blue)',
                 '-webkit-background-clip': 'text',
                 '-webkit-text-fill-color': 'transparent',
                 fontWeight: 'bolder'}}>FOUNDED </h6>
             </div>
         
      </div>

      <div className=' mb-4 ' style={{width: '90%', display: 'block', margin: '0 auto'}} >
      <h1 className='text-dark-emphasis fw-bolder bi-newspaper'> News & Events </h1>
      <p className='text-dark-emphasis fw-light'> Get updated of recent happenings of the organization. </p>
      </div>
      
      <div style={{width: '90%', margin: '0 auto'}} className=' d-block'>

      <div  className='  posts  d-flex justify-content-center   col-12' id='brief-desc' >
        
      <div className="container text-center shadow col-9 p-0 ">
  <div className="row  rounded col-12 d-flex  flex-wrap justify" >

<div className='col-6 border border-success  p-2'>
    <div className="p-0 border rounded  d-flex flex-column" style={{height: '300px'}} >
    <div className='border text-start px-3 d-flex align-items-center gap-1' style={{height: '20%'}} >
        <div className=' '>
        <img className='rounded-5' src="https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/364169248_3415929631952915_924219262039996525_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFg6YkgculOZXwQzOLrzWi0GKbXRHNPjAAYptdEc0-MAEbcQ_p0AqzoNj5V_rZQEBX_hsizHuoOBQNx8JUA7PBY&_nc_ohc=O4Fd1XNKzQoAX9s4Owc&_nc_ht=scontent.fceb6-1.fna&_nc_e2o=f&oh=00_AfCCIZrF8mlF_n8FYZ2mG99a6dLLpbYBZoCWmDqg9tyhOg&oe=64E0D8DC" alt="" style={{height: '45px'}} />
        </div>
        <div className='border' style={{width: '100%', overflow: 'hidden'}}>
        <p className='  text-dark  m-0 px-1 fw-bold border' style={{whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis', lineHeight: '18px', fontSize: '16px', letterSpacing: '-.5px',width:'200px' }} > Deputy of  Affairs </p>
        <p className=' text-dark-emphasis px-1 m-0 fw-lighter' style={{whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis', lineHeight: '18px', fontSize: '12px', letterSpacing: '-.5px' }} > August 16, 2023 . <i className='bi-calendar-check text-dark-emphasis'></i> </p>

        </div>
      </div>

      <div className='border m-0' style={{height: '50%', width: '100%'}} >
      <img src="../src/images/borce.png" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="" />
      </div>
      <div className='border text-start px-3 d-flex align-items-center gap-2' style={{height: '15%'}} >
        <div className='border rounded-5 '>
        <img src="../src/images/borce.png" alt="" style={{height: '30px'}} />
        </div>
        <div>
        <p className='text-black text-dark-emphasis border m-0 fw-light ' style={{whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis'}} > WVSU - USA | Archon </p>
        
        </div>
      </div>

    </div>
    </div>

    <div className='col-6 border border-success  p-2'>
    <div className="p-0 border rounded  d-flex flex-column" style={{height: '300px'}} >
    <div className='border text-start px-3 d-flex align-items-center gap-1' style={{height: '20%'}} >
        <div className=' '>
        <img className='rounded-5' src="https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/364169248_3415929631952915_924219262039996525_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFg6YkgculOZXwQzOLrzWi0GKbXRHNPjAAYptdEc0-MAEbcQ_p0AqzoNj5V_rZQEBX_hsizHuoOBQNx8JUA7PBY&_nc_ohc=O4Fd1XNKzQoAX9s4Owc&_nc_ht=scontent.fceb6-1.fna&_nc_e2o=f&oh=00_AfCCIZrF8mlF_n8FYZ2mG99a6dLLpbYBZoCWmDqg9tyhOg&oe=64E0D8DC" alt="" style={{height: '45px'}} />
        </div>
        <div className='border' style={{width: '100%', overflow: 'hidden'}}>
        <p className='  text-dark  m-0 px-1 fw-bold border' style={{whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis', lineHeight: '18px', fontSize: '16px', letterSpacing: '-.5px',width:'200px' }} > Deputy of  Affairs </p>
        <p className=' text-dark-emphasis px-1 m-0 fw-lighter' style={{whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis', lineHeight: '18px', fontSize: '12px', letterSpacing: '-.5px' }} > August 16, 2023 . <i className='bi-calendar-check text-dark-emphasis'></i> </p>

        </div>
      </div>

      <div className='border m-0' style={{height: '50%', width: '100%'}} >
      <img src="../src/images/borce.png" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="" />
      </div>
      <div className='border text-start px-3 d-flex align-items-center gap-2' style={{height: '15%'}} >
        <div className='border rounded-5 '>
        <img src="../src/images/borce.png" alt="" style={{height: '30px'}} />
        </div>
        <div>
        <p className='text-black text-dark-emphasis border m-0 fw-light ' style={{whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis'}} > WVSU - USA | Archon </p>
        
        </div>
      </div>

    </div>
    </div>

    <div className='col-6 border border-success  p-2'>
    <div className="p-0 border rounded  d-flex flex-column" style={{height: '300px'}} >
    <div className='border text-start px-3 d-flex align-items-center gap-1' style={{height: '20%'}} >
        <div className=' '>
        <img className='rounded-5' src="https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/364169248_3415929631952915_924219262039996525_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFg6YkgculOZXwQzOLrzWi0GKbXRHNPjAAYptdEc0-MAEbcQ_p0AqzoNj5V_rZQEBX_hsizHuoOBQNx8JUA7PBY&_nc_ohc=O4Fd1XNKzQoAX9s4Owc&_nc_ht=scontent.fceb6-1.fna&_nc_e2o=f&oh=00_AfCCIZrF8mlF_n8FYZ2mG99a6dLLpbYBZoCWmDqg9tyhOg&oe=64E0D8DC" alt="" style={{height: '45px'}} />
        </div>
        <div className='border' style={{width: '100%', overflow: 'hidden'}}>
        <p className='  text-dark  m-0 px-1 fw-bold border' style={{whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis', lineHeight: '18px', fontSize: '16px', letterSpacing: '-.5px',width:'200px' }} > Deputy of  Affairs </p>
        <p className=' text-dark-emphasis px-1 m-0 fw-lighter' style={{whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis', lineHeight: '18px', fontSize: '12px', letterSpacing: '-.5px' }} > August 16, 2023 . <i className='bi-calendar-check text-dark-emphasis'></i> </p>

        </div>
      </div>

      <div className='border m-0' style={{height: '50%', width: '100%'}} >
      <img src="../src/images/borce.png" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="" />
      </div>
      <div className='border text-start px-3 d-flex align-items-center gap-2' style={{height: '15%'}} >
        <div className='border rounded-5 '>
        <img src="../src/images/borce.png" alt="" style={{height: '30px'}} />
        </div>
        <div>
        <p className='text-black text-dark-emphasis border m-0 fw-light ' style={{whiteSpace: 'nowrap', overflow:'hidden', textOverflow:'ellipsis'}} > WVSU - USA | Archon </p>
        
        </div>
      </div>

    </div>
    </div>

    
  </div>
</div>

        <div className='border m-0 rounded shadow col-3'>

</div>


      </div>
      </div>

      </div>

                
    </>
  );
}



export default Home;
