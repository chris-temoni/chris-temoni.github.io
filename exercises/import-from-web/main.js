import { animate, stagger } from 'https://cdn.skypack.dev/motion'

animate(
  '.box',
  { x: 200 },
  {
    delay: stagger(0.1),
    duration: 0.5,
    easing: [0.22, 0.03, 0.26, 1],
  }
)
