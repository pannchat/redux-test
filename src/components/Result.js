import React, { useEffect, useReducer, useState,useRef } from 'react';
import {connect} from 'react-redux'
import NavBar from './NavBar';
import styled from 'styled-components'
import Shrimp from '../asset/icon/score/Shrimp.svg'
import Guppy from '../asset/icon/score/guppy.svg';
import Betta from '../asset/icon/score/betta.png';
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import {FaLink} from 'react-icons/fa';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Result = (props) =>{

    
let [loading, setLoading] = useState(false);
    useEffect(()=>{
    
    setTimeout(()=>{
        setLoading(true);
    },2000)

    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    },[])
    const shareKakao = () =>{
        window.Kakao.Link.createCustomButton({
            container: '#create-kakao-link-btn',
            templateId: 642480,
            templateArgs: {
                title:
                '판교 맛집에 들르다. 다양하고 풍부한 퓨전 한정식. 깔끔한 내부 인테리어 라이언',
                description:
                '부담없는 가격에 푸짐하게 즐기는 점심메뉴 런치한정식, 불고기정식, 돼지 김치찌개 등',
            },
            })
        }
    

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
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
    const Loading = styled.div`
        width:100%;
        height:100%;
        position:absolute;
        top:50%;
        left:0;
        transform:translateY(-50%);
        display:flex;
        flex-direction:column;
        justify-content:center;
        span{
            color:#4c6ef5;
            font-size:20pt;
            text-align:center;

        }
    `;
    const Shared = styled.div`
        display:flex;
        margin:10px;
        justify-content:space-evenly;
        div{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
    `;
    const Btn = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:40px;
    height:40px;
    border-radius: 25px; 
    border: 1px solid #ECECF5;

    `;
    const Caption = styled.div`
    display: flex; 
    justify-content: center; 
    width: 100%; 
    font-size: 14px; 
    font-weight:bold;
    margin-top: 8px; 
    `




    const result = {
        1:{
            name:'새우',
            description:'당신은 어항속 최약체 새우입니다. 수초 밑에 숨어계세요 ㅎ',
            img : Shrimp
        },
        2:{
            name:'구피',
            description:'당신은 국민 열대어 구피입니다. 어린 새우 정도는 잡아 먹을 수 있어요.',
            img : Guppy
        },
        3:{
            name:'베타',
            description:'당신은 어항 속의 작은 왕 베타입니다. 베타라는 이름은 끈질긴 물고기라는 뜻을 가지고 있대요. ',
            img : Betta
        }
    }
    let myScore = {};
    if (props.score < 3){
        myScore = result[1];
    }else if(3<=props.score && props.score < 6){
        myScore = result[2];
    }
    else if(6<=props.score && props.score <= 8){
        myScore = result[3];
    }else if(props.score === 9 ){
        myScore = result[4];
    }
    

        


    return(
        <>
     
                <>
                
                <NavBar/>
                {
                    loading 
                    ?(
                    <>
                        <ResultImg src={myScore.img} />
                        <ResultScore>맞춘 개수 : <b>{props.score}</b></ResultScore>
                        <DescriptionBox>
                        <div><h3>"{myScore.name}"</h3></div>
                        <div>{myScore.description}</div>
                        </DescriptionBox>
                        <Shared>
                            <div>
                            <a id="create-kakao-link-btn" onClick={()=>{shareKakao()}}>
                            <img
                            style={{width:'40px'}}
                                src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
                            />
                            </a>
                            <Caption>카카오톡</Caption>
                            </div>
                            
                            <div>
                                <Btn onClick={()=>{alert("링크가 복사되었습니다.")}}>
                                    <CopyToClipboard text="https://test.fishhi.kr" >
                                        <FaLink size="30px"/>
                                    </CopyToClipboard>
                                </Btn>
                                <Caption>링크복사</Caption>
                            </div>
                        </Shared>
                        
                        
                    </>
                    )
                    :(
                        <Loading>
                            <span>계산중입니다..</span>
                            <ScaleLoader height="80" width="20" margin="5" color="#4263eb"/>
                        </Loading>
                    )
                }
                </>
           



        </>

    )
}

function myState(state){
    return{
        score:state
    }
}
export default connect(myState)(Result);