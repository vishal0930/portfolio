import { Code2, Database, Globe, Layout, Server, Wrench } from "lucide-react";

const skillsData = {
  languages: {
    icon: Code2,
    title: "Languages",
    skills: ["C++", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
    color: "from-blue-500 to-cyan-500",
  },
  frontend: {
    icon: Layout,
    title: "Frontend",
    skills: ["React.js", "Vite", "Tailwind CSS", "Redux"],
    color: "from-purple-500 to-pink-500",
  },
  backend: {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    color: "from-green-500 to-emerald-500",
  },
  tools: {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git/GitHub", "Postman", "Render", "Cloudinary", "Resend", "Firebase"],
    color: "from-orange-500 to-red-500",
  },
  core: {
    icon: Database,
    title: "Core Concepts",
    skills: ["DSA", "OOPS", "DBMS", "Operating Systems", "Computer Networks"],
    color: "from-indigo-500 to-purple-500",
  },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills &{" "}
            <span className="font-serif italic font-normal text-white">
              Technologies.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-150">
            Technologies and tools I work with to build modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([key, category], idx) => {
            const Icon = category.icon;
            return (
              <div
                key={key}
                className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 bg-surface/50 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-surface transition-all duration-200 border border-primary/10 hover:border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Marquee */}
        <div className="mt-16">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Always learning & expanding my toolkit
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee gap-8">
              {[...skillsData.languages.skills, ...skillsData.frontend.skills, ...skillsData.backend.skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-4 py-2">
                  <span className="text-lg font-medium text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};