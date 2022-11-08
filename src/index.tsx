import React, { useEffect } from 'react'
import styles from './styles.module.css'

export interface Postit {
  wording: string
  color: string
}

interface BmcProps {
  lang?: 'fr' | 'en'
  width?: string
  height?: string
  postits: Array<Postit>
}

export const BusinessModelCanvas = (props: BmcProps) => {
  const { postits } = props

  useEffect(() => {
    console.log(postits)
  }, [postits])

  return (
    <div className={styles.container}>
      <div className={styles.bmc}>
        <div style={{ border: '1px solid red', margin: '2px' }}>
          <h3>Key Partners</h3>
        </div>
        <div style={{ border: '1px solid red', margin: '2px' }}>
          <h3>Key Activities</h3>
        </div>
        <div style={{ border: '1px solid red', margin: '2px' }}>
          <h3>Key Resources</h3>
        </div>
        <div style={{ border: '1px solid red', margin: '2px' }}>
          <h3>Value Proposition</h3>
        </div>
        <div style={{ border: '1px solid red', margin: '2px' }}>
          <h3>Customer Relationship</h3>
        </div>
        <div style={{ border: '1px solid red', margin: '2px' }}>
          <h3>Channels</h3>
        </div>
        <div style={{ border: '1px solid red', margin: '2px' }}>
          <h3>Customers Segments</h3>
        </div>
        <div style={{ border: '1px solid red', margin: '2px' }}>
          <h3>Cost Structure</h3>
          <div>
            <h3>hu</h3>
          </div>
        </div>
        <div style={{ border: '1px solid red', margin: '2px' }}>
          <h3>Revenue Streams</h3>
        </div>
      </div>
    </div>
  )
}
