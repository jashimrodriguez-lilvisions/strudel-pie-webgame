# strudel-pie

A proof-of-concept live coding music toy built on [Strudel](https://strudel.cc).

Four animated buttons bounce around the screen with physics simulation, triggering musical changes when clicked or when they collide with each other. A draggable tempo slider controls playback speed in real time.

## How it works

- **Play / Stop** buttons start and silence the music
- **Mute bd** toggles the bass drum layer on/off
- **Mute melodies** toggles the melodic layer on/off
- Buttons bounce off screen edges and each other — when a moving button collides with a mute button, that track toggles automatically
- The **tempo slider** adjusts cycles-per-second from 0.03 to 2 (default: 0.125); drag the tempo box anywhere on screen

## Running

No build step required. Open `index.html` in a modern browser, or serve locally:

```bash
python -m http.server 8000
```

Then navigate to `http://localhost:8000`.

Requires network access to load the Strudel library (`unpkg.com`) and audio samples (`github:tidalcycles/dirt-samples`).

## Console API

The `window.strudelControls` object is exposed for live coding from the browser console:

```js
window.strudelControls.setTempo(0.5)   // set tempo (cps)
```

## Dependencies

- [Strudel Web](https://strudel.cc) v1.3.0 (via unpkg CDN)
- [Tidal Cycles dirt-samples](https://github.com/tidalcycles/Dirt-Samples) (loaded automatically)

## License

MIT — Copyright 2026 Gabriel Vigliensoni