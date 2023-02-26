const inCircle = (centerX, centerY, clientX, clientY, width) => {
  const distance = Math.sqrt(
    Math.pow(centerX - clientX, 2) + Math.pow(centerY - clientY, 2)
  );

  if (distance > width / 2) return false;
  return true;
};

export { inCircle };
