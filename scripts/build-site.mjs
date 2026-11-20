import { copyFile, mkdir, writeFile } from 'node:fs/promises';

const source = new URL('../presentations/ai-for-work-02/', import.meta.url);
const output = new URL('../dist/4s/', import.meta.url);

await mkdir(new URL('assets/', output), { recursive: true });
for (const path of ['index.html', 'assets/motion.min.js']) {
  await copyFile(new URL(path, source), new URL(path, output));
}

await writeFile(new URL('../_redirects', output), '/ /4s/ 302\n');
