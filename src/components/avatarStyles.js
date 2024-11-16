export function avatarStyles(size) {
  const avatarStyles = {
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

  return avatarStyles;
}
