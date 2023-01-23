import React from 'react'
import styled from 'styled-components'
import './Section.css';
import Fade from 'react-reveal/Fade';
function Section(props) { 
    

  return (
    <Warp bgImage = {props.Background}>
        <Fade bottom>
          <ItemText>
              <h1 className='Model'>{props.Model }</h1>
              <p className='Description'>{ props.Description }</p>
          </ItemText>
        </Fade>
        
          <ButtomSection>
            <Fade bottom>
              <ButtonGroup className='ButtonGroup'>
                  <LeftButton>
                      {props.RightButtonText}
                  </LeftButton>
              
                { props.LeftButtonText &&
                  <RightButton>
                  {props.LeftButtonText}
                  </RightButton>
                }
              </ButtonGroup>
            </Fade>
            <Arrow src="/images/down-arrow.svg" />
          </ButtomSection>
          
        
    </Warp>
  )
}

export default Section

const Warp = styled.div`
    padding:1px;
    width: 100vw;
    height: 100vh;
    text-align:center;
    ${'' /* background-image:url('/images/model-3.jpg'); */}
    background-image: ${props => `url(${props.bgImage})`};
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    `
    const ItemText= styled.div`
    font-family: 'Rubik', sans-serif;
    margin-top:15vh;
    `
    const ButtomSection = styled.div`

    `
    const Arrow = styled.img`
    height:40px;
    margin-bottom:20px;
    animation: Arrow 1s ease-in-out infinite;
    `
    const ButtonGroup= styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    margin:0 0 40px 0;
   
    `
    const LeftButton= styled.div`
    height:40px;
    width:255px;
    margin:8px;
    background-color: rgba(23, 26, 32, 0.9);
    text-align:center;
    padding:10px 0;
    border-radius:10px;
    backdrop-filter: blur(5px);
    font-family: 'Rubik', sans-serif;
    color:#fff;
    opacity: 0.95;
    `
    const RightButton= styled(LeftButton)`
    background-color: rgba(244, 244, 244, 0.65);
    opacity: 0.75;
    color:#000; 
    `
   