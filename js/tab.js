const tabs = document.getElementsByClassName('js-tab-item');
const tabsContentItems = document.getElementsByClassName('js-content-item');
// Days tabs
const tabMonday = document.getElementById('js-tab-monday');
const tabTuesday = document.getElementById('js-tab-tuesday');
const tabWednesday = document.getElementById('js-tab-wednesday');
const tabThursday = document.getElementById('js-tab-thursday');
const tabFriday = document.getElementById('js-tab-friday');
const tabSaturday = document.getElementById('js-tab-saturday');
const tabSunday = document.getElementById('js-tab-sunday');
// Content
const tabContentMonday = document.getElementById('js-content-monday');
const tabContentTuesday = document.getElementById('js-content-tuesday');
const tabContentWednesday = document.getElementById('js-content-wednesday');
const tabContentThursday = document.getElementById('js-content-thursday');
const tabContentFriday = document.getElementById('js-content-friday');
const tabContentSaturday = document.getElementById('js-content-saturday');
const tabContentSunday = document.getElementById('js-content-sunday');

const changeTab = (id, contentId) => {
  for (const tab of tabs) {
    tab.classList.remove('active');
  }
  for (const tabContentItem of tabsContentItems) {
    tabContentItem.style.display = 'none';
  }

  document.getElementById(id).classList.add('active');
  document.getElementById(contentId).style.display = 'block';
};

tabMonday.addEventListener('click', () =>
  changeTab('js-tab-monday', 'js-content-monday')
);
tabTuesday.addEventListener('click', () =>
  changeTab('js-tab-tuesday', 'js-content-tuesday')
);
tabWednesday.addEventListener('click', () =>
  changeTab('js-tab-wednesday', 'js-content-wednesday')
);
tabThursday.addEventListener('click', () =>
  changeTab('js-tab-thursday', 'js-content-thursday')
);
tabFriday.addEventListener('click', () =>
  changeTab('js-tab-friday', 'js-content-friday')
);
tabSaturday.addEventListener('click', () =>
  changeTab('js-tab-saturday', 'js-content-saturday')
);
tabSunday.addEventListener('click', () =>
  changeTab('js-tab-sunday', 'js-content-sunday')
);

export { changeTab };