import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Definition {
  readonly id: string;
  readonly key: string;
  readonly value: string;
  constructor(init: ModelInit<Definition>);
  static copyOf(source: Definition, mutator: (draft: MutableModel<Definition>) => MutableModel<Definition> | void): Definition;
}