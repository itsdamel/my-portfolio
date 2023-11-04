let projects = [
    {
        name: 'Casa Verde',
        id: '0casa0',
        finished: true,
        description: 'An ecommerce 100% responsive built with REACT and Node',
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
        description: 'A simple page where you can look for any movies and bookmark them.',
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
        description: 'My first personal portfolio',
        stack: ['front-end', 'favorites'],
        stacks: ['REACT', 'NODE', 'CSS module', 'API REST'],
        preview: 'assets/myPortifolio-cover.png',
        live: '',
        repository: 'https://github.com/itsdamel/my-portfolio'
    },
    {
        name:'GameHub',
        id: '3gamehub3',
        finished: false,
        description: 'An online game shop where I worked and lead nine other developers',
        stack: ['front-end', 'favorites'],
        stacks:['REACT', 'CSS', 'Node', 'API REST', 'Git', 'Jira', 'Figma'],
        preview: 'assets/gameHub-cover.png',
        live: '',
        repository: ''
    }
]

const frontEnd = projects.filter((project) => project.stack.includes('front-end'))
    
const backEnd =  projects.filter((project) => project.stack.includes('back-end'))

const favorites = projects.filter((project) => project.stack.includes('favorites'))

const fullStack = projects.filter((project) => project.stack.includes('full-stack'))

export{projects, frontEnd, backEnd, favorites, fullStack}