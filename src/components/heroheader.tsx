import React from 'react';
import Image from 'next/image';

import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

import siteMeta from '@components/config';
import styles from '@styles/Layout/_l__heroheader.module.scss';

const HeroHeader = () => {
  return (
    <header className="bg-theme p-8 overflow-hidden">
      <main className={styles.mainWrapper}>
        <section className="p-4 relative">
          <h1 className="text-4xl md:text-7xl mb-4 font-logo">
            {siteMeta.title}
          </h1>
          <p className="text-sm text-gray-600">
            {siteMeta.description}
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-center bg-white">
            <Image
              src="/img/profile.png"
              alt={siteMeta.author + '_プロフィール画像'}
              width={200}
              height={200}
              layout="intrinsic"
              className="rounded-full"
            />
          </div>
          <ul className="py-4 px-4 md:py-0">
            <li>
              <a
                href={
                  'https://twitter.com/' +
                  siteMeta.social.twitter
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter: {'@' + siteMeta.social.twitter}
              </a>
            </li>
            <li>
              <a
                href={
                  'https://github.com/' +
                  siteMeta.social.github
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Github: {siteMeta.social.github}
              </a>
            </li>
          </ul>
          <span
            className="w-12 h-12 bg-theme-light rounded-full absolute top-2 right-2
                       flex items-center justify-center
                       lg:top-4 lg:right-6"
          >
            <HiOutlineChevronDoubleDown className="text-gray-600 text-xl animate-bounce" />
          </span>
        </section>
      </main>
      <nav className="py-4 font-medium md:flex">
        <a
          href="#profile"
          className="text-white my-2 mx-2 md:my-0 block"
        >
          Profile
        </a>
        <a
          href="#works"
          className="text-white my-2 mx-2 md:my-0 block"
        >
          Works
        </a>
        <a
          href="#contact"
          className="text-white my-2 mx-2 md:my-0 block"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default HeroHeader;
