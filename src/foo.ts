import type { FooOptions } from "./options";

declare global {
  export namespace Cypress {
    export interface Chainable {
      foo(options?: FooOptions): void;
    }
  }
}
