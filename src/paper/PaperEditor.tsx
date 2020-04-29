/**
 Something like Dropbox Paper
**/

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
  StrikethroughPlugin,
  SelectionToolbar,
  TodoListPlugin,
  H3Plugin,
  OrderedListPlugin,
  UnorderedListPlugin,
  DividerPlugin,
  createStaticMentions,
  LinkPlugin,
  LinkButton,
  ReadOnlyButton,
  EditorToolbar,
  Divider,
  UnorderedListButton,
  OrderedListButton,
  HeadingToggleButton,
  QuoteButton,
  TableButton,
  VideoButton,
  TablePlugin,
  QuotePlugin,
  createConstrainsPlugin,
  createBreakoutPlugin,
  VideoPlugin,
  TextAlignLeftButton,
  TextAlignCenterButton,
  TextAlignRightButton,
  TextAlignPlugin,
  ImagePlugin,
  IconButton
} from "@mpkelly/react-editor-kit";
import { FixedTitlePlugin } from "./FixedTitlePlugin";
import { PaperStylePlugin } from "./PaperStylePlugin";
import { MentionsItems } from "../Mentions";
import { PaperConstraints } from "./PaperConstraints";
import { PaperEditorContent } from "./PaperEditorContent";

const plugins: Plugin[] = [
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  FixedTitlePlugin,
  TodoListPlugin,
  PaperStylePlugin,
  H3Plugin,
  OrderedListPlugin,
  UnorderedListPlugin,
  DividerPlugin,
  VideoPlugin,
  createStaticMentions({ mentions: MentionsItems }),
  LinkPlugin,
  TablePlugin,
  QuotePlugin,
  UnorderedListPlugin,
  OrderedListPlugin,
  createConstrainsPlugin(PaperConstraints),
  createBreakoutPlugin(),
  TextAlignPlugin,
  ImagePlugin
];

const initialValue = PaperEditorContent;

const wrapperStyle = {
  width: "100%",
  height: "100%"
};

export const PaperEditor = () => {
  const [value, setValue] = useState<Node[]>(initialValue);
  return (
    <EditorKit plugins={plugins}>
      <div className="paper-header">
        <div className="left">
          <IconButton className="material-icons-round" ligature="apps" />
        </div>
        <div className="right">
          <ReadOnlyButton
            className="material-icons-round"
            ligature="lock_open"
            readOnlyClassName="material-icons-round"
            readOnlyLigature="lock"
          />
          <div className="avatar">
            <img src="https://i.pravatar.cc/80?img=5" />
          </div>
        </div>
      </div>
      <div style={wrapperStyle}>
        <SelectionToolbar>
          <BoldButton className="uil uil-bold" />
          <ItalicButton className="uil uil-italic" />
          <UnderlineButton className="uil uil-underline" />
          <StrikethroughButton className="uil uil-text-strike-through" />
          <LinkButton className="uil uil-link-h" />
        </SelectionToolbar>

        <Editor
          value={value}
          onChange={value => {
            console.log(JSON.stringify(value));
            setValue(value);
          }}
          autoFocus
        />
        <div className="paper-footer">
          <EditorToolbar>
            <HeadingToggleButton
              className="material-icons-round"
              ligature="format_size"
              heading={"h3"}
            />
            <Divider />
            <TextAlignLeftButton
              className="material-icons-round"
              ligature="format_align_left"
            />
            <TextAlignCenterButton
              className="material-icons-round"
              ligature="format_align_center"
            />
            <TextAlignRightButton
              className="material-icons-round"
              ligature="format_align_right"
            />
            <Divider />
            <OrderedListButton
              className="material-icons-round"
              ligature="format_list_numbered"
            />
            <UnorderedListButton
              className="material-icons-round"
              ligature="format_list_bulleted"
            />
            <Divider />

            <QuoteButton
              className="material-icons-round"
              ligature="format_quote"
            />
            <Divider />
            <TableButton
              className="material-icons-round"
              ligature="border_all"
            />
            <VideoButton className="material-icons-round" ligature="videocam" />
          </EditorToolbar>
        </div>
      </div>
    </EditorKit>
  );
};
