export const ButtonVariantValues = [
  "primary",
  "secondary",
  "accent",
  "light",
  "dark",
  "success",
  "error",
] as const;
export type ButtonVariants = typeof ButtonVariantValues[number];
