export interface DataContent {
  id: string,
  name: string,
  html_url: string,
  language: string,
  images: {
    first: string,
    second?: string,
    third?: string,
    fourth?: string,
  },
  live_url?: string,
}



export const PortfolioData: DataContent[] = [
  {
  id: 'dtMoney',
  name: 'DtMoney',
  html_url: 'https://github.com/Felipeact/dtMoney',
  language: 'Typescript, Html, React, Scss',
  images: {
      first: 'https://github.com/Felipeact/dtMoney/blob/main/.github/home.png?raw=true',
      second: 'https://github.com/Felipeact/dtMoney/blob/main/.github/Modal.png?raw=true'
      
    },
  },

  {
    id: 'dashboard',
    name: 'Dashboard Design',
    html_url: 'https://github.com/Felipeact/Dashboard',
    language: 'Typescript, Html, Next JS, Chakra UI',
    images: {
        first: 'https://github.com/Felipeact/Dashboard/raw/main/.github/signIn.png',
        second: 'https://github.com/Felipeact/Dashboard/blob/main/.github/dashboard.png?raw=true',
        third: 'https://github.com/Felipeact/Dashboard/raw/main/.github/createUser.png',
        fourth: 'https://github.com/Felipeact/Dashboard/raw/main/.github/userList.png'
      },
    live_url: 'https://fvdashboard.netlify.app/'
    },

    {
      id: 'letmeask',
      name: 'Letmeask',
      html_url: 'https://github.com/Felipeact/Letmeask',
      language: 'Typescript, React, Sass, Firebase',
      images: {
          first: 'https://github.com/Felipeact/Letmeask/raw/main/.github/login.png',
          second: 'https://github.com/Felipeact/Letmeask/raw/main/.github/createRoom.png',
          third: 'https://github.com/Felipeact/Letmeask/raw/main/.github/home.png',
          fourth: 'https://github.com/Felipeact/Letmeask/raw/main/.github/adminPage.png'
        },
      live_url: 'https://letmeask-web-2e04c.web.app/'
      },

      {
        id: 'newsapp',
        name: 'News App',
        html_url: 'https://github.com/Felipeact/News',
        language: 'Typescript, Next Js, Styled-Components, Fauna DB, Stripe, ',
        images: {
            first: 'https://github.com/Felipeact/News/raw/main/.github/home.png',
            second: 'https://github.com/Felipeact/News/raw/main/.github/posts.png',
            third: 'https://github.com/Felipeact/News/raw/main/.github/post.png',
          },
        live_url: 'https://newsworldapp.netlify.app/'
        },
]