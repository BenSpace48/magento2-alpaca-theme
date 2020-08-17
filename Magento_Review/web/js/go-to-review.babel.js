define([], function () {
  'use strict';

  return function (config, element) {
    const pageWasReloaded = getUrlFromLocalStorage() === window.location.search
    
    element.addEventListener('click', changeActiveTab);

    if (window.location.search.indexOf('?p=') >= 0 && !pageWasReloaded) {
      changeActiveTab();

      jumpToAnchor('review-form');

      setUrlToLocalStorage(window.location.search);      
    }
    
    function changeActiveTab() {
      const element = document.getElementById(config.reviewId);

      if (element) {
        const parentElement = findAncestor(element, 'tab__content');
        setActiveFormTab(parentElement, parentElement.dataset.content);
      }
    }

    function findAncestor(element, containClass) {
      while ((element = element.parentElement) && !element.classList.contains(containClass)) ;
      return element;
    }

    function setActiveFormTab(oneTab, searchingTab) {
      oneTab.parentElement.querySelectorAll('.tab__title, .tab__content').forEach(tab => {
        if (tab.dataset.content !== searchingTab && tab.dataset.tab !== searchingTab) {
          if (tab.classList.contains('tab__title--active')) {
            tab.classList.remove('tab__title--active');
          }

          if (tab.classList.contains('tab__content--active')) {
            tab.classList.remove('tab__content--active');
          }
        }
        else {
          if (tab.classList.contains('tab__title') && !tab.classList.contains('tab__title--active')) {
            tab.classList.add('tab__title--active');
          }

          if (tab.classList.contains('tab__content') && !tab.classList.contains('tab__content--active')) {
            tab.classList.add('tab__content--active');
          }
        }
      });
    }

    function getUrlFromLocalStorage() {
      return window.localStorage.getItem('oldSearchUrl');
    }

    function setUrlToLocalStorage(url) {
      window.localStorage.setItem('oldSearchUrl', url);
    }

    function jumpToAnchor(id) {
      window.location.href = "#"+id;
    }
  };
});
