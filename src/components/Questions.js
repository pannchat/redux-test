import React,{useEffect, useState} from 'react';
import styled from 'styled-components'
import {FaArrowAltCircleRight,FaInstagram,FaRegSadTear,FaSpinner} from 'react-icons/fa';
import { useHistory } from 'react-router';
import {connect} from 'react-redux'
import NavBar from './NavBar';
import pandatetra from '../asset/img/pandatetra.jpeg'
import duplicareus from '../asset/img/duplicareus.jpeg'
import algaeeater from '../asset/img/algaeeater.png';
import tretocephalus from '../asset/img/tretocephalus.jpeg';
import guppy from '../asset/img/guppy.png';
import anci from '../asset/img/anci.jpeg';
import platty from '../asset/img/platty.jpeg';

const SubTitle = styled.article`
text-align:center;
margin-top:20px;
color:#8aa1a1;
`;

const Title = styled.article`
    @font-face {
        font-family: 'S-CoreDream-3Light';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
        font-weight: normal;
        font-style: normal;
   }
   margin-top:5vh;
   margin-bottom:20px;
//    text-align:center;
    font-family:S-CoreDream-3Light;
    b{
        color:#0b7285;
    }
    font-size:1.3rem;
    display:flex;
    div{
        text-align:center;
        width:100%;
    }
`;
const ButtonContainer = styled.div`
margin-top:10px;
`;

const NextButton = styled.button`
    width:100%;
    height:45px;
    border: 1px solid #6e6e6e;
    color:#6e6e6e;
    box-shadow:none;
    background-color:white;
    border-radius:10px;

    font-size:15pt;
    span{
        vertical-align:middle;
        & + svg{
            
            vertical-align:middle;
            margin-left:5px;
        }
    }
    &+&{
        margin-top:10px;
    }


`;

const Bottom = styled.footer`
    text-align:center;
    position:absolute;
    bottom:5px;
    left:50%;
    transform:translateX(-50%);
    color:#868e96;
`;
const arr = [
    {
        "id" : 0,
        "image" : 'https://www.livefishdirect.com/wp-content/uploads/2020/06/Green-neon-tetra.jpg',
        "list" : {1:'카디널 테트라', 2:'네온 테트라', 3:'그린 네온 테트라'},
        "answer" : 3
    },
    {
        "id" : 1,
        "image" : 'https://cdn.shopify.com/s/files/1/1163/2672/products/Sterbai-Corydora-Small-3_1024x1024.jpg?v=1602175504',
        "list" : {1:'스터바이 코리도라스', 2:'청소 물고기', 3:'팬더 코리도라스'},
        "answer" : 1
    },
    {
        "id" : 2,
        "image" : pandatetra,
        "list" : {1:'하스타투스 코리도라스', 2:'팬더 테트라', 3:'라스보라 헹겔리'},
        "answer" : 2
    },
    {
        "id" : 3,
        "image" : duplicareus,
        "list" : {1:'하스타투스 코리도라스', 2:'듀플리 코리도라스', 3:'아돌포이 코리도라스'},
        "answer" : 2
    },
    {
        "id" : 4,
        "image" : algaeeater,
        "list" : {1:'시아미즈 알지이터', 2:'오토싱클루스', 3:'돌고기'},
        "answer" : 1
    },
    {
        "id" : 5,
        "image" : tretocephalus,
        "list" : {1:'키포틸라피아 프론토사', 2:'피그미썬피쉬', 3:'네오란프로로그스 트레트케파르스'},
        "answer" : 3
    },
    {
        "id" : 6,
        "image" : guppy,
        "list" : {1:'구피', 2:'베타', 3:'플래티'},
        "answer" : 1
    },
    {
        "id" : 7,
        "image" : anci,
        "list" : {1:'똥먹는 물고기', 2:'안시스투루스(안시)', 3:'골드 스트라이프 코리도라스'},
        "answer" : 2
    },
    {
        "id" : 8,
        "image" : platty,
        "list" : {1:'풍선 몰리', 2:'플래티', 3:'구피'},
        "answer" : 2
    },
    
    
];
const Questions = (props) => {
    let history = useHistory();
    const [number, setNumber] = useState(0);
    const [data, setData] = useState(arr[number]);
    // console.log(number);
    const [score, setScore] = useState(0);
    // Object.entries(data[number].list).map((e=>console.log(a,b,"test"));


    useEffect(()=>{
        if(number===0) props.dispatch({type:'RESET'})
        setData(arr[number])

        return()=>{
            if(number === arr.length-1){
                history.push('/result');
            }
        }
    },[number,score])
    const grading = (myAnswer) =>{

        
        // console.log(myAnswer,data[number].answer,number)
        if(data.answer == myAnswer){
            props.dispatch({type:'INCREMENT'});
        } 
        setNumber(number+1);
        // console.log(number , data.length)

    }
    return(
    <>
        <NavBar/>
        <Title>
            <b>{number+1}</b>/10
            <div>이 물고기의 이름을 맞춰주세요</div>
        </Title>
        

        <img src={data.image} />
        <ButtonContainer>

            {Object.entries(data.list).map(e=>{
                const [key,value] = e;
                return <NextButton onClick={()=>{grading(key)}} value={key}>{value}</NextButton>
            })}
            
       
            <NextButton onClick={()=>{setNumber(number+1)}}><span>모르겠어요</span><FaRegSadTear/></NextButton>
        </ButtonContainer>
        {/* <Bottom>만든이 : <a href="">{props.score}</a></Bottom> */}
    </>
    );
}
function myState(state){
    console.log(state)
    return{
        score : state,
    }
}
export default connect(myState)(Questions)
// export default Questions;