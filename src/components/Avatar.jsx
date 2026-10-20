const Avatar = ({ name, index = 0, className = "" }) => (
  <div className={`avatar av-${index % 6} ${className}`} title={name}>
    {name[0].toUpperCase()}
  </div>
);

export default Avatar;
