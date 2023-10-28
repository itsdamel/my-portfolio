let projects = [
    {
        name: 'Casa Verde',
        id: 0,
        description: 'An ecommerce 100% responsive built with REACT and Node',
        stack: ['full-stack', 'front-end', 'back-end', 'favorites'],
        stacks: ['REACT', 'Node', 'ViteExpress', 'Styled components', 'API REST', 'HTTP Protocol'],
        preview: 'assets/ecasaverde.png'
    },
    {
        name:'Popular movies',
        id: 1,
        description: 'A simple page where you can look for any movies and bookmark them.',
        stack: ['front-end'],
        stacks:['HTML', 'CSS', 'Javascript', 'API REST', 'MCV'],
        preview: 'assets/popular-movies-cover.png'
    },
    {
        name: 'Portfolio',
        id: 2,
        description: 'My first personal portfolio',
        stack: ['front-end', 'favorites'],
        stacks: ['REACT', 'NODE', 'CSS module', 'API REST'],
        preview: 'assets/myPortifolio-cover.png'
    },
    {
        name:'GameHub',
        id: 3,
        description: 'An online game shop where I worked and lead nine other developers',
        stack: ['front-end', 'favorites'],
        stacks:['REACT', 'CSS', 'Node', 'API REST', 'Git', 'Jira', 'Figma'],
        preview: 'assets/gameHub-cover.png'
    }
]

const frontEnd = projects.filter((project)=> project.stack.includes('front-end'))
    
const backEnd =  projects.filter((project)=> project.stack.includes('back-end'))

const favorites = projects.filter((project) => project.stack.includes('favorites'))

const fullStack = projects.filter((project) => project.stack.includes('full-stack'))

export{frontEnd, backEnd, favorites, fullStack}