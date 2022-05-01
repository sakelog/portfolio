type PropTypes = JSX.IntrinsicElements['a'];

const ExternalLink = ({
  children,
  ...props
}: PropTypes) => (
  <a target="_blank" rel="noreferrer" {...props}>
    {children}
  </a>
);

export default ExternalLink;
