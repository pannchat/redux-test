import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {FaArrowAltCircleRight,FaInstagram} from 'react-icons/fa';
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import Questions from './components/Questions';
import Result from './components/Result';
import Aquarium from './asset/icon/aquarium.svg';
import NavBar from './components/NavBar';
import Betta from './asset/icon/score/betta.png'
const Main = styled.main`

  display:flex;
  justify-content:center;

`;
const Container = styled.section`
  width:100%;
  max-width:480px;
  box-sizing:border-box;
  padding:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
`


function App() {
  return (
    <Main>
      <Container>
        <Switch>
          <Route exact path="/">
            <Start></Start>
          </Route>
          <Route path="/apistogramma">
            <Questions>z</Questions>
          </Route>
          <Route path="/result">
            <Result></Result>
          </Route>
        </Switch>
      </Container>
    </Main>

  );
}


const SubTitle = styled.article`
text-align:center;
// margin-top:10vh;
color:#8aa1a1;
`;
const Title = styled.article`
    @font-face {
        font-family: 'Cafe24Ssurround';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'S-CoreDream-3Light';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
        font-weight: normal;
        font-style: normal;
   }
   margin-top:10vh;
   text-align:center;
    font-family:S-CoreDream-3Light;
    // color:#8aa1a1;
    font-size:20pt;

`;
const ButtonContainer = styled.div`
  margin: 10px 0;
`;

const NextButton = styled.button`
    width:100%;
    height:45px;
    background-color:#8aa1a1;
    color:white;
    box-shadow:none;
    border:none;
    border-radius:10px;
    cursor:pointer;
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
const Smsign = styled.div`
    color:#a4a4a4;
    margin-top:10px;

`;
const MainLogo = styled.img`
    width:60%;
    margin:auto;

`;
const Start = () => {
  let history = useHistory();
    return(
    <>
    <NavBar/>
    <Title>
        [관상어]고인물 테스트
    </Title>
    <MainLogo src={Betta}/>
    <SubTitle>나는 담수 관상어에 대해 <br/>얼마나 잘 아는지 테스트해보세요.</SubTitle>

    <ButtonContainer>
        <NextButton onClick={()=>history.push('apistogramma')}><span>검 사 시 작</span><FaArrowAltCircleRight className="icons" size="25px"/></NextButton>
        <NextButton onClick={()=>{window.location.href="https://www.instagram.com/fish._.hi/"}}><span>인스타그램</span><FaInstagram className="icons" size="25px"/></NextButton>
        <Smsign>앞으로 더 재밌는 테스트와 다양한 서비스를 만들어 볼 예정입니다. 인스타그램 팔로우 해주세용</Smsign>
    </ButtonContainer>
    </>
    );
}

export default App;
