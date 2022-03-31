import HeroHeader from '@components/heroheader';
import Footer from '@components/footer';

type PropsType = {
  children: React.ReactNode;
};

const Layout = (props: PropsType) => {
  return (
    <>
      <HeroHeader />
      <main className="container mx-auto px-4 xl:px-6 py-4">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
