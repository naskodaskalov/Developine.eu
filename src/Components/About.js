import React, {Component} from 'react'
import certificatesData from '../Data/CertificatesData'
import { Image, Rating } from 'semantic-ui-react'
import './About.css'

class About extends Component {
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
    let certificates = this.state.certificates.map(certificate => (
      <Image
        spaced='4'
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
      // <div className='card'>
      //   <div className='view overlay hm-white-slight'>
      //     <a href={certificate.url} target='_blank'>
      //       <img className='img-fluid' src={certificate.imageLink} alt={certificate.certificateName} />
      //     </a>
      //   </div>
      //   <div className='card-body'>
      //     <h4 className='card-title'>{certificate.certificateName}</h4>
      //     <h3 className='certificate-mark'>{certificate.mark}</h3>
      //     <Rating maxRating={6} defaultRating={certificate.mark} icon='star' size='mini' disabled />
      //   </div>
      // </div>
    ))
    return (
      <div className='wrapper'>
        <div className='about-heading'>
          <h2>
            Here you can check all my certificates, received during my IT Education in Software University, in Sofia, Bulgaria.
          </h2>
          <div className='row'>
            {certificates}
          </div>
        </div>
      </div>
    )
  }
}

export default About
