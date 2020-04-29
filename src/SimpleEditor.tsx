import * as React from "react";
import { useState } from "react";
import { Node } from "slate";
import {
  Editor,
  EditorKit,
  Plugin,
  BoldPlugin,
  ItalicPlugin,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  StrikethroughButton,
  UnderlinePlugin,
  StrikethroughPlugin
} from "@mpkelly/react-editor-kit";

const plugins: Plugin[] = [
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin
];

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }]
  }
];

const toolbarStyle = {
  display: "flex"
};

const editorStyle = {
  width: 300,
  height: 200,
  padding: 8,
  borderRadius: 3
};

const wrapperStyle = {
  border: "1px solid rgba(0,0,0,.1)",
  width: 300
};

export const SimpleEditor = () => {
  const [value, setValue] = useState<Node[]>(initialValue);
  return (
    <EditorKit plugins={plugins}>
      <div style={wrapperStyle}>
        <div style={toolbarStyle}>
          <BoldButton className="uil uil-bold" />
          <ItalicButton className="uil uil-italic" />
          <UnderlineButton className="uil uil-underline" />
          <StrikethroughButton className="uil uil-text-strike-through" />
        </div>
        <Editor
          value={value}
          onChange={setValue}
          style={editorStyle}
          placeholder={"Markdown shortcuts supported"}
          autoFocus
        />
      </div>
    </EditorKit>
  );
};
