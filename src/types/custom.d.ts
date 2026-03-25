declare module "jsonwebtoken" {
  export function sign(payload: object, secret: string, options?: { expiresIn?: string }): string;
  export function verify(token: string, secret: string): unknown;
}

declare const process: {
  env: Record<string, string | undefined>;
};

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
