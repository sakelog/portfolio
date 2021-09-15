import Image from 'next/image';
import { imageLoader } from '@lib/graphCMS/imageLoader';
import { getFormattedDateYMJa } from '@lib/util/getFormatDate';

type PropsType = {
  qualifications: Profile.Qualification.Items;
};

const Qualification = (props: PropsType) => {
  return (
    <section>
      <h3 className="u__header--subTitle">保有資格</h3>
      <ul className="py-2 px-4">
        {props.qualifications?.map((qualification) => {
          const { badge } = qualification;
          return (
            <li
              key={qualification.id}
              className="py-2 md:grid md:grid-cols-4 md:gap-2 md:py-0"
            >
              <p className="text-sm text-gray-600 md:text-right md:pr-4">
                {qualification.yymm && (
                  <>
                    {getFormattedDateYMJa(
                      qualification.yymm
                    )}
                  </>
                )}
              </p>
              <section
                className="md:col-span-3 md:border-l md:border-dashed md:border-gray-400
                           md:pl-4 md:pb-2 md:relative"
              >
                <p className="font-bold">
                  {qualification.name}
                </p>
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
                <span
                  className="hidden md:block 
                             bg-theme absolute rounded-full"
                  style={{
                    width: 10,
                    height: 10,
                    top: 6,
                    left: -5,
                  }}
                />
              </section>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Qualification;
