// ==UserScript==
// @name         Remove YouTube "Members Only" Videos
// @namespace    https://github.com/your-username/Youtube-Hide-Members-Locked-Content
// @version      1.0
// @description  Automatically removes YouTube videos marked as "Members only" from the homepage and search results.
// @author       Moritz Timpe
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const removeItems = () => {
    document.querySelectorAll('ytd-rich-item-renderer').forEach(item => {
      if (item.querySelector('.badge-style-type-members-only')) {
        item.remove();
      }
    });
  };

  // Initial cleanup
  removeItems();

  // Observe for dynamically loaded videos (e.g., infinite scroll)
  const observer = new MutationObserver(() => {
    removeItems();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
