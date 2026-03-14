const strudelReady = initStrudel();

const loadSamples = async () => {
  await strudelReady;
  await samples('github:tidalcycles/dirt-samples');
};

let bdMuted = false;
let melMuted = false;
let currentCps = 1;

const buildPatch = () => `
  setcps(${currentCps})
  stack(
    sound("808bd:6*16")
      .speed(saw.range(1,5).slow(1))
      .every(8, x=>x.hurry(2).gain(0.125).slow(2))
      .gain(${bdMuted ? 0 : 0.5}),
    // sound("[~ 808sd:2]!2")
    sound("[~ ~ ~ pebbles?]")
      .speed(0.5)
      .pan(sine)
      .gain(${bdMuted ? 0 : 0.125}),
    note("[c d?0.8 e?0.8 f?0.8 g?0.8 a?0.8 b?0.8 c4?0.8]*4")
      .add(-12)
      .sound('newnotes')
      .jux(rev)
      .room(0.25)
      .delay(0.25)
      .delayt(0.125)
      .gain(${melMuted ? 0 : 0.125})
  ).play()
  `;

const playPattern = async () => {
  await loadSamples();
  hush();
  const patch = buildPatch();
  window.evaluate?.(patch) ?? window.evalStrudel?.(patch) ?? (0, eval)(patch);
};

const toggleBd = () => {
  bdMuted = !bdMuted;
  return bdMuted;
};

const toggleMel = () => {
  melMuted = !melMuted;
  return melMuted;
};

const stopPattern = () => hush();

const setTempo = (cps) => {
  currentCps = cps;
  return playPattern();
};

window.strudelControls = {
  playPattern,
  stopPattern,
  toggleBd,
  toggleMel,
  setTempo,
};
