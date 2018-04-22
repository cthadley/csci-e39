import React from 'react'
import PropTypes from 'prop-types'

class MessageCard extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="MessageCard component">
        <label>
          <span className="student-name">{this.props.student.name}</span>
          &nbsp;at&nbsp;
          <span className="created-at">{this.props.createdAt.getMonth()/this.props.createdAt.getDate()/this.props.createdAt.getFullYear() at this.props.createdAt.getHours():this.props.createdAt.getMinutes()}</span>
        </label>
        <p className="message-text">{this.props.text}</p>
      </div>
    )
  }
}

MessageCard.propTypes = {
  student: PropTypes.shape({
  	id: PropTypes.number.isRequired,
  	name: PropTypes.string.isRequired,
  }),
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
}

export default MessageCard
