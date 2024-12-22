import Header from './Header';
import Footer from './Footer';
import SocialMedia from '../components/Footer/SocialMedia';
import social from '../utils/consts/social';

const DefaultLayout = ({ children }) => {
  const socialMediaList = social.map(socialMedia =>
    <SocialMedia key={`social-media-${socialMedia.id}`} icon={socialMedia.icon} url={socialMedia.url} />
  );

  return (
    <div className="bg-color-4 position-relative min-vh-100 d-flex flex-column justify-content-between">
      <div>
        <Header />
        <div className="container pt-5 pb-5">
          {children}
        </div>
      </div>
      <Footer socialMediaList={socialMediaList} />
    </div>
  );
};

export default DefaultLayout;