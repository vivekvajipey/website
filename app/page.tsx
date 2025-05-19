import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
// Import icons for social media
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const projects = [
    {
      title: "ExplainAI",
      description: "Have a conversation about what you're reading to understand it better",
      status: "active",
      url: "http://explainai.pro/"
    },
    {
      title: "CriticAL",
      description: "Automating model criticism with LLMs",
      status: "active",
      url: "https://arxiv.org/abs/2411.06590"
    },
    {
      title: "WorldDex",
      description: "A Pokédex for the real world",
      status: "completed",
      url: "https://devpost.com/software/worlddex-6diekg"
    },
  ]

  return (
    <div className={`min-h-screen bg-white px-6 py-16 md:px-16 lg:px-32 max-w-7xl mx-auto ${openSans.className}`}>
      <main className="space-y-12">
        {/* Header */}
        <h1 className="text-2xl font-medium">Vivek Vajipey</h1>

        <div className="w-1/2 aspect-[2/1] relative bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src="/enchant.jpg"
            alt="Enchantments"
            fill
            className="object-cover"
          />
        </div>

        {/* About Section */}
        <section className="space-y-6 max-w-2xl">
          <p className="text-gray-600 leading-relaxed">
            
          </p>
          <p className="text-gray-600 leading-relaxed">
            Studying Computer Science and Geophysics at Stanford University. 
          </p>
          <p className="text-gray-600 leading-relaxed">
            I love building with AI, and am fascinated by how machines and humans learn.
          </p>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium">Recent Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <a 
                    href={project.url}
                    className="font-medium hover:text-gray-800 hover:underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>{project.title}</h3>
                  </a>
                  {/* TODO: Add status indicator (colored circle) */}
                  {/* <div 
                    className={`w-2 h-2 rounded-full ${
                      project.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  /> */}
                </div>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium">Contact</h2>
          <div className="flex flex-col space-y-4">
            <p className="text-gray-600">
              <a href="mailto:vvajipey@stanford.edu" className="underline">
                vvajipey at stanford.edu
              </a>
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/vivek-vajipey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/vivekvajipey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://twitter.com/vivekvajipey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:vvajipey@stanford.edu" 
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-24 flex justify-between text-sm text-gray-500">
          <p>Based in Palo Alto</p>
          {/* <p>Building the future, one project at a time.</p> */}
        </footer>
      </main>
    </div>
  )
}
