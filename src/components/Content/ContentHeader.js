import React from 'react'

const ContentHeader = ({children}) => (
  <section className="content-header">
    <h1>
      {children}
    </h1>

    <ol className="breadcrumb">
      <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
      <li className="active">Dashboard</li>
    </ol>
  </section>
)

export default ContentHeader