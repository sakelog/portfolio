import Image from 'next/image';
import { imageLoader } from '@lib/graphCMS/imageLoader';
import { getFormattedDateYMJa } from '@lib/util/getFormatDate';

type PropsType = {
  qualifications: Qualification.Qualifications;
};

const Qualification = (props: PropsType) => {
  return (
    <section>
      <h3 className="u__header--subTitle">保有資格</h3>
      <ul className="py-2 px-4 space-y-4">
        {props.qualifications?.map((qualification) => {
          const { badge } = qualification;
          return (
            <li
              key={qualification.id}
              className="grid grid-cols-1 md:grid-cols-3 p-2"
            >
              <span className="font-bold">{qualification.name}</span>
              <span className="text-sm text-gray-600">
                {qualification.yymm && (
                  <>取得年月：{getFormattedDateYMJa(qualification.yymm)}</>
                )}
              </span>
              <div>
                {badge && (
                  <Image
                    loader={imageLoader}
                    alt={badge.title}
                    src={badge.image.url}
                    height={badge.height}
                    width={badge.width}
                    layout="intrinsic"
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Qualification;
