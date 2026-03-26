import { Code2, Brain, Trophy, Camera } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "MERN Stack",
    description:
      "Building full-stack web apps with React, Node.js, Express & MongoDB — from REST APIs to complex aggregation pipelines.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Leveraging Gemini API to power intelligent features like receipt parsing and semantic resume analysis.",
  },
  {
    icon: Trophy,
    title: "DSA",
    description:
      "Solved 750+ problems on LeetCode — 101 Hard, 464 Medium, 185 Easy — sharpening logic and problem-solving skills.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Member of NSUT's Photography Junoon Society — led the covering team for Convocation and Moksha cultural fest.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Full Stack
              <span className="font-serif italic font-normal text-white">
                {" "}
                Developer.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Vishal, a final-year Mathematics & Computing undergraduate
                at Netaji Subhas University of Technology (NSUT), Delhi. I
                specialize in full-stack development with the MERN stack and
                love integrating AI to solve real-world problems.
              </p>
              <p>
                I've built projects like MoneyLens — a smart financial tracker
                that uses Gemini API to extract transaction data from receipts —
                and an AI-powered resume screening platform that scores
                candidate-job fit using deep semantic analysis.
              </p>
              <p>
                Outside of web dev, I consistently practice DSA on LeetCode
                with 750+ problems solved. I'm also a member of NSUT's
                Photography Junoon Society, where I led the covering team for
                Convocation and the Moksha cultural festival.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I build applications that are not just functional — they're
                intelligent. Combining clean engineering with modern AI to
                create products people actually love using."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};