import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div className="row">
    {data.map(price => (
      <div key={price.head} className="row">
        <section className="section">
          <h3 className="has-text-weight-semibold">{price.head}</h3>
            {price.items.map(item => (
              <p key={item} className="is-size-5">
                {item}
              </p>
            ))}
        </section>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      head: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
