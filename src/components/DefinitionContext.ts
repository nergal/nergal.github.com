import React from "react";

type Definition = Record<'key' | 'value', string>;
const DefinitionContext = React.createContext<Definition[]>([]);

export default DefinitionContext;
