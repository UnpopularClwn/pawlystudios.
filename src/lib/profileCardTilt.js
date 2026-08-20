export function getProfileCardTilt(pointerX, pointerY) {
  return {
    rotateX: (0.5 - pointerY) * 4,
    rotateY: (pointerX - 0.5) * 4,
  }
}
