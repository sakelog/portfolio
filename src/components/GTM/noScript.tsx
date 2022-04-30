const GTMNoScript = () => {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <noscript
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
};

export default GTMNoScript;
