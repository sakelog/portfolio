import React from 'react';
import Image from 'next/image';

// components
import siteMeta from 'components/config';
import ExteranalLink from 'components/ExternalLink';

// style
import { FaTwitter, FaGithubAlt } from 'react-icons/fa';

const WithIconList = (props: {
  children: React.ReactNode;
}) => {
  const { children } = props;
  const childrenArray = React.Children.toArray(children);
  return (
    <ul className="space-y-2">
      {childrenArray.map((child, index) => (
        <li
          key={`header-icon-list-${index}`}
          className="flex items-center gap-2 my-1"
        >
          {child}
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  return (
    <header className="relative bg-gray-400">
      <Image
        src="/img/bg-img.png"
        layout="fill"
        objectFit="cover"
        className="z-0"
        alt={`${siteMeta.title}_ヘッダー画像`}
      />
      <div className="overflow-hidden px-2 py-4 relative z-10">
        <div className="flex justify-center">
          <Image
            src="/img/profile.png"
            alt={`${siteMeta.author}_プロフィール画像`}
            width={200}
            height={200}
            layout="intrinsic"
            className="rounded-full bg-white"
          />
        </div>
        <div
          className="my-2 mx-auto p-2 
          bg-gray-light opacity-80 max-w-md"
        >
          <h1 className="text-4xl text-center">
            {siteMeta.title}
          </h1>
          <div className="pt-2 pb-4 px-4">
            <WithIconList>
              <>
                <FaTwitter size="18" />
                <ExteranalLink
                  href={
                    'https://twitter.com/' +
                    siteMeta.social.twitter
                  }
                >
                  Twitter: {'@' + siteMeta.social.twitter}
                </ExteranalLink>
              </>
              <>
                <FaGithubAlt size="18" />
                <ExteranalLink
                  href={
                    'https://github.com/' +
                    siteMeta.social.github
                  }
                >
                  GitHub: {siteMeta.social.github}
                </ExteranalLink>
              </>
            </WithIconList>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
