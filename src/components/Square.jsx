import { PropTypes } from 'prop-types'

const Square = (props) => {

  return (
    <button className='square' onClick={props.onClickEvent}>
        {props.value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string,
  onClickEvent: PropTypes.func.isRequired
}

export default Square