// ==UserScript==
// @name         Discord Plume Chat Bot (Human Style)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Sends chill, human-like messages about Plume in Discord chats to make it look like a casual user chatting
// @author       Kyaa-A
// @match        https://discord.com/channels/*
// @updateURL    https://raw.githubusercontent.com/Kyaa-A/Discord-Auto-Chat/main/script.user.js
// @downloadURL  https://raw.githubusercontent.com/Kyaa-A/Discord-Auto-Chat/main/script.user.js
// @grant        none
// ==/UserScript==

(function(){
    'use strict';
  
    // Super casual, human-sounding messages
    const MESSAGES = [
      "yo plume’s actually kinda good lol",
      "idk if it’s just me but plume loads way faster than i expected",
      "been messin w/ plume for a bit now... feels way more raw than twitter",
      "bro how tf do u even backup nostr keys lol i’m scared i’ll lose mine",
      "lmao i just zapped someone on plume and felt like a baller",
      "real talk tho those encrypted DMs on plume r kinda fire 🔥",
      "is it just me or is the vibe on plume way less fake than other apps",
      "yo anyone here using npubs to follow ppl? still figuring that out",
      "plume needs dark mode fr... or did i miss it?",
      "wait yall actually read the plume docs?? respect 😂",
      "i tried connecting my lightning wallet on plume... took me like 3 tries lmao",
      "i be tryna understand relays on nostr like i get it... but also i dont 💀",
      "bruh plume got no ads?? why did no one tell me this earlier",
      "tbh i just post random stuff on plume and it somehow feels better than twitter",
      "not gonna lie i thought plume was some scam but it’s actually solid"
    ];
  
    const MIN_INTERVAL = 120_000; // 2 min
    const MAX_INTERVAL = 300_000; // 5 min
  
    function waitForBox(){
      return new Promise(res => {
        const id = setInterval(()=>{
          const box = document.querySelector('div[role="textbox"][contenteditable="true"]');
          if(box){ clearInterval(id); res(box); }
        }, 500);
      });
    }
  
    function pasteText(box, text){
      const dt = new DataTransfer();
      dt.setData('text/plain', text);
      const pasteEvt = new ClipboardEvent('paste', {
        clipboardData: dt,
        bubbles: true,
        cancelable: true
      });
      box.focus();
      box.dispatchEvent(pasteEvt);
    }
  
    function pressEnter(box){
      ['keydown','keyup'].forEach(type=>{
        const e = new KeyboardEvent(type, {
          bubbles: true, cancelable: true,
          key: 'Enter', code: 'Enter', keyCode: 13
        });
        box.dispatchEvent(e);
      });
    }
  
    async function sendChillMsg(){
      const box = await waitForBox();
      const msg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      pasteText(box, msg);
      setTimeout(()=> pressEnter(box), 60 + Math.random()*100); // random slight delay
      console.log("[plume-chat] sent:", msg);
  
      // Schedule next message randomly between min-max interval
      const nextDelay = MIN_INTERVAL + Math.random() * (MAX_INTERVAL - MIN_INTERVAL);
      setTimeout(sendChillMsg, nextDelay);
    }
  
    // Kick things off after page loads
    setTimeout(() => {
      sendChillMsg();
    }, 5000);
  })();
  