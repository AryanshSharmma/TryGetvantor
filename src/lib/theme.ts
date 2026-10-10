export const THEME_STORAGE_KEY = "gv-theme";

export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t!=="light";var r=document.documentElement;r.classList.toggle("dark",d);r.classList.toggle("light",!d);}catch(e){document.documentElement.classList.add("dark");}})();`;
