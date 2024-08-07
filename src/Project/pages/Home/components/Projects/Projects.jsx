import bloodDonorImg from '../../../../../assets/blood-donor-unity.png';
import assignmentImg from '../../../../../assets/assignment-genius.png';
import awesomeTouristImg from '../../../../../assets/awesome-tourist-spots.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section id='projects' className="my-16 lg:mx-32 md:mx-6 mx-3">
            <div>
                <h1 className="text-4xl font-semibold">My Projects</h1>
            </div>

            <div className="container px-0 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 ">
                    {projects.map((project, index) => (
                        <div key={index} className="overflow-hidden bg-cover rounded-lg h-96 group text-white"
                            style={{ backgroundImage: `url(${project.showImage})` }}>
                            <div
                                className="flex flex-col justify-center w-full h-full md:px-24 px-3 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">

                                <div className='lg:space-y-3 space-y-2'>
                                    <h2 className='md:text-2xl text-lg font-semibold'>{project.title}</h2>
                                    <p className='md:text-base text-sm'>{project.description}</p>
                                </div>

                                <div className='flex lg:gap-32 md:gap-12 gap-6 lg:mt-6 mt-3 md:text-base text-xs'>
                                    <div>
                                        <h4><strong>Technologies Used:</strong></h4>
                                        <ul className='list-disc ml-8 md:w-40 w-auto'>
                                            {
                                                project?.technologies?.map((technology, index) => (
                                                    <li key={index}>{technology}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                    <div>
                                        <h4><strong>Main Features:</strong></h4>
                                        <ul className='list-disc ml-8'>
                                            {project.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className='w-fit mx-auto flex md:gap-32 gap-12 lg:mt-0 mt-6'>
                                    <Link to={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                            <button className='btn btn-sm bg-[#02e71e] hover:bg-[#26b637] text-white font-bold'>Live Demo</button>
                                    </Link>
                                    
                                    <Link to={project.sourceCode} target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-sm bg-[#e80202] hover:bg-red-700 text-white font-bold">Source Code</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const projects = [
    {
        title: 'Blood Donor Unity',
        description: 'A platform designed to connect blood donors with those in need of blood, facilitating easier and quicker donations.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
        features: [
            'User authentication and profile management',
            'Real-time search for blood donors',
            'Interactive maps for locating nearby donors',
            'Notifications and alerts for urgent requests',
        ],
        showImage: `${bloodDonorImg}`,
        liveDemo: 'https://blood-donator-unity.web.app/',
        sourceCode: 'https://github.com/asif100a/Blood-Donor-Unity',
    },
    {
        title: 'Assignment Genius',
        description: 'Assignment Genius is a platform where users can interact with various assignments and they can submit their assignments.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwindcss', 'Firebase', 'React-lottie'],
        features: [
            'Responsive design',
            'Users can browse assignments without the need to log in.',
            'Users can take assignments after logging in or registering.',
            "Users can give marks on others' submitted assignments but can not mark their own submissions",
        ],
        showImage: `${assignmentImg}`,
        liveDemo: 'https://assignment-11-9bd1a.web.app/',
        sourceCode: 'https://github.com/asif100a/Assignment-genius',
    },
    {
        title: 'Awesome Tourist Spots',
        description: 'Awesome Tourist Spots is a user-friendly platform designed to help travelers discover and share remarkable tourist destinations worldwide.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'React-countup', 'React-simple-typewrite', 'Swiper'],
        features: [
            'Responsive design',
            'Users can add a tourist spot after signing in or registering',
            'Users can see the tourist spots they have created on the "My Lists" page.',
            'Users can find tourist spots by selecting a country name.',
        ],
        showImage: `${awesomeTouristImg}`,
        liveDemo: 'https://assignment-10-49aa1.web.app/',
        sourceCode: 'https://github.com/asif100a/Awesome-tourist-spots',
    },
];

export default Projects;