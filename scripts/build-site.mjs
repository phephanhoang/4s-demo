import { copyFile, mkdir, writeFile } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const decks = [
  { source: 'ai-for-work-02', route: '4s', images: [] },
  { source: 'ai-for-work-02-visual', route: '4s2', images: ['assets/workshop-photos.png'] },
];

for (const deck of decks) {
  const source = new URL(`../presentations/${deck.source}/`, import.meta.url);
  const output = new URL(`${deck.route}/`, dist);
  await mkdir(new URL('assets/', output), { recursive: true });
  for (const path of ['index.html', 'assets/motion.min.js', ...deck.images]) {
    await copyFile(new URL(path, source), new URL(path, output));
  }
}

await writeFile(new URL('_redirects', dist), '/ /4s/ 302\n');


// Workshop Demo 02: optional side-by-side slide skill comparison.
const slideDemo = new URL('../demos/skill-4s-slide/', import.meta.url);
for (const name of ['index.html', 'no-skill/index.html', 'with-skill/index.html']) {
  const destination = new URL(`slide-demo/${name}`, dist);
  await mkdir(new URL('.', destination), { recursive: true });
  await copyFile(new URL(name, slideDemo), destination);
}
