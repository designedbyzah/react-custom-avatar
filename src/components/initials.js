function avatarInitials(name) {
  const userName = name
    .split(" ")
    .map((item) => item[0])
    .join("")
    .toUpperCase();
  return userName;
}

export default avatarInitials;
