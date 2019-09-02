import React, { Component } from 'react'
import certificatesData from '../Data/CertificatesData'
import { Image } from 'semantic-ui-react'
import './About.css'

export default class Certificates extends Component {
  constructor (props) {
    super(props)

    this.state = {
      certificates: []
    }
  }
  componentDidMount () {
    certificatesData
      .getCertificates()
      .then(certificates => this.setState({ certificates }))
  }
  render () {
    let certificates = this.state.certificates.sort((a, b) => b.id - a.id).map(certificate => (
      <Image
        spaced='4'
        className='current-certificate'
        href={certificate.url}
        key={certificate.id}
        src={certificate.imageLink}
        as='a'
        alt={certificate.certificateName}
        size='medium'
        bordered
        shape='rounded'
        target='_blank'
        label={{ as: 'a', color: 'olive', content: `${certificate.mark}`, icon: 'star', ribbon: true }}
      />
    ))
    return (
      <div className='wrapper'>
        <div className='about-heading'>
          <h2>
            Here you can check all my certificates, received during my IT Education in Software University, in Sofia, Bulgaria.
          </h2>
          <div className='certificates'>
            {certificates}
          </div>
        </div>
      </div>
    )
  }
}
