// ==UserScript==
// @name         Script name
// @namespace    URL
// @version      0.1
// @description  A brief summary to describe the script
// @author       Your name
// @license      GPL-3.0-or-later
// @include      /121^$/
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'
  GM_addStyle(
    'body { color: white; background-color: black } img { border: 0, background-color: white }'
  )
  GM_addStyle(
    'body { color: white; background-color: black } img { border: 0, background-color: white }'
  )
  GM_addStyle(`
    .emoji-barrage .full-screen[data-v-68506677] {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1001;
        overflow: hidden
    }`)
  //css-end
  alert()
  function test(a) {
    console.log(a)
  }
  test(
    '123\
    '
  )

  GM.setClipboard()
  GM.info

  GM.setClipboard()

  GM.setClipboard()
  GM.setClipboard()

  GM.info

  GM_xmlhttpRequest

  GM.xmlHttpRequest

  GM.xmlhttpRequest
})()
