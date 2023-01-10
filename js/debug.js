let viewportWidth = window.innerWidth;
const win_nav_docObj = document.querySelector("#viewport-width");
win_nav_docObj.textContent = `${viewportWidth}`;
// const userAgent = window.navigator.userAgent;
const isMobileAgent = window.navigator.userAgentData.mobile;
const userAgent_docObj = document.querySelector("#user-agent");
userAgent_docObj.textContent =
  (isMobileAgent ? "Mobile" : "PC") + " agent"; /*`${userAgent}`;*/
const userLanguage = window.navigator.language;
const userLanguage_docObj = document.querySelector("#user-language");
userLanguage_docObj.textContent = userLanguage;