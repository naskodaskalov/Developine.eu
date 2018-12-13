const projects = {
  getProjects: () => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: '1',
          url: 'http://obiavime.developine.eu',
          projectName: 'Obiavi.Me',
          progress: 'Finished',
          projectDescription: 'A project made during a course in Software University. Used technologies: HTML, PHP, MySQL Database',
          imageLink: `${require('../Images/obiavime.png')}`
        },
        {
          id: '2',
          url: 'http://ganyoexpress.developine.eu',
          projectName: 'GanyoExpress',
          progress: 'Finished',
          projectDescription: 'A project made during a course in Software University. Used technologies: ReactJS, Bootstrap, Kinvey Database',
          imageLink: `${require('../Images/ganyoexpress.png')}`
        },
        {
          id: '3',
          url: 'http://cataleatradingreports.herokuapp.com',
          projectName: 'Catalea Research Engine',
          progress: 'Under Construction',
          projectDescription: 'Catalea offers you the advantage of reading SEC filings online with easier-to-read text, faster navigation within a filing.',
          imageLink: `${require('../Images/catalea.png')}`
        },
        {
          id: '4',
          url: 'http://msphotographer.developine.eu',
          projectName: 'Mario Shumanov Photographer',
          progress: 'Finished',
          projectDescription: 'Portfolio of photographer Mario Shumanov.',
          imageLink: `${require('../Images/mshp-logo.png')}`
        },
        {
          id: '5',
          url: 'http://checkmylucktoday.com',
          projectName: 'Check my daily luck',
          progress: 'Finished',
          projectDescription: 'Do you want to know what is your daily luck? Find out here!',
          imageLink: `${require('../Images/fb-img.jpg')}`
        },
        {
          id: '6',
          url: 'http://mostvaluablecryptos.developine.eu',
          projectName: 'Most Valuable Cryptos',
          progress: 'Finished',
          projectDescription: 'A place to check the most valuable cryptos these days.',
          imageLink: `${require('../Images/mostvaluablecryptos.png')}`
        },
        {
          id: '7',
          url: 'http://electiconsulting.com',
          projectName: 'Electi Consulting',
          progress: 'Finished',
          projectDescription: 'Sliced and coded design. Tranformed for Joomla CMS.',
          imageLink: `${require('../Images/electi-consulting.png')}`
        },
        {
          id: '8',
          url: 'http://latestcryptostweets.eu/',
          projectName: 'Latest Cryptos Tweets',
          progress: 'Under Construction',
          projectDescription: 'A place to check the lastest tweets from Bitcoin, Ethereum and Ripple. Also a search engine for other tweets.',
          imageLink: `${require('../Images/latestcryptostweets.png')}`
        },
        {
          id: '9',
          url: 'http://mrsantarun.developine.eu/',
          projectName: 'Mr Santa Run - Game customizations',
          progress: 'Finished',
          projectDescription: 'Made some design customizations on a game, developed by Construct 2. Added a Leaderboard connected with Firebase database.',
          imageLink: `${require('../Images/mrsantarun.png')}`
        }
      ])
    })
  }
}

export default projects
