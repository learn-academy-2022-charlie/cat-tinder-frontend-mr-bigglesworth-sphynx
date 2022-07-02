// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import DinoNew from './DinoNew.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When DinoNew Renders", () => {

  let dinoNewRender
  beforeEach(() => {
    dinoNewRender = shallow(<DinoNew />)
  })
  it("displays a heading", ()=>{
    const dinoNewHeading = dinoNewRender.find("h3")
    expect(dinoNewHeading.length).toEqual(1)
    // method .text() checks that the heading text matches in the render
    expect(dinoNewHeading.text()).toEqual("Tell Us About Your Prehistoric Self!")
  })
  it("displays a form", ()=>{
    const dinoNewForm = dinoNewRender.find("Form")
    expect(dinoNewForm.length).toEqual(1)
  })
  it("displays an input for dino name", ()=>{
    // finds the attribute name in your form and then checks for the key name
    const dinoNewNameInput = dinoNewRender.find('[name="name"]')
    expect(dinoNewNameInput.length).toEqual(1)
  })
  it("displays an input for dino age", ()=>{
    // finds the attribute name in your form and then checks for the key age
    const dinoNewAgeInput = dinoNewRender.find('[name="age"]')
    expect(dinoNewAgeInput.length).toEqual(1)
  })
  it("displays an input for dino enjoys", ()=>{
    // finds the attribute name in your form and then checks for the key enjoys
    const dinoNewEnjoysInput = dinoNewRender.find('[name="enjoys"]')
    expect(dinoNewEnjoysInput.length).toEqual(1)
  })
  it("displays an input for dino image", ()=>{
    // finds the attribute name in your form and then checks for the key image
    const dinoNewImageInput = dinoNewRender.find('[name="image"]')
    expect(dinoNewImageInput.length).toEqual(1)
  })      
})