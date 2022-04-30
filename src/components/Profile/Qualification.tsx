import Image from 'next/image';
import { imageLoader } from 'lib/graphCMS/imageLoader';
import { getFormattedDateYYYYMMJa } from 'lib/util/getFormatDate';

const Qualification = ({
  qualifications,
}: {
  qualifications: Profile.Qualification.Items;
}) => (
  <section className="p-4">
    <span className="c-badge c-badge--theme">保有資格</span>
    <ul className="py-2 px-4">
      {qualifications?.map((qualification) => {
        const { badge } = qualification;
        return (
          <li
            key={qualification.id}
            className="c-timeline__root"
          >
            <p className="c-timeline__date">
              {qualification.yymm && (
                <>
                  {getFormattedDateYYYYMMJa(
                    qualification.yymm
                  )}
                </>
              )}
            </p>
            <section className="c-timeline__item">
              <div className="md:grid md:grid-cols-2 md:max-w-screen-sm">
                <p className="font-bold">
                  {qualification.name}
                </p>
                {badge && (
                  <div className="hidden md:block text-center">
                    <Image
                      loader={imageLoader}
                      alt={badge.title}
                      src={badge.image.url}
                      height={badge.height}
                      width={badge.width}
                      layout="intrinsic"
                    />
                  </div>
                )}
              </div>
            </section>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Qualification;
