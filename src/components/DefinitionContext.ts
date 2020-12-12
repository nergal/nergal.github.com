import React from "react";
import { Definition } from "../models";

const DefinitionContext = React.createContext<Definition[]>([]);

export default DefinitionContext;
