import React from 'react';
import { Button } from 'react-bootstrap';

import banner from './pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png';

const Banner = () => {
    return (
        <div>
           <table>
<tbody>
<tr style={{backgroundColor: '#dee2e6', height: '400px'}}>
    <th><h2><b>We build your Dream &ensp; &nbsp;</b></h2>
    <p>Only Easty Agency, the mordern way to sell your own home, you can use
         Griffin Residential to market your property  &ensp; &nbsp;</p>
         <Button style={{color: 'white'}} variant="dark">Booking</Button>
    </th>
   
   
    <th><img width="55%" src={banner} alt="banner"/></th>
  
</tr>
</tbody>
</table>
        </div>
    );
};

export default Banner;