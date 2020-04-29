import { Plugin } from "@mpkelly/react-editor-kit";

export const DarkThemePlugin: Plugin = {
  globalStyles: () => `  
  
     #root {
      background-color: #151515
     }

    :root {
      --tooltip-background-color: var(--primary-text-color);
      --tooltip-text-color: #151515;
      --control-hover-color: rgba(255,255,255,.1);
      --content-background: #2f2f2f;
      --primary-text-color: rgba(255,255,255, .95);
      --secondary-text-color: rgba(255,255,255, .54);
      --gray-light-color:rgba(255,255,255,.2);
      --gray-light2-color:rgba(255,255,255,.1);
      --divider-color: var(--gray-light-color);
      --input-background-color:var(--gray-light2-color);
      --action-color: #ff8d00;
      --button-color: white;
      --danger-color: red;
      --focus-color: var(--action-color);
      --selection-color: #E3E3E3;
      --editor-ui-font:'Source Sans Pro', sans-serif;
    }

    [data-slate-editor=true] {
      border: 1px solid var(--divider-color);
      border-radius:3px;
    }

  .rek-icon.rek-css-icon  {
    color: var(--secondary-text-color);      
    border-radius: 3px;
    :hover{
      color: var(--primary-text-color);
      background-color:var(--action-color) !important;
    }      
  }
    
  .rek-icon-button.active {
    color: var(--primary-text-color)!important;
    background-color:var(--action-color) !important;
  }
  
  .rek-svg-icon path {
    fill:var(--secondary-text-color); 
  }
  
  .rek-editor-toolbar-wrapper {
    background-color: #151515;
  }

  .rek-floating-content .rek-editor-toolbar-wrapper {
    background-color:var(--content-background);
  }

  .rek-header-row .rek-tr:first-child {
    background-color: var(--gray-light2-color) !important;
  }

  .rek-header-column .rek-td:first-child {
    background-color: var(--gray-light2-color) !important;
  }


  .rek-suggestion-list li {
    color:var(--tooltip-text-color);
  }

  .rek-suggestion-list li.active,
  .rek-suggestion-list li:hover {
    background-color: rgba(0,0,0,.1) !important;
  }
  
  `
};
