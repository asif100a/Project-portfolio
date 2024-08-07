import skill_1 from "../../../../../assets/skill-1.jpg";
import skill_2 from "../../../../../assets/skill-2.jpeg";
import skill_3 from "../../../../../assets/skill-3.jpeg";

const Skills = () => {
    return (
        <section id="skills" className="my-16 lg:mx-32 md:mx-6 mx-3">
            <div>
                <h1 className="text-4xl font-semibold">My Skills</h1>
            </div>

            <div className="lg:mt-16 mt-6 space-y-6">
                <div className="flex flex-col-reverse sm:flex-row gap-3 lg:gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold">Front-End Development</h2>
                        <ul className="mt-4 list-circle ml-12">
                            <li><span className="font-bold">HTML5 & CSS3:</span> Expertise in building responsive, accessible, and well-structured web pages.</li>
                            <li><span className="font-bold">JavaScript (ES6+):</span> Proficient in modern JavaScript features and best practices.</li>
                            <li><span className="font-bold">React:</span> Skilled in developing dynamic single-page applications using React, including Hooks, Context API, and state management etc.</li>
                            <li><span className="font-bold">Responsive Design:</span> Strong ability to create responsive layouts using CSS Flexbox, Grid, and media queries.</li>
                        </ul>
                    </div>

                    <div>
                        <img src={skill_1} alt="Skill photo 1" className="w-full md:w-[520px] lg:w-[420px] h-[272px]" />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:gap-12">
                    <div>
                        <img src={skill_2} alt="Skill photo 2" className="w-full md:w-[520px] lg:w-[420px] h-[272px]" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold">UI/UX Design</h2>
                        <ul className="mt-4 list-circle ml-12">
                            <li><span className="font-bold">User-Centric Design:</span> Focus on creating intuitive and user-friendly interfaces.</li>
                            <li><span className="font-bold">Wireframing & Prototyping:</span> Experience with tools like Figma and Adobe XD for designing and prototyping user interfaces.</li>
                            <li><span className="font-bold">Accessibility:</span> Knowledge of web accessibility standards and practices to ensure inclusive user experiences.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row gap-3 lg:gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold">Tools & Technologies</h2>
                        <ul className="mt-4 list-circle ml-12">
                            <li><span className="font-bold">Version Control:</span> Proficient in Git and GitHub for version control and collaborative development.</li>
                            <li><span className="font-bold">Build Tools:</span> Experience with Webpack, Babel, and npm/Yarn for optimizing and managing project dependencies.</li>
                            <li><span className="font-bold">Testing:</span> Familiarity with testing frameworks like Jest and React Testing Library for ensuring code quality and reliability.</li>
                            <li><span className="font-bold">RESTful APIs:</span> Ability to integrate and interact with RESTful APIs to fetch and manipulate data.</li>
                        </ul>
                    </div>

                    <div>
                        <img src={skill_3} alt="Skill photo 3" className="w-full md:w-[520px] lg:w-[420px] h-[272px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;