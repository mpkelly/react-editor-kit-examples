import * as React from "react";
import { render } from "react-dom";
import { SimpleEditor } from "./SimpleEditor";
import { KitchenSinkEditor } from "./KitchenSinkEditor";
import { PaperEditor } from "./paper/PaperEditor";

render(<PaperEditor />, document.getElementById("root"));
