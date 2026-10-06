import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const matterRequire = createRequire(require.resolve('gray-matter'));
const yamlRequire = createRequire(matterRequire.resolve('js-yaml'));
assert.equal(yamlRequire('argparse/package.json').version, '2.0.1');
const path = yamlRequire.resolve('argparse');
const prefix = "action: 'version',\n                    default: SUPPRESS,\n                    ";
const original = prefix + 'version: this.version,\n                    help: "show program\'s version number and exit"';
const replacement = prefix + 'version,\n                    help: "show program\'s version number and exit"';
const source = readFileSync(path, 'utf8');
if (source.includes(original)) {
  assert.equal(source.split(original).length, 2, 'Argparse compatibility patch needs review');
  writeFileSync(path, source.replace(original, replacement));
} else {
  assert.ok(source.includes(replacement), 'Argparse compatibility patch needs review');
}
