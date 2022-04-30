type PropsType = {
  src: string;
  width: number;
};

export const imageLoader = (props: PropsType) => {
  const { src, width } = props;
  const relativeSrc = (targetSrc: string) =>
    targetSrc.split('/').pop();

  return `https://media.graphassets.com/resize=width:${width}/output=format:webp/${relativeSrc(
    src
  )}`;
};

export default imageLoader;
