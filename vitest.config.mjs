import { defineConfig } from 'vitest/config';
import MergifyReporter from '@mergifyio/vitest';

export default defineConfig({
  test: {
    include: ['tests/vm5-copy-proof.test.js'],
    reporters: ['default', new MergifyReporter()],
    testTimeout: 10000,
  },
});
