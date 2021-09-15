import siteMeta from '@components/config';

const Footer = () => {
  const nowYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4">
      <p className="text-sm text-center">
        &copy;{nowYear} {siteMeta.title + '.'}
      </p>
    </footer>
  );
};

export default Footer;
