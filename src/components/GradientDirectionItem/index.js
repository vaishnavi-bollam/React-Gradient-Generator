// Write your code here
import {Buttons} from './styledComponents'

const GradientDirectionItem = props => {
  const {each, accessButton} = props

  const directionClicked = () => {
    console.log(each.value)
    accessButton(each.value)
  }

  return (
    <li>
      <Buttons onClick={directionClicked}>{each.displayText}</Buttons>
    </li>
  )
}

export default GradientDirectionItem
