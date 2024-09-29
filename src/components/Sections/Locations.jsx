import React from 'react'
import styled from "styled-components";
export default function Locations() {
  return (
    <div>

    <h2 style={{color: 'black', fontSize: '32px;', textAlign:'center'}}>Locations</h2>
<LocationsWrapper>
<div>Birmingham</div>
<div>Wolverhampton</div>
<div>Coventry</div>
<div>Dudley</div>
<div>Walsall</div>
<div>West Bromwich</div>
<div>Solihull</div>
<div>Sutton Coldfield</div>
<div>Stourbridge</div>
<div>Halesowen</div>
<div>Smethwick</div>
<div>Redditch</div>
<div>Tamworth</div>
<div>Kidderminster</div>
<div>Bromsgrove</div>
<div>Nuneaton</div>
<div>Leamington Spa</div>
<div>Warwick</div>
<div>Rugby</div>
<div>Lichfield</div>





    </LocationsWrapper>
    </div>
  )
}


const LocationsWrapper = styled.div`

display:grid;
grid-template-columns: repeat(4, 1fr);
align-items:center;
padding: 1.25rem;
height:auto;
font-size: 21px;
font-weight:bold;
color:white;
background-color:#0B093B;

@media (max-width: 768px) {
  
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */

}

`