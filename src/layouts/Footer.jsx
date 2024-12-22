const Footer = ({ socialMediaList }) => {
  return (
    <footer className="bg-color-1 p-4 text-color-4">
      <article>
        <section className="text-center">
          <p>Copyright © 2024 AkiraYago</p>
          <p>All rights reserved</p>
        </section>
        <section className="d-flex justify-content-center">
          {socialMediaList}
        </section>
      </article>
    </footer>
  );
};

export default Footer;