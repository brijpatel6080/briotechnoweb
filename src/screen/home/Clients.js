import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Clients.css'
import '../../assets/css/Star.css';
import img1 from '../../assets/images/brand/mitech-client-logo-08.png';
import AppTheme from '../../config/Theme';
function Clients() {
   return (
      <div className="bg-white1 pt-60 pb-50 clients" style={{ background: AppTheme.bgwhite }}>
         {/* 
   <div className='container-fluid' >
      <div className="row title" style={{ marginBottom: "20px" }} >
      <div className="col-sm- btn btn-info">
         Owl Carousel In React Application
      </div>
   </div>
</div>
*/}
         <div className='container-fluid' >
            <OwlCarousel items={6}
               className="owl-theme"
               loop
               autoplay
               // nav
               margin={8} >
               <div ><img className="img" src={img1} /></div>
               <div ><img className="img" src={img1} /></div>
               <div ><img className="img" src={img1} /></div>
               <div ><img className="img" src={img1} /></div>
               <div ><img className="img" src={img1} /></div>
               <div ><img className="img" src={img1} /></div>
               <div ><img className="img" src={img1} /></div>

            </OwlCarousel>
         </div>
      </div>
   )
}
export default Clients