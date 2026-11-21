import { createMDX } from 'fumadocs-mdx/next';

export default createMDX()({
  output: 'export',
  outputFileTracingRoot: process.cwd(),
  trailingSlash: true,
  images: { unoptimized: true },
});
