// @ts-check
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
    }`
}
    
const gen = document.getElementById('gen'); 
if(gen != null) gen.onclick = () => {
    let output = '';
    document.querySelectorAll('input').forEach(value => {
        if(!value.checked) return;
        output += css[value.id.replace('-','')] + '\n';
    })
    console.log(output);
}