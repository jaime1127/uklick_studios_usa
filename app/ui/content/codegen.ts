import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clwx6wl5n073z07te4z66dul9/master",
  documents: "app/ui/content/lib/**/*.ts",
  generates: {
    "app/ui/content/lib/generated/gql/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};
export default config;
