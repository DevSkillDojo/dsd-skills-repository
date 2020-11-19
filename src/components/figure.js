import React from "react"

export const Figure = props => {
  return (
    <figure class="chart">
      <object data={props.data} type="image/svg+xml"></object>
      <figcaption>{props.caption}</figcaption>
    </figure>
  )
}
