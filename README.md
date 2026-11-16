# CSS Square Loader Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-square-loader-animation-2/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A standalone runnable recreation of the uploaded 40.17-second screen recording.

## Video structure

The video shows a black page titled **CSS Square Loader Animation**, with a blue outline around a vertically scrollable list. Each rounded dark card contains an orange animated loader on the left and a green CSS code panel on the right.

## Ten loader examples identified in the recording

1. **loader1** — orange outlined square, `rotateSquare`, 1s linear rotation.
2. **loader2** — solid orange square, `pulseSquare`, scale from `1` to `1.4`.
3. **loader3** — solid square with a 3D `rotateX` flip, `flipSquare`.
4. **loader4** — dark border with orange top border, `spin`.
5. **loader5** — 70×70 orange square, `bounce`, `.8s`.
6. **loader6** — orange outlined square expands to `scale(1.8)` and fades out.
7. **loader7** — orange square rotates and morphs to `border-radius: 25px`, `morphSquare`.
8. **grid-loader** — four small orange squares with staggered `gridPulse` delays.
9. **orbit-square** — orange square moves around a dashed circular track with `orbitRotate`.
10. **loader10** — orange square with `preserve-3d` and `rotateY` fold animation, `foldCube`.

The CSS values above follow the readable portions of the supplied recording. Where a line is clipped by the scrolling panel or blurred, the implementation completes the visible effect with standard CSS syntax. This is a runnable recreation, not a claim of byte-for-byte recovery of unseen source code.

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Scroll inside the blue-bordered list to see all ten loaders.
4. Hover over a preview to pause it.
5. Press its **Copy** button to copy that loader's CSS.

No packages, npm install, or build step required.

## Files

- `index.html` — all ten preview cards and code samples
- `style.css` — dark layout, orange loaders and keyframes
- `script.js` — copy-to-clipboard buttons
- `README.md` — this guide

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
