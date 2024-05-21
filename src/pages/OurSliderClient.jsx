import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import './OurSliderClient.css'
import { render } from '@testing-library/react';


/* clients image */
import bace from '../images/clients/bace.png'
import bestbazaar from '../images/clients/bestbazaar.png'
import bhaibhai from '../images/clients/bhaibhai.png'
import bismillahshop from '../images/clients/bismillahshop.png'
import channelworld from '../images/clients/channelworld.png'
import cnn from '../images/clients/cnn.png'
import courg from '../images/clients/courg.png'
import diamonimulti from '../images/clients/diamonimulti.png'
import dishhouse from '../images/clients/dishhouse.png'
import dmtravels from '../images/clients/dmtravels.png'
import electronicszone from '../images/clients/electronicszone.png'
import emocon from '../images/clients/emocon.png'
import enayet from '../images/clients/enayet.png'
import evershine from '../images/clients/evershine.png'
import farhan from '../images/clients/farhan.png'
import fivestar from '../images/clients/fivestar.png'
import glorytrading from '../images/clients/glorytrading.png'
import gotravels from '../images/clients/gotravels.png'
import icon from '../images/clients/icon.png'
import importexport from '../images/clients/importexport.png'
import initiative_business from '../images/clients/initiative_business.png'
import iranet from '../images/clients/iranet.png'
import jseng from '../images/clients/jseng.png'
import kaziint from '../images/clients/kaziint.png'
import kitesgroup from '../images/clients/kitesgroup.png'
import monalisa from '../images/clients/monalisa.png'
import mpt from '../images/clients/mpt.png'
import partsbazar from '../images/clients/partsbazar.png'
import prakasak from '../images/clients/prakasak.png'
import rainbowplus from '../images/clients/rainbowplus.png'
import raisaauto from '../images/clients/raisaauto.png'
import rangdhanu from '../images/clients/rangdhanu.png'
import takeoff from '../images/clients/takeoff.png'
import ufly from '../images/clients/ufly.png'
import wata from '../images/clients/wata.png'
import western_scientific from '../images/clients/western_scientific.png'
import abidcorp from '../images/clients/abidcorp.png'
import adhiratrading from '../images/clients/adhiratrading.png'
import airtraffic from '../images/clients/airtraffic.png'
import arabians from '../images/clients/arabians.png'
import autogearpng from '../images/clients/autogear.png'
/* */

class OurSliderClient extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      galleryItems: [],
    };
  }

  stagePadding = {
    paddingLeft: 50,
    paddingRight: 100
  };

  render() {
    return (
      <div className='oursliderclient_container'>
        <AliceCarousel
          autoPlay
          transitionTimingFunction="linear"
          animationDuration={2500}
          infinite='true'
          disableButtonsControls
          disableDotsControls='false'
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          stagePadding={this.stagePadding}
          responsive={{ "0": { items: 5 } }}
        >
          <img alt='img1' src={bace} className="slider_image" />
          <img alt='img2' src={bestbazaar} className="slider_image" />
          <img alt='img3' src={bhaibhai} className="slider_image" />
          <img alt='img4' src={bismillahshop} className="slider_image" />
          <img alt='img5' src={channelworld} className="slider_image" />
          <img alt='img6' src={cnn} className="slider_image" />
          <img alt='img7' src={courg} className="slider_image" />
          <img alt='img8' src={diamonimulti} className="slider_image" />
          <img alt='img9' src={dishhouse} className="slider_image" />
          <img alt='img10' src={electronicszone} className="slider_image" />
          <img alt='img11' src={emocon} className="slider_image" />
          <img alt='img12' src={enayet} className="slider_image" />
          <img alt='img13' src={evershine} className="slider_image" />
          <img alt='img14' src={farhan} className="slider_image" />
          <img alt='img15' src={fivestar} className="slider_image" />
          <img alt='img16' src={glorytrading} className="slider_image" />
          <img alt='img17' src={gotravels} className="slider_image" />
          <img alt='img18' src={icon} className="slider_image" />
          <img alt='img19' src={importexport} className="slider_image" />
          <img alt='img20' src={initiative_business} className="slider_image" />
          <img alt='img21' src={iranet} className="slider_image" />
          <img alt='img22' src={jseng} className="slider_image" />
          <img alt='img23' src={kaziint} className="slider_image" />
          <img alt='img24' src={kitesgroup} className="slider_image" />
          <img alt='img25' src={monalisa} className="slider_image" />
          <img alt='img26' src={mpt} className="slider_image" />
          <img alt='img27' src={partsbazar} className="slider_image" />
          <img alt='img28' src={prakasak} className="slider_image" />
          <img alt='img29' src={rainbowplus} className="slider_image" />
          <img alt='img30' src={raisaauto} className="slider_image" />
          <img alt='img31' src={rangdhanu} className="slider_image" />
          <img alt='img32' src={takeoff} className="slider_image" />
          <img alt='img33' src={ufly} className="slider_image" />
          <img alt='img34' src={wata} className="slider_image" />
          <img alt='img35' src={western_scientific} className="slider_image" />
          <img alt='img36' src={abidcorp} className="slider_image" />
          <img alt='img37' src={adhiratrading} className="slider_image" />
          <img alt='img38' src={airtraffic} className="slider_image" />
          <img alt='img39' src={arabians} className="slider_image" />
          <img alt='img40' src={autogearpng} className="slider_image" />
        </AliceCarousel>

      </div>
    )
  }
}
export default OurSliderClient
