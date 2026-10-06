import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';

const require = createRequire(import.meta.url);
const matter = require('gray-matter');
const matterRequire = createRequire(require.resolve('gray-matter'));
const yamlPackagePath = matterRequire.resolve('js-yaml/package.json');
const yamlPackage = matterRequire('js-yaml/package.json');
const cli = join(dirname(yamlPackagePath), yamlPackage.bin['js-yaml']);

test('blog frontmatter parsing and serialization retain YAML values', () => {
  const input = '---\ntitle: Training plan\ntags:\n  - strength\n  - recovery\npublished: true\n---\nArticle body\n';
  const parsed = matter(input);
  assert.deepEqual(parsed.data, { title: 'Training plan', tags: ['strength', 'recovery'], published: true });
  assert.equal(parsed.content, 'Article body\n');
  assert.deepEqual(matter(matter.stringify(parsed.content, parsed.data)).data, parsed.data);
});

test('legacy YAML CLI retains help, version and parsing with argparse 2', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'saddie-yaml-'));
  try {
    const input = join(directory, 'sample.yml');
    await writeFile(input, 'title: Training plan\ntags: [strength, recovery]\n');
    const run = (args) => execFileSync(process.execPath, [cli, ...args], {
      encoding: 'utf8', timeout: 10000, stdio: ['ignore', 'pipe', 'pipe'],
    });
    assert.match(run(['--help']), /usage:/);
    assert.equal(run(['--version']).trim(), yamlPackage.version);
    assert.deepEqual(JSON.parse(run([input])), { title: 'Training plan', tags: ['strength', 'recovery'] });
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
