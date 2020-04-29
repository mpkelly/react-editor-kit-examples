import * as React from "react";
import { Plugin } from "@mpkelly/react-editor-kit";
import { Editor, Node, Transforms } from "slate";
import { RenderElementProps, ReactEditor } from "slate-react";

export const FixedTitlePlugin: Plugin = {
  withPlugin: editor => {
    const { normalizeNode } = editor;
    editor.normalizeNode = node => {
      if (
        !editor.children.length ||
        editor.children[0].type !== "fixed-title"
      ) {
        Transforms.insertNodes(
          editor,
          {
            type: "fixed-title",
            children: [{ text: "" }]
          },
          { at: [0] }
        );
      }
      return normalizeNode(node);
    };
    return editor;
  },
  renderElement: (props: RenderElementProps) => {
    if (props.element.type === "fixed-title") {
      return <FixedTitle {...props} />;
    }
    return undefined;
  },
  onKeyDown: (event: React.KeyboardEvent, editor: ReactEditor) => {
    const node = findNode(editor, "fixed-title");
    if (!node) {
      return false;
    }
    return handleEnter(editor, event);
  },
  editorStyles: () => `  
    .fixed-title.empty:before {
      content: attr(placeholder);
      opacity:0.2;
      position:absolute;
      display: block; /* For Firefox */

    }
  `
};

const FixedTitle = (props: RenderElementProps) => {
  const { element, attributes, children } = props;
  const isEmpty = Node.string(element).length === 0;
  let className = "fixed-title";
  if (isEmpty) {
    className = className + " empty";
  }
  return (
    <h1 {...attributes} className={className} placeholder="Enter a title here">
      {children}
    </h1>
  );
};

export const findNode = (editor: Editor, type: string) => {
  const { selection } = editor;
  if (!selection) {
    return null;
  }
  const [match] = Editor.nodes(editor, {
    at: selection,
    match: n => n.type === type
  });
  return match;
};

// Don't allow the block to split (duplicated) on enter which is the default behaviour
export const handleEnter = (
  editor: ReactEditor,
  event: React.KeyboardEvent
) => {
  if (event.keyCode === 13) {
    Transforms.insertNodes(editor, {
      type: "paragraph",
      children: [{ text: "" }]
    });
    event.preventDefault();
    return true;
  }
  return false;
};
