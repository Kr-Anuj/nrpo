import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Have a suitable job for me? <br className="sm:block hidden"/>Get it done now!</p>
        <Link to="/contact" className="btn">
            Contact Me
        </Link>
    </section>
  )
}

export default CTA