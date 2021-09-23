import React from 'react';
import {connect} from 'react-redux'
import NavBar from './NavBar';
import styled from 'styled-components'
import Shrimp from '../asset/icon/score/Shrimp.svg'
const Result = (props) =>{
    const ResultImg = styled.img`

        width:50%;
        margin:auto;
        margin-top:3vh;
    `;
    const ResultScore = styled.div`
        font-size:20pt;
        font-weight:bold;
        b{
            color:#1c7ed6
        }
        text-align:center;
        margin-top:20px;
    `;
    const DescriptionBox = styled.div`
        background-color:#dee2e6;
        border-radius:10px;
        padding:10px;
        
    `;

    const result = {
        1:{
            name:'새우',
            description:'당신은 어항속 최약체 새우입니다. 수초 밑에 숨어계세요 ㅎ',
            img : Shrimp
        }
    }
    let myScore = {};
    if (props.score < 3){
        myScore = result[1];
    }
    console.log(myScore)
    return(
        <>
        <NavBar/>
        <ResultImg src={myScore.img} />
        <ResultScore>맞춘 개수 : <b>{props.score}</b></ResultScore>
        <DescriptionBox>
        <div><h3>"{myScore.name}"</h3></div>
        <div>{myScore.description}</div>
        </DescriptionBox>
        </>
    )
}

function myState(state){
    return{
        score:state
    }
}
export default connect(myState)(Result);