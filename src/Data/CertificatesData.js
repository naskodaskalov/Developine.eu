const certificates = {
  getCertificates: () => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: '1',
          url: 'https://softuni.bg/certificates/details/9346/42b074c8',
          certificateName: 'Programming Basics',
          mark: '6.00',
          imageLink: `${require('../Images/certificates/programming-basics.jpg')}`
        },
        {
          id: '2',
          url: 'https://softuni.bg/certificates/details/13710/f49b226a',
          certificateName: 'Software Technologies',
          mark: '6.00',
          imageLink: `${require('../Images/certificates/software-technologies.jpg')}`
        },
        {
          id: '3',
          url: 'https://softuni.bg/certificates/details/16706/177fd4e3',
          certificateName: 'Javscript Fundamentals',
          mark: '5.14',
          imageLink: `${require('../Images/certificates/js-fundamentals.jpg')}`
        },
        {
          id: '4',
          url: 'https://softuni.bg/certificates/details/16172/62e6b729',
          certificateName: 'Javascript Advanced',
          mark: '5.74',
          imageLink: `${require('../Images/certificates/js-advanced.jpg')}`
        },
        {
          id: '5',
          url: 'https://softuni.bg/certificates/details/16637/8eb6f357',
          certificateName: 'Javascript Applications',
          mark: '6.00',
          imageLink: `${require('../Images/certificates/js-applications.jpg')}`
        },
        {
          id: '6',
          url: 'https://softuni.bg/certificates/details/17299/bae8cb62',
          certificateName: 'Databases Basics - MS SQL Server',
          mark: '5.09',
          imageLink: `${require('../Images/certificates/db-basics.jpg')}`
        },
        {
          id: '7',
          url: 'https://softuni.bg/certificates/details/18828/20b16959',
          certificateName: 'Databases Advanced - Entity Framework',
          mark: '5.86',
          imageLink: `${require('../Images/certificates/db-advanced-entity.jpg')}`
        },
        {
          id: '8',
          url: 'https://softuni.bg/certificates/details/24649/8dd672d4',
          certificateName: 'Web Fundamentals - HTML/CSS',
          mark: '6.00',
          imageLink: `${require('../Images/certificates/web-fundamentals.jpg')}`
        },
        {
        id: '9',
        url: 'https://softuni.bg/certificates/details/50408/bbe5d1c2',
        certificateName: 'Javascript for Frontend',
        mark: '5.76',
        imageLink: `${require('../Images/certificates/js-frontend.jpeg')}`
        }
      ])
    })
  }
}

export default certificates
