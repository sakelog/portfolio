import CustomHead from '../component/head';
import HeroHeader from '../component/heroheader/heroheader';
import ContactForm from '../component/contactform/contactform';

const Layout = (props) => {
  return (
    <>
      <CustomHead />
      <HeroHeader />
      <main className="l__container">
        {props.children}
        <ContactForm />
      </main>
    </>
  );
};

export default Layout;
