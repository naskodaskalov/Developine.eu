const projects = {
  getProjects: () => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: '1',
          url: 'http://obiavime.developine.eu',
          projectName: 'Obiavi.Me',
          progress: 'Finished',
          isLive: false,
          projectDescription: 'A project made during a course in Software University. Used technologies: HTML, PHP, MySQL Database',
          imageLink: `${require('../Images/obiavime.png')}`
        },
        {
          id: '2',
          url: 'http://ganyoexpress.developine.eu',
          projectName: 'GanyoExpress',
          progress: 'Finished',
          isLive: false,
          projectDescription: 'A project made during a course in Software University. Used technologies: ReactJS, Bootstrap, Kinvey Database',
          imageLink: `${require('../Images/ganyoexpress.png')}`
        },
        {
          id: '3',
          url: 'http://cataleatradingreports.herokuapp.com',
          projectName: 'Catalea Research Engine',
          progress: 'Under Construction',
          isLive: true,
          projectDescription: 'Catalea offers you the advantage of reading SEC filings online with easier-to-read text, faster navigation within a filing.',
          imageLink: `${require('../Images/catalea.png')}`
        },
        // {
        //   id: '4',
        //   url: 'http://msphotographer.developine.eu',
        //   projectName: 'Mario Shumanov Photographer',
        //   progress: 'Finished',
        //   projectDescription: 'Portfolio of photographer Mario Shumanov.',
        //   imageLink: `${require('../Images/mshp-logo.png')}`
        // },
        {
          id: '5',
          url: 'http://checkmylucktoday.developine.eu',
          projectName: 'Check my daily luck',
          progress: 'Finished',
          isLive: true,
          projectDescription: 'Do you want to know what is your daily luck? Find out here!',
          imageLink: `${require('../Images/fb-img.jpg')}`
        },
        {
          id: '6',
          url: 'http://mostvaluablecryptos.developine.eu',
          projectName: 'Most Valuable Cryptos',
          progress: 'Finished',
          isLive: false,
          projectDescription: 'A place to check the most valuable cryptos these days.',
          imageLink: `${require('../Images/mostvaluablecryptos.png')}`
        },
        {
          id: '7',
          url: 'http://electiconsulting.com',
          projectName: 'Electi Consulting',
          progress: 'Finished',
          isLive: true,
          projectDescription: 'Sliced and coded design. Tranformed for Joomla CMS.',
          imageLink: `${require('../Images/electi-consulting.png')}`
        },
        {
          id: '8',
          url: 'http://latestcryptostweets.developine.eu/',
          projectName: 'Latest Cryptos Tweets',
          progress: 'Under Construction',
          isLive: true,
          projectDescription: 'A place to check the lastest tweets from Bitcoin, Ethereum and Ripple. Also a search engine for other tweets.',
          imageLink: `${require('../Images/latestcryptostweets.png')}`
        },
        {
          id: '9',
          url: 'http://mrsantarun.developine.eu/',
          projectName: 'Mr Santa Run',
          progress: 'Finished',
          isLive: false,
          projectDescription: 'Made some design customizations on a game. Created Leaderboard connected to Firebase.',
          imageLink: `${require('../Images/mrsantarun.png')}`
        },
        {
          id: '10',
          url: 'http://highlightstowatch.com/',
          projectName: 'Highlights To Watch',
          progress: 'Finished',
          isLive: true,
          projectDescription: 'Web service to watch football highlights, match statistics, teams line-up, leagues fixtures and many more.',
          imageLink: `${require('../Images/meta-img.jpg')}`
        }
      ])
    })
  }
}

export default projects
