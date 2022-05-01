import { HiStar } from 'react-icons/hi';

const StarIcon = ({
  on,
  keyphrase,
}: {
  on?: boolean;
  keyphrase: React.Key;
}) => (
  <HiStar
    className={on ? 'text-yellow-400' : 'text-white'}
    stroke="rgba(251, 191, 36)"
    strokeWidth={1}
    key={keyphrase}
    size="22"
  />
);
StarIcon.defaultProps = {
  on: true,
};

const StarIconCollection = ({
  times,
  keyphrase,
}: {
  times: number;
  keyphrase?: string;
}) => {
  const MAX_STAR = 5;
  const star: Array<React.ReactElement> = new Array(
    MAX_STAR - 1
  );
  for (let i = 0; i < times; i += 1) {
    star.push(
      <StarIcon
        keyphrase={`${
          keyphrase && `${keyphrase}-`
        }onstar-${i}-of-${times}`}
        on
      />
    );
  }
  for (let i = 0; i < MAX_STAR - times; i += 1) {
    star.push(
      <StarIcon
        keyphrase={`${
          keyphrase && `${keyphrase}-`
        }offstar-${i}-of-${times}`}
      />
    );
  }
  return <span className="col-span-2 flex">{star}</span>;
};

StarIconCollection.defaultProps = {
  keyphrase: 'default',
};

export default StarIconCollection;
