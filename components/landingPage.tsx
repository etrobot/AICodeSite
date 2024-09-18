// components/LandingPage.tsx
import React from 'react';
import { EnvelopeClosedIcon, LightningBoltIcon, Share1Icon, GlobeIcon, TwitterLogoIcon, GitHubLogoIcon, UpdateIcon,DiscordLogoIcon } from '@radix-ui/react-icons';
import { NotionLogoIcon,MagicWandIcon,HeartIcon } from '@radix-ui/react-icons';


interface Testimonial {
  avatar: string;
  name: string;
  quote: string;
}

interface Logo {
  src: string;
  alt: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface LandingPageProps {
  testimonials: Testimonial[];
  logos: Logo[];
  faqs: FAQ[];
}

const LandingPage: React.FC<LandingPageProps> = ({ testimonials, logos, faqs }) => {
  return (
    <div>
      <div id="hero" className='my-20 py-10'>
        <div className="relative mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full max-w-6xl mb-8 md:mb-0 text-opacity-75 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Noteware
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                The Next Level Noting
              </h1>
              <p>Integrate the Power of Notion and Langgraph</p>
              <p className='my-8'>
                <a href='https://github.com/etrobot/noteware' className="bg-blue-500 text-white text-lg px-8 py-3 rounded-full">
                  Get Started
                </a>
              </p>
            </div>
            <div id='hero-image' className="md:w-1/2 ml-8 flex justify-center">
              <div className="w-full">
                <img src="https://picsum.photos/200" className="w-full h-auto max-h-96 object-cover" width={200} height={200} alt="Hero img" />
              </div>
            </div>
          </div>
        </div>
      </div>

{/* const features = [
  { icon: '<NotionLogoIcon>', title: 'Notion Empower', description: 'Leverage Notion's top-class note-taking editor to call AI agents for content management.' },
  { icon: 'mdi:robot', title: 'AI Agents', description: 'Multiple AI agents work in the background to streamline your workflow and supercharge your productivity.' },
  { icon: 'mdi:freebsd', title: 'Free AI Resources', description: 'Access all the features and benefits of free AI resource from famous platforms.' },
]; */}

      <div id="features" className="py-10 bg-gray-300 bg-opacity-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div id="features-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="text-center">
                <div className="rounded-lg p-6 mb-4 shadow-md bg-background ">
                  <div className="md:h-32 mb-4 flex items-center justify-center">
                    <NotionLogoIcon className="iconify text-6xl w-20 h-20" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Notion Empower</h3>
                  <p className="line-clamp-3">Leverage Notion\'s top-class note-taking editor to call AI agents for content management.</p>
                </div>
              </div>
              <div className="text-center">
                <div className="rounded-lg p-6 mb-4 shadow-md bg-background ">
                  <div className="md:h-32 mb-4 flex items-center justify-center">
                    <MagicWandIcon className="iconify text-6xl w-20 h-20" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Agents</h3>
                  <p className="line-clamp-3">Multiple AI agents work in the background to streamline your workflow and supercharge your productivity.</p>
                </div>
              </div>
              <div className="text-center">
                <div className="rounded-lg p-6 mb-4 shadow-md bg-background ">
                  <div className="md:h-32 mb-4 flex items-center justify-center">
                    <HeartIcon className="iconify text-6xl w-20 h-20" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Free AI Resources</h3>
                  <p className="line-clamp-3">Access all the features and benefits of free AI resource from famous platforms. Free is love.</p>
                </div>
              </div>

          </div>
        </div>
      </div>

      <div id="logo-cloud" className="py-12 bg-slate-200 bg-opacity-40 ">
        <div className="max-w-6xl flex flex-col mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={logo.src} alt={logo.alt} className="h-12"/>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="testimonials" className="py-10 bg-gray-300 bg-opacity-10">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg shadow-md p-4 bg-background ">
                <div className="w-8 h-8 mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="rounded-full w-full h-full object-cover" width={32} height={32} />
                </div>
                <p className="mb-2">{testimonial.quote} - {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="faq" className="py-10 bg-slate-500 bg-opacity-10">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div id="faq-list" className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-slate-900 py-12">
      <div className="container max-w-6xl mx-auto px-4">
			  <div className="flex justify-center space-x-8 mb-8">
          <a href="mailto:etrobot@outlook.com" className="text-white">
            <EnvelopeClosedIcon width={24} height={24}/>
          </a>
          <a href="https://x.com/etrobot" className="text-white">
            <TwitterLogoIcon width={24} height={24} />
          </a>
          <a href="https://github.com/etrobot" className="text-white">
            <GitHubLogoIcon width={24} height={24} />
          </a>
          <a href="https://discord.gg/JH67sZud" className="text-white">
            <DiscordLogoIcon width={24} height={24} />
          </a>
        </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Inspilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;