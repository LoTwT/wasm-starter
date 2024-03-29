// @ts-check

import { defineFlatConfig } from "@ayingott/eslint-config"

export default defineFlatConfig(
  [
    {
      ignores: ["**/core/**"],
    },
  ],
  {
    prettier: true,
    vue: false,
    unocss: false,
    react: false,
  },
)
