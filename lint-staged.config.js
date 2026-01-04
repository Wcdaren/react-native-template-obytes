// gluestack-ui 组件目录，由 CLI 自动生成，不需要检查
const IGNORED_PATTERNS = [/src\/components\/ui\//, /components\/ui\//];

const filterIgnoredFiles = (filenames) =>
  filenames.filter(
    (filename) => !IGNORED_PATTERNS.some((pattern) => pattern.test(filename))
  );

module.exports = {
  '**/*.{js,jsx,ts,tsx}': (filenames) => {
    const filtered = filterIgnoredFiles(filenames);
    if (filtered.length === 0) return [];
    return [
      `npx eslint --fix ${filtered
        .map((filename) => `"${filename}"`)
        .join(' ')}`,
    ];
  },
  '**/*.(md|json)': (filenames) => {
    const filtered = filterIgnoredFiles(filenames);
    if (filtered.length === 0) return [];
    return `npx prettier --write ${filtered
      .map((filename) => `"${filename}"`)
      .join(' ')}`;
  },
  'src/translations/*.(json)': (filenames) => [
    `npx eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  ],
};
