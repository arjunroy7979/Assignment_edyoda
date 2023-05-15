import React from 'react'
import '../section/Leftsection.css'
import book from '../images/Icon.png'
import icon from '../images/icon1.png'
import icon1 from '../images/icon3.png'
import Group1 from '../images/Group1.png'
import group2 from '../images/group2.png'
import rect from '../images/rect.png'
import Rightsection from './Rightsection'

export default function LeftSection() {

   return (
      <>
         <div className='side_section_left'>
            <div >
               <h2 className='header'> <span className='header_span'> Access curated course worth</span>  <br />  <span className='price price1'> &#8377;18,500 <img src={rect} alt="cross" id='rect' /></span>
                  <span className='header_span'>at just </span><span className='price price2'>&#8377; 99 </span> <span className='header_span'> per year!</span>
               </h2>
            </div>
            <div className='pointer1 pointer'>
               <img src={book} alt="" />
               <p className='detail'><span className='pointer_span'>100+</span> job relevant courses</p>
            </div>
            <div className='pointer2 pointer'>
               <img src={icon} alt="" />
               <p className='detail'> <span className='pointer_span'>20,000+</span> Hours of content</p>
            </div>
            <div className='pointer3 pointer'>
               <img src={icon1} alt="" />
               <p className='detail'><span className='pointer_span'>Exclusive</span> webniar access</p>
            </div>
            <div className='pointer4 pointer'>
               <img src={group2} alt="" />
               <p className='detail'>scholarship worth <span className='pointer_span'>&#8377; 94,500</span></p>
            </div>
            <div className='pointer5 pointer'>
               <img src={Group1} alt="" />
               <p className='detail'><span className='pointer_span'>Add free</span> learning Experience</p>
            </div>
         </div>
         <Rightsection />
      </>
   )
}
