import React, { Fragment } from 'react'
import CardBody from './CardBody'
import CardHeader from './CardHeader'
import CardHeaderWithoutIntro from './CardHeaderWithoutIntro'

export default function Card({ title, intro, content }) {
  return (
    <div className='rounded-md shadow bg-white'>
      {intro ? <CardHeader title={title} intro={intro} /> : <CardHeaderWithoutIntro title={title} />}
      <CardBody content={content} />
    </div>
  )
}
