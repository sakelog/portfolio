import { HiStar } from 'react-icons/hi';

const StarIcon = ({ on }: { on?: boolean }) => (
  <HiStar
    className={on ? 'text-yellow-400' : 'text-white'}
    stroke="rgba(251, 191, 36)"
    strokeWidth={1}
    size="22"
  />
);
StarIcon.defaultProps = {
  on: false,
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
    const onKeyPhrase = `${keyphrase}-onstar-${
      i + 1
    }-of-${times}`;
    star.push(<StarIcon key={onKeyPhrase} on />);
  }
  for (let i = 0; i < MAX_STAR - times; i += 1) {
    const offKeyPhrase = `${keyphrase}-offstar-${
      i + 1
    }-of-${MAX_STAR - times}`;
    star.push(<StarIcon key={offKeyPhrase} />);
  }
  return <span className="col-span-2 flex">{star}</span>;
};

StarIconCollection.defaultProps = {
  keyphrase: 'default',
};

export default StarIconCollection;
