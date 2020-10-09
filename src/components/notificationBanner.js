import PropTypes from "prop-types"
import React from "react"
import { Row, Col } from "react-bootstrap"

const NotificationBanner = props => {
  console.log("Show notification banner props: ", props)
  const { showNotificationBanner } = props

  return (
    <>
      {showNotificationBanner && (
        <Row noGutters className="justify-content-center">
          <Col>
            <p>This is a placeholder message for the notification banner</p>
          </Col>
        </Row>
      )}
    </>
  )
}

NotificationBanner.propTypes = {
  showNotificationBanner: PropTypes.bool,
}

NotificationBanner.defaultProps = {
  showNotificationBanner: false,
}

export default NotificationBanner
