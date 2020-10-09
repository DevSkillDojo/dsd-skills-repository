import PropTypes from "prop-types"
import React from "react"

const NotificationBanner = (props) => {
 
  console.log("Show notification banner props: ", props)
  const { showNotificationBanner } = props;

  return (
    <div>
      {showNotificationBanner && <p>This is a placeholder message for the notification banner</p>}
    </div>
  )
}

NotificationBanner.propTypes = {
  showNotificationBanner: PropTypes.bool,
}

NotificationBanner.defaultProps = {
  showNotificationBanner: false,
}

export default NotificationBanner
