import { Plugin } from "@mpkelly/react-editor-kit";

export const PaperStylePlugin: Plugin = {
  globalStyles: () => `  
  #root {
    background-color: #2b9284;
   }

  :root {
    --tooltip-background-color: var(--primary-text-color);
    --tooltip-text-color: #557ab1;
    --control-hover-color: rgba(255,255,255,.1);
    --content-background: #1e1e25;
    --primary-text-color: rgba(255,255,255, 0.95);
    --secondary-text-color: rgba(255,255,255, 0.54);
    --gray-light-color:rgba(255,255,255,.2);
    --gray-light2-color:rgba(255,255,255,.1);
    --divider-color: var(--gray-light-color);
    --input-background-color:var(--gray-light2-color);
    --action-color: #ecdd24;
    --button-color: var(--content-background);
    --danger-color: red;
    --focus-color: var(--action-color);
    --selection-color: #E3E3E3;
    --editor-ui-font:'Source Sans Pro', sans-serif;
  }

  .paper-header {
    position:absolute;
    display:flex;
    top:0;
    left:0;
    right:0;
    justify-content:space-between;

    .rek-icon-button {
      background-color:transparent !important;
      color:var(--primary-text-color);
      border-radius:50%;
      &:hover {
        background-color:var(--gray-light2-color);
      }
    }    

    .left {
      display:flex;
      padding:12px;
      
    }

    .right {
      display:flex;
      justify-content:flex-end;
      padding:12px;  
    }
  }

  .paper-footer {
    position:absolute;
    bottom:12px;
    left:0;
    right:0;
    display:flex;
    justify-content:center;
    .rek-editor-toolbar-overflow {
      display:none;
    }

    .rek-editor-toolbar {
      background-color: var(--content-background);
      color:var(--primary-text-color);
      display:flex;
      align-items:center;
      border-radius:3px;
    }
  }

  .rek-selection-toolbar {
    background-color:var(--content-background);
    border-radius:9999px;
    padding: 0 12px;
    span {
      color: var(--primary-text-color);
    }
  }

  .rek-svg-icon path {
    fill: var(--primary-text-color);
  }

  .rek-check-container .rek-checkmark:after{
    border-color: rgba(0,0,0,.9);
  }
  .rek-mention  {
    white-space: nowrap;
  }

  a:visited {
    color: var(--action-color);
  }

  .rek-mention {
    color: var(--action-color);
  }

  .avatar {
    height:36px;
    width:36px;    
    margin-left:16px;
    img {
      border-radius:50%;
      max-width:100%;
    }
  }

  `,
  editorStyles: () => `
    width:800px;
    margin: 0 auto;
    height: 100%;
    padding: 32px;
    overflow-y: auto;
    margin-bottom: 32px;

    .rek-header-row .rek-tr:first-child  {
      background-color: var(--gray-light2-color) !important;
    }

    .rek-header-column .rek-td:first-child  {
      background-color: var(--gray-light2-color) !important;
    }
    
    font-size:18px;
    height: calc(100vh - 80px);
    h1 {
      font-weight: 400;
      font-size: 48px;
    }
    
  `
};
