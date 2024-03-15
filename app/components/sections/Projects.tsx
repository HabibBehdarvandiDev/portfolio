import { FcIdea } from "react-icons/fc";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" flex flex-col justify-center align-middle items-center w-full space-y-10 py-8"
    >
      <h4 className="uppercase text-md text-primary_light font-bold">
        Projects
      </h4>
      <FcIdea className="w-48 h-48" />
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-paragraph_light uppercase">
        Coming Soon
      </h1>
      <p className="text-lg text-center mb-12 px-5 text-paragraph_light">
        Have a project in mind? Let&rsquo;s bring it to life together!
        Don&rsquo;t hesitate to <b className="text-blue-500">Contact</b> me to
        discuss your ideas.
      </p>
    </section>
  );
};

export default Projects;
