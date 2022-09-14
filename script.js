"use strict";

const css = {
    tabgaps: `tab.tabbrowser-tab {
    padding: 0 !important;
    }`,
    tabclose: `tab.tabbrowser-tab > stack:nth-child(1) > hbox:nth-child(2) > image:nth-child(3) {
        display: none;
    }`,
    alltabs: `#alltabs-button {
        display: none;
    }`,
    squaretabs: `tab.tabbrowser-tab > stack > vbox {
        margin: 0 !important;
        border-radius: 0 !important;
    }`,
    tabbar: `.tabbrowser-tab:not([visuallyselected="true"], [multiselected]) {
        outline: 1px solid #fff6 !important;
    }`,
    back: `#back-button {
        display: none;
    }`,
    forward: `#forward-button {
        display: none;
    }`,
    appmenu: `#PanelUI-menu-button {
        display: none;
    }`,
    reader: `#reader-mode-button {
        display: none;
    }`,
    bookmark: `#star-button-box {
        display: none;
    }`,
    ctxgap: `menupopup > menuitem {
        padding-left: 0 !important;
    }`,
    ctxsmall: `menupopup > menuitem {
	    padding-block: 0 !important;
	    margin: 0 !important;
    }`,
    ctxruler: `menupopup > menuseparator {
        margin: 0 !important;
    }`,
}
    
const gen = document.getElementById('gen');
if(gen != null && download != null) gen.onclick = () => {
    let output = '';
    document.querySelectorAll('input').forEach(value => {
        if(!value.checked) return;
        output += css[value.id.replace('-','')] + '\n';
    })
    download('userChrome.css',output);
}

function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;base64,' + btoa(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }