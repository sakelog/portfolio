const GTMNoScript = () => {
  const GTM_ID = process.env.GTM_ID;
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
};

export default GTMNoScript;
