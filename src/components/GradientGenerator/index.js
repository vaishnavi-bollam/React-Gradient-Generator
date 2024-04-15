import {Component} from 'react'
import {Input, Button, Container} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem/index'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    direction: gradientDirectionsList[0].value,
  }

  changedFirstColor = event => {
    console.log(event.target.value)
    this.setState({colorOne: event.target.value})
  }

  changedSecondColor = event => {
    this.setState({colorTwo: event.target.value})
  }

  buttonClicked = () => {
    console.log('button clicked')
  }

  accessButton = value => {
    this.setState({direction: value})
  }

  render() {
    const {colorOne, colorTwo, direction} = this.state
    return (
      <Container
        direction={direction}
        colorOne={colorOne}
        colorTwo={colorTwo}
        data-testid="gradientGenerator"
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <ul>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              each={each}
              key={each.directionId}
              accessButton={this.accessButton}
            />
          ))}
        </ul>

        <p>Pick the Colors</p>
        <p>{colorOne}</p>
        <p>{colorTwo}</p>
        <br />
        <Input
          type="color"
          onChange={this.changedFirstColor}
          value={colorOne}
        />
        <Input
          type="color"
          onChange={this.changedSecondColor}
          value={colorTwo}
        />
        <br />
        <Button onClick={this.buttonClicked}>Generate</Button>
      </Container>
    )
  }
}

export default GradientGenerator
