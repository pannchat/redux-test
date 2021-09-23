import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const NavBar = () =>{
    let history = useHistory();
    const TopLogo = styled.header`
    @font-face {
        font-family: 'S-CoreDream-3Light';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
        font-weight: normal;
        font-style: normal;
   }
        font-family:'S-CoreDream-3Light';
        text-align:center;
        cursor:pointer;
    `;
    return(
        <TopLogo onClick={()=>{history.push('/')}}>피쉬하이</TopLogo>
        // <div>hi</div>
    )
}
export default NavBar;