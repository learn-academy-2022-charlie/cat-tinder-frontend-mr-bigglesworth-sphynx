// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import DinoShow from './DinoShow.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When DinoShow Renders", () => {
  const dino = {
        id: 1,
        name: "Jorge",
        age: 28,
        enjoys: "walks through the park",
        image: "https://images.unsplash.com/photo-1560148271-00b5e5850812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80"
      }
  
  let dinoShowRender
  beforeEach(() => {
    dinoShowRender = shallow(<DinoShow dino={dino} />)
  })
  it("Displays a profile for the dino being passed it", ()=>{
    const cardRender = dinoShowRender.find("Card")
    expect(cardRender.length).toEqual(1)
  })
})