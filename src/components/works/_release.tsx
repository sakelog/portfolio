import Image from 'next/image';
import { imageLoader } from '@lib/graphCMS/imageLoader';
import { isTypeSystemDefinitionNode } from 'graphql';

//import styles from './Work.module.scss';

type PropsType = {
  releases: Works.Release.Items;
};

const Live = (props: PropsType) => {
  return (
    <section>
      <h3 className="u__header--subTitle">公開中</h3>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {props.releases?.map((release) => (
          <li
            key={release.id}
            className="p-4 border-2 border-theme rounded"
          >
            <p>
              <a
                href={release.url}
                target="_blank"
                rel="noopener noreferer noreferrer"
              >
                {release.title}
              </a>
            </p>
            <a
              href={release.url}
              target="_blank"
              rel="noopener noreferer noreferrer"
            >
              <Image
                loader={imageLoader}
                src={
                  release.screenshot?.url ||
                  '/img/NoScreenShot.png'
                }
                alt={release.title + '_スクリーンショット'}
                width={640}
                height={480}
                layout="intrinsic"
              />
            </a>
            <p
              dangerouslySetInnerHTML={{
                __html: release.description,
              }}
              className="whitespace-pre-line text-sm"
            />
          </li>
        )) || null}
      </ul>
    </section>
  );
};

export default Live;
