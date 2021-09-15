type PropsType = {
  src: string;
  width: number;
};

export const imageLoader = (props: PropsType) => {
  const { src, width } = props;
  const relativeSrc = (src: string) => src.split('/').pop();

  return `https://media.graphcms.com/resize=width:${width}/output=format:webp/${relativeSrc(
    src
  )}`;
};
