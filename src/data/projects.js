let projects = [
    {
        name: 'Casa Verde',
        id: '0casa0',
        finished: true,
        description: 'A user-friendly design, responsive layout, a robust shopping cart feature and filters!',
        stack: ['full-stack', 'front-end', 'back-end', 'favorites'],
        stacks: ['REACT', 'Node', 'ViteExpress', 'Styled components', 'API REST', 'HTTP Protocol'],
        preview: 'assets/ecasaverde.png',
        live: 'https://startling-torte-474d73.netlify.app',
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
        name: 'Portfolio',
        id: '2portfolio2',
        finished: true,
        description: "A window into the capabilities I bring to the table.",
        stack: ['front-end', 'favorites'],
        stacks: ['REACT', 'NODE', 'CSS module', 'API REST'],
        preview: 'assets/myPortifolio-cover.png',
        live: '',
        repository: 'https://github.com/itsdamel/my-portfolio'
    }
  
]

const frontEnd = projects.filter((project) => project.stack.includes('front-end'))
    
const backEnd =  projects.filter((project) => project.stack.includes('back-end'))

const favorites = projects.filter((project) => project.stack.includes('favorites'))

const fullStack = projects.filter((project) => project.stack.includes('full-stack'))

export{projects, frontEnd, backEnd, favorites, fullStack}