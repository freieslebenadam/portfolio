import React from 'react'

function Padder({debug, h}) {
    return (
        <div className={debug ? "debug-red" : ""} style={{height: h}}></div>
    )
}

Padder.defaultProps = {
    debug: false
}

export default Padder