// ==UserScript==
// @name         AutoTrimps-Zek - YAEK FORK
// @version      1.0-Zek - YAEK FORK
// @namespace    https://Yaek.github.io/AutoTrimps
// @updateURL    https://Yaek.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, Yaek
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *Yaek.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        GM_xmlhttpRequest 
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-Yaek';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://Yaek.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
