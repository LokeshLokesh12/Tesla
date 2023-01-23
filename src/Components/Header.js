import React,{useEffect} from 'react'
import styled from 'styled-components'
import '../index.css'
import MenuIcon from '@material-ui/icons/Menu';
import XIcon from '@material-ui/icons/Close';
const Header = () => {
  useEffect(()=>{
    let componentMenu = document.getElementById('componentMenu')
    let BurgerNav = document.getElementById('BurgerNav')
    let componentMenuHandler = (event)=>{
      BurgerNav.style.transform = 'translateX(0%)'
    }
    let BurgerClose = document.getElementById('BurgerClose')
    let BurgerCloseHandler = (event)=>{
      // console.log(BurgerClose);
      BurgerNav.style.transform = 'translateX(100%)'
    }
    componentMenu.addEventListener('click',componentMenuHandler )
    BurgerClose.addEventListener('click',BurgerCloseHandler )
    return()=>{
      componentMenu.removeEventListener('click',componentMenuHandler )
      BurgerClose.removeEventListener('click',BurgerCloseHandler )
    }
  })
  return (
    <Container>
        <img src="/images/logo.svg" alt="" />
        <Menu>
          <p><a href="http://">Model 3</a></p>
          <p><a href="http://">Model S</a></p>
          <p><a href="http://">Model X</a></p>
          <p><a href="http://">Model Y</a></p>
          <p><a href="http://">Solar Roof</a></p>
          <p><a href="http://">Solar Panels</a></p>
        </Menu>
        <RightMenu>
          <p><a href="http://">Home</a></p>
          <p><a href="http://">Account</a></p>
          <ComponentMenu id='componentMenu'/>
        </RightMenu>
        <BurgerNav id='BurgerNav'>
        <BurgerClose id='BurgerClose' />
            <li><a href="http://">Existing Inventory</a></li>
            <li><a href="http://">Used Inventory</a></li>
            <li><a href="http://">Trade-In</a></li>
            <li><a href="http://">Test Drive</a></li>
            <li><a href="http://">Insurance</a></li>
            <li><a href="http://">Cybertruck</a></li>
            <li><a href="http://">Roadster</a></li>
            <li><a href="http://">Semi</a></li>
            <li><a href="http://">Charging</a></li>
            <li><a href="http://">Powerwall</a></li>
            <li><a href="http://">Commercial Energy</a></li>
            <li><a href="http://">Unilities</a></li>
            <li><a href="http://">Find Us</a></li>
            <li><a href="http://">Support</a></li>
            <li><a href="http://">Investor Relations</a></li>
            {/* <li><a href="http://"></a></li> */}
          </BurgerNav>

        
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-Items: center ;
    padding: 0 50px; 
    font-family: 'Rubik', sans-serif;
    top: 0;
    left: 0;
    right: 0;
    color: #000;
    z-Index: 1;
    justify-Content: space-between; 
  img{
    height:20px;
    width:120px;
  }

`
const Menu = styled.div`
  display: flex;
  align-Items: center;
  justify-Content: center;
  flex: 1;
  margin: 0 0 0 5%;
  
    p{
      padding: 0 15px;
      flex-wrap: nowrap;
      font-size:17px;
    }
    a{
      flex-wrap: nowrap;
    }
  @media(max-width: 900px){
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-Items: center;
  justify-Content: center;
  gap:10px;
     p{
      padding: 0 10px;
      flex-wrap: no-wrap;
      font-size:17px;
    }
 
`
const ComponentMenu = styled(MenuIcon)`
  cursor: pointer;
  font-size: 25px;


`
const BurgerNav = styled.div`
position: fixed;
background: #fff;
list-Style:none;
top:0;
bottom:0; 
right:0;
width: 300px;
padding:35px 20px 20px;
display: flex;
flex-Direction: column;
transform: translateX(100%);
transition: 0.5s ease-in-out;
overflow-y:scroll; 
li{
  padding: 15px 0;
  border-bottom:1px solid rgba(0,0,0,.2) 
}


` 
const BurgerClose = styled(XIcon)`
align-Self: flex-end;
font-size: 25px !important;
position:fixed;
top:15px;
right:15px;
cursor: pointer;
`