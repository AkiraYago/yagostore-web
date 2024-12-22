const SocialMedia = ({ icon, url }) => {
  return (
    <a href={url} className="me-2 p-1" style={{width: "60px"}}>
      <img src={icon} className="w-100" alt="Social Media Icon" />
    </a>
  );
};

export default SocialMedia;