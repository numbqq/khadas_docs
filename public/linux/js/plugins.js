!function(){"use strict";var n=document.getElementsByClassName("plugin"),t=document.getElementById("plugin-list-count"),e=document.getElementById("plugin-search-input"),i=n.length,o=lunr.Index.load(window.SEARCH_INDEX);function s(n){t.innerHTML=n+(1===n?" item":" items")}function u(n,t){var e=n.classList;e.contains(t)||e.add(t)}e.addEventListener("input",(function(){var t=this.value;if(!t)return function(){for(var t=0;t<i;t++)u(n[t],"on");s(n.length)}();!function(t){var e,r,a,c=o.search("*"+t+"* "+t),l=c.length,d={},f=0;for(f=0;f<l;f++)d[c[f].ref]=!0;for(f=0;f<i;f++)d[f]?u(n[f],"on"):(e=n[f],r="on",a=void 0,(a=e.classList).contains(r)&&a.remove(r));s(l)}(t)}))}();