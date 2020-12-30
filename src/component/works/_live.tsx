import Image from 'next/image';

import styles from './Work.module.scss';

const Live: works.component_workslive.func = (props) => {
  const workslive_content: works.workslive_jsonContent = props.works.content;
  const workslive_list = workslive_content.workslive_list.map((item) => {
    return (
      <li key={item.url}>
        <a href={item.url}>{item.title}</a>
        <Image
          src={item.screenshot}
          alt={item.title + '_スクリーンショット'}
          width={640}
          height={480}
          layout="intrinsic"
          loading="lazy"
        />
        <span className={styles.description}>{item.description}</span>
      </li>
    );
  });
  return (
    <section className={styles.componentRoot}>
      <h3>公開中の製作物</h3>
      <ul className={styles.Work_list}>{workslive_list}</ul>
    </section>
  );
};

export default Live;
