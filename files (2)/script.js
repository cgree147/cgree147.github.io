const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

/* Sub-tabs inside Projects */
const projectTabs = document.querySelectorAll(".cyber-tab");
const projectPages = document.querySelectorAll(".cyber-page");

projectTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    projectTabs.forEach(t => t.classList.remove("active"));
    projectPages.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.project).classList.add("active");
  });
});
