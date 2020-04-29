/**
 *  NOTE: this example has a SelectionToolbar and a context menu which is probably
 *  not something you'd want to do in your own app as they clash.
 */

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
  StrikethroughButton,
  UnderlinePlugin,
  StrikethroughPlugin,
  LinkButton,
  InlineCodeButton,
  SuperscriptButton,
  OrderedListButton,
  UnorderedListButton,
  HeadingToggleButton,
  QuoteButton,
  TableButton,
  VideoButton,
  LinkPlugin,
  InlineCodePlugin,
  OrderedListPlugin,
  UnorderedListPlugin,
  QuotePlugin,
  H1Plugin,
  H2Plugin,
  H3Plugin,
  H4Plugin,
  H5Plugin,
  H6Plugin,
  SuperscriptPlugin,
  VideoPlugin,
  TablePlugin,
  CodeHighlighterPlugin,
  LabelsPlugin,
  HeadingSelect,
  FontSizeSelect,
  FontSelect,
  StylePlugin,
  Divider,
  TextAlignLeftButton,
  TextAlignRightButton,
  TextAlignCenterButton,
  TextAlignJustifiedButton,
  ColorPickerButton,
  HistoryPlugin,
  ClearFormattingButton,
  DividerPlugin,
  createBreakoutPlugin,
  ConstraintsPlugin,
  SelectionToolbarPlugin,
  SelectionToolbar,
  DefaultThemePlugin,
  EditorToolbar,
  EditorToolbarPlugin,
  createStaticMentions,
  TextAlignPlugin,
  SpellCheckButton,
  ReadOnlyButton,
  RulePlugin,
  ImagePlugin,
  InfoAlertPlugin,
  ErrorAlertPlugin,
  WarningAlertPlugin,
  createInitialLetterPlugin
} from "@mpkelly/react-editor-kit";
import { MentionsItems } from "./Mentions";
import { DarkThemePlugin } from "./DarkThemePlugin";
import { createEmoticonSuggestions } from "./EmoticonSuggestions";
import { InsertContextMenuPlugin } from "./InsertContextMenuPlugin";
import { FormatContextMenuPlugin } from "./FormatContextMenuPlugin";
import { KitchenSinkEditorContent } from "./KitchenSinkEditorContent";

// You will normally need at least one plugin like this below to override CSS
// Most colors can be set as variables.
// See https://github.com/mpkelly/react-editor-kit/blob/master/packages/editor-kit/src/features/theme/DefaultThemePlugin.ts
const AdditionalStyles: Plugin = {
  globalStyles: () => `
    :root {
      --action-color:#408CF4;
      --focus-color:#408CF4;
      --editor-ui-font:'Source Sans Pro', sans-serif;
    }

  `,
  editorStyles: () => `
    overflow-x:hidden;
    overflow-y:auto;
    font-size:18px;
    font-family: 'Source Sans Pro', sans-serif;
    blockquote {
      border-left-color: var(--action-color);
    }
    
    .rek-resizable {
      margin: 0 auto;
    }
  `
};

const plugins: Plugin[] = [
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  QuotePlugin,
  H1Plugin,
  H2Plugin,
  H3Plugin,
  H4Plugin,
  H5Plugin,
  H6Plugin,
  SuperscriptPlugin,
  OrderedListPlugin,
  UnorderedListPlugin,
  VideoPlugin,
  TablePlugin,
  CodeHighlighterPlugin,
  LabelsPlugin,
  createStaticMentions({
    mentions: MentionsItems
  }),
  StylePlugin,
  createBreakoutPlugin(),
  DividerPlugin,
  HistoryPlugin,
  ConstraintsPlugin,
  EditorToolbarPlugin,
  TextAlignPlugin,
  RulePlugin,
  ImagePlugin,
  InfoAlertPlugin,
  WarningAlertPlugin,
  InlineCodePlugin,
  LinkPlugin,
  SelectionToolbarPlugin,
  ErrorAlertPlugin,
  AdditionalStyles,
  DefaultThemePlugin,
  DarkThemePlugin,
  createEmoticonSuggestions(),
  //This plugin is a work in progress
  createInitialLetterPlugin(),
  InsertContextMenuPlugin,
  FormatContextMenuPlugin
];

const editorStyle = {
  width: "100%",
  height: "100%",
  padding: 16,
  overflow: "auto"
};

const wrapperStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%"
};

const editorWrapperStyle = {
  width: "100%",
  height: "100%",
  borderTop: "1px solid rgba(0,0,0,.1)",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  padding: 8
};

const CustomColors = [
  ["#F78DA7", "#CF2E2E", "#FC6901", "#FCB901", "#7BDCB5", "#28D084"],
  ["#8ED1FC", "#0993E3", "#9B51E0", "#FFFFFF", "#ABB8C3", "#2B2B3E"]
];

export const KitchenSinkEditor = () => {
  const [value, setValue] = useState<Node[]>(initialValue);
  return (
    <EditorKit plugins={plugins}>
      <div style={wrapperStyle}>
        <EditorToolbar>
          <HeadingSelect />
          <Divider />
          <FontSelect />
          <Divider />
          <FontSizeSelect />
          <Divider />
          <BoldButton className="material-icons-round" ligature="format_bold" />
          <ItalicButton
            className="material-icons-round"
            ligature="format_italic"
          />
          <LinkButton className="material-icons-round" ligature="link" />
          <StrikethroughButton
            className="material-icons-round"
            ligature="format_strikethrough"
          />
          <InlineCodeButton className="material-icons-round" ligature="code" />

          <SuperscriptButton
            className="material-icons-round"
            ligature="height"
          />
          <Divider />
          <ColorPickerButton
            className="material-icons-round"
            ligature="palette"
            colors={CustomColors}
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
          <TextAlignJustifiedButton
            className="material-icons-round"
            ligature="format_align_justify"
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
          <HeadingToggleButton
            className="material-icons-round"
            ligature="format_size"
          />
          <QuoteButton
            className="material-icons-round"
            ligature="format_quote"
          />
          <TableButton className="material-icons-round" ligature="border_all" />
          <VideoButton className="material-icons-round" ligature="videocam" />
          <Divider />
          <ClearFormattingButton
            className="material-icons-round"
            ligature="format_clear"
          />
          <SpellCheckButton
            className="material-icons-round"
            ligature="spellcheck"
          />
          <span
            className="rek-icon-button rek-icon rek-css-icon material-icons-round"
            onClick={printEditor}
          >
            print
          </span>
          <ReadOnlyButton
            className="material-icons-round"
            ligature="lock_open"
            readOnlyClassName="material-icons-round"
            readOnlyLigature="lock"
          />
        </EditorToolbar>
        {/* <SelectionToolbar>
          <BoldButton className="material-icons-round" ligature="format_bold" />
          <ItalicButton
            className="material-icons-round"
            ligature="format_italic"
          />
          <LinkButton className="material-icons-round" ligature="link" />
          <StrikethroughButton
            className="material-icons-round"
            ligature="format_strikethrough"
          />
        </SelectionToolbar> */}
        <div style={editorWrapperStyle} id="editor">
          <Editor
            value={value}
            onChange={value => {
              console.log(JSON.stringify(value));
              setValue(value);
            }}
            style={editorStyle}
            placeholder={"Try some markdown shortcuts or @mention someone"}
            autoFocus
          />
        </div>
      </div>
    </EditorKit>
  );
};

const printEditor = () => {
  // Not working yet
  // print({
  //   printable: "editor",
  //   type: "html",
  //   css: "public/print.css"
  // });
};

const initialValue = KitchenSinkEditorContent;
