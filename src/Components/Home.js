import React from 'react'
import Section from './Section'
function Home() {
  return (
   
    <div>
    <Section 
      Model="Model 3" 
      Description ="Scheudle A Test Drive" 
      Background = "/images/model-3.jpg"
      RightButtonText ="Custom Order" 
      LeftButtonText = "Existing Inventory"
    />
    <Section
      Model="Model Y" 
      Description ="Scheudle A Test Drive" 
      Background = "/images/model-y.jpg" 
      RightButtonText ="Custom Order" 
      LeftButtonText = "Existing Inventory"
    />
    <Section
      Model="Model S" 
      Description ="Scheudle A Test Drive" 
      Background = "/images/model-s.jpg"
      RightButtonText ="Custom Order" 
      LeftButtonText = "Existing Inventory"
    />
    <Section
      Model="Model X" 
      Description ="Scheudle A Test Drive" 
      Background = "/images/model-x.jpg"  
      RightButtonText ="Custom Order" 
      LeftButtonText = "Existing Inventory"
    />
    <Section
      Model="Sloar Panels" 
      Description ="Lowest Cost Solar Panels In America " 
      Background = "/images/solar-panel.jpg"
      RightButtonText ="Order Now" 
      LeftButtonText = "Learn More"
    />
    <Section
      Model="Solar Roof" 
      Description ="Produce clean Energy From Your Roof" 
      Background = "/images/solar-roof.jpg"      
      RightButtonText ="Order Now" 
      LeftButtonText = "Learn More"
    />
    <Section
      Model="Accessories" 
      Description ="" 
      Background = "/images/accessories.jpg"
      RightButtonText ="Custom Order" 
      
    />
    </div>
    )
}

export default Home