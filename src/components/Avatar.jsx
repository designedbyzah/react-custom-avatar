import PropType from "prop-types";
import avatarInitials from "./initials.js";

function Avatar({ name, size = 200 }) {
  const initials = avatarInitials(name);
  const styleAvatar = {
    margin: "4rem auto",
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: "bisque",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: `${size / 4}px`,
  };

  //   let font2 = avatarSize(size);
  //   console.log(font2);

  let font = styleAvatar.fontSize;
  console.log(font);

  return (
    <div className="avatar-container" style={styleAvatar}>
      <h1>{initials}</h1>
    </div>
  );
}

export default Avatar;
Avatar.propTypes = {
  name: PropType.string.isRequired,
  size: PropType.number.isRequired,
};
