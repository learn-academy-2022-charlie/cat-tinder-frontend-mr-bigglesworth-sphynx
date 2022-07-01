// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import DinoIndex from './DinoIndex.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When DinoIndex Renders", ()=>{
  const props = {
    dinos: [
      {
        id: 1,
        name: "Jorge",
        age: 28,
        enjoys: "walks through the park",
        image: "https://images.unsplash.com/photo-1560148271-00b5e5850812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80"
      }
    ]
  }
  let dinoIndexRender
  beforeEach(() => {
    dinoIndexRender = shallow(<DinoIndex {...props} />)
  })
  it("displays a header", ()=>{
    const dinoIndexHeading = dinoIndexRender.find("h3")
    expect(dinoIndexHeading.length).toEqual(1)
    expect(dinoIndexHeading.text()).toEqual("Here's all the Dinos for your viewing pleasure")
  })
  it("displays a card from ReactStrap per dino ", () => {
    const dinoIndexCard = dinoIndexRender.find("Card")
    expect(dinoIndexCard.length).toEqual(1)
  })
})