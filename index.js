
setInterval(rotate, 10)

function rotate() {
  const deg = 'deg'
  let currentDeg = Number(getComputedStyle(document.body).getPropertyValue(`--deg`).slice(0, -3))
  currentDeg = (currentDeg + 1) % 360
  document.documentElement.style.setProperty(`--deg`, currentDeg + deg)
}
