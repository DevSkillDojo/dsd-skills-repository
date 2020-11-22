import React from "react"

export const Figure = props => {
  return (
    <figure class="chart">
      <img src={props.path} alt={props.alt} />
      <figcaption>{props.caption}</figcaption>
    </figure>
  )
}
