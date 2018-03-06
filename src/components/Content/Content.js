import React from 'react'
import ContentBody from './ContentBody'
import ContentHeader from './ContentHeader'

const Content = ({title,children}) => (
  <div className="content-wrapper">
    <ContentHeader>
      {title}
    </ContentHeader>
    <ContentBody>
      {children}
    </ContentBody>
  </div>
)

export default Content
