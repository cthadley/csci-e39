import React from 'react'
import PropTypes from 'prop-types'

class FlyoutMenu extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="FlyoutMenu component">
        <MiniLogo />

        <ul className="channels-list displayNone">
          {this.props.channels
            .map(channel => (
          <li>
            <ChannelEntry channel={channel} />
          </li>
            ))
          }
        </ul>

        <ul className="members-list">
          {this.props.members
            .map(member => (
          <li key={member.id}>
            <MemberEntry member={member} />
          </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export const memberPropType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

const channel = PropTypes.any

FlyoutMenu.propTypes = {
  members: PropTypes.arrayOf(memberPropType),
  channels: PropTypes.arrayOf(channel)
}

export default FlyoutMenu
