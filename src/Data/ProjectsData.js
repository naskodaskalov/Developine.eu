const projects = {
  getProjects: () => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: '1',
          url: 'http://msphotographer.developine.eu',
          projectName: 'Mario Shumanov Photographer',
          progress: 'Under Construction',
          projectDescription: 'Portfolio of photographer Mario Shumanov.',
          imageLink: `${require('../Images/mshp-logo.png')}`
        },
        {
          id: '2',
          url: 'http://cataleatradingreports.herokuapp.com',
          projectName: 'Catalea Research Engine',
          progress: 'Under Construction',
          projectDescription: 'Catalea offers you the advantage of reading SEC filings online with easier-to-read text, faster navigation within a filing.',
          imageLink: `${require('../Images/catalea.png')}`
        },
        {
          id: '3',
          url: 'http://obiavime.developine.eu',
          projectName: 'Obiavi.Me',
          progress: 'Finished',
          projectDescription: 'A project made during a course in Software University. Used technologies: HTML, PHP, MySQL Database',
          imageLink: `${require('../Images/obiavime.png')}`
        },
        {
          id: '4',
          url: 'http://ganyoexpress.developine.eu',
          projectName: 'GanyoExpress',
          progress: 'Finished',
          projectDescription: 'A project made during a course in Software University. Used technologies: ReactJS, Bootstrap, Kinvey Database',
          imageLink: `${require('../Images/ganyoexpress.png')}`
        }
      ])
    })
  }
}

export default projects
