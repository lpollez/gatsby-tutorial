import React from 'react'
import './section.css'

export default function section() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">Title</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">Hello</div>
          <div className="col-sm-4">Hello</div>
          <div className="col-sm-4">Hello</div>
        </div>
      </div>
    </section>
  )
}
