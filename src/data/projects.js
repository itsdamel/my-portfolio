let projects = [
    {
        name: 'Casa Verde',
        id: '0casa0',
        finished: true,
        description: 'A user-friendly design, responsive layout, a robust shopping cart feature and filters!',
        stack: ['full-stack', 'front-end', 'back-end', 'favorites'],
        stacks: ['REACT', 'Node', 'ViteExpress', 'Styled components', 'API REST', 'HTTP Protocol'],
        preview: 'assets/ecasaverde.png',
        live: 'https://willowy-sopapillas-7e536a.netlify.app/',
        repository: 'https://github.com/itsdamel/ecasaverde'
    },

    {
        name:'Popular movies',
        id: '1popular1',
        finished: true,
        description: 'Discover popular films, search and bookmark your must-watch films while storing your preferences in local storage.',
        stack: ['front-end'],
        stacks:['HTML', 'CSS', 'Javascript', 'API REST', 'MCV'],
        preview: 'assets/popular-movies-cover.png',
        live: 'https://itsdamel.github.io/popular-movies/',
        repository: 'https://github.com/itsdamel/popular-movies'
    },
    {
        name: 'BMELT',
        id: '2bmelt2',
        finished: false,
        description: "A dynamic music discovery page that introduces 'Jam Mode' – a unique feature integrated with the Spotify API.",
        stack: ['front-end', 'back-end', 'full-stack','favorites'],
        stacks: ['Vue', 'Context API', 'Node.js', 'Express','CSS'],
        preview: 'assets/bmelt-preview.png',
        live: '#',
        repository: '#'
    },
    {
        name: 'Portfolio',
        id: '3portfolio3',
        finished: true,
        description: "A window into the capabilities I bring to the table.",
        stack: ['front-end', 'favorites'],
        stacks: ['REACT', 'NODE', 'CSS module', 'API REST'],
        preview: 'assets/myPortifolio-cover.png',
        live: 'https://meldemelo-portfolio.vercel.app/',
        repository: 'https://github.com/itsdamel/my-portfolio'
    },
    {
        name: 'GameHub',
        id: '4gamehub4',
        finished: false,
        description: 'A digital game store being crafted with a team of nine developers through a lot of code reviews, pull requests, and weekly meetings.',
        stack: ['front-end', 'favorites'],
        stacks: ['REACT', 'Styled Components', 'Git', 'Json-server'],
        preview: 'assets/gameHub-preview.png',
        live: '#',
        repository: '#'
    },

  
]

const frontEnd = projects.filter((project) => project.stack.includes('front-end'))
    
const backEnd =  projects.filter((project) => project.stack.includes('back-end'))

const favorites = projects.filter((project) => project.stack.includes('favorites'))

const fullStack = projects.filter((project) => project.stack.includes('full-stack'))

export{projects, frontEnd, backEnd, favorites, fullStack}