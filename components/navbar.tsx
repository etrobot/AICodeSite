'use client'
import { ThemeToggle } from '@/components/theme-toggle';
import React, { useState } from 'react';
import Link from 'next/link';
import { TwitterLogoIcon, GitHubLogoIcon, HamburgerMenuIcon,Cross1Icon } from '@radix-ui/react-icons';

interface NavbarProps {
  categories?: { id: string; name: string }[];
  githubUrl?: string;
  twitterUrl?: string;
}

const Navbar: React.FC<NavbarProps> = ({ categories, githubUrl, twitterUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed bg-background top-0 flex items-center md:justify-between md:shrink-0  w-full p-2 bg-background bg-opacity-80">
      <div className="absolute top-2 right-2 "><ThemeToggle /></div>
      <button 
            onClick={toggleMenu}
            className="md:hidden absolute w-10 h-10 left-2 top-2"
          >
            {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </button>
    <nav>
      <div className="mx-auto p-2">
        <div className="flex justify-between items-center">
          <ul className={`
            md:flex md:space-x-4 md:items-center
            ${isOpen ? 'mt-4 p-4 space-y-2' : 'hidden'}
          `}>
            {githubUrl && (
              <li key="github">
                <a href={githubUrl} target='_blank' rel="noopener noreferrer">
                  <GitHubLogoIcon width={20} height={20}/>
                </a>
              </li>
            )}
            {twitterUrl && (
              <li key="x">
                <a href={twitterUrl} target='_blank' rel="noopener noreferrer">
                  <TwitterLogoIcon width={20} height={20}/>
                </a>
              </li>
            )}
            <li key="home">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
              <li key="blog">
                <Link href="/blog" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
              </li>
            {/* {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/blog/${encodeURIComponent(category.name)}`} onClick={() => setIsOpen(false)}>
                  {category.name}
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}

export default Navbar;