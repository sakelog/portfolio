type PropsType = {
  src: string;
  width: number;
};

export const imageLoader = (props: PropsType) => {
  const { src, width } = props;
  const relativeSrc = (src: string) => src.split('/').pop();

  return `https://media.graphassets.com/resize=width:${width}/output=format:webp/${relativeSrc(
    src
  )}`;
};
