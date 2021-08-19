import{r as n,o as s,c as a,a as t,w as p,b as e,d as o}from"./404.md.45690ef1.js";const l='{"title":"Materials","description":"","frontmatter":{"title":"Materials"},"headers":[{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Syntax and Structure","slug":"syntax-and-structure"},{"level":2,"title":"Useful custom material presets","slug":"useful-custom-material-presets"}],"relativePath":"visuals/materials.md","lastUpdated":1629364459194}',r={},u=e("Expert"),c=t("h2",{id:"overview"},[t("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),e(" Overview")],-1),i=t("p",null,"Materials are used to specify the shaders that render the different parts of the game, along with states and settings the shaders should consider for each element. At the moment, most things in the game are hard-coded to use specific material and may not be assigned new ones. The only way to change how these elements are rendered is by editing their materials directly (potentially having unintentional effects on other parts) or creating new shaders (an old experimental feature no longer officially supported by Mojang). The only elements that allow default or custom materials to be assigned or removed are entities and particles.",-1),k=t("h2",{id:"syntax-and-structure"},[t("a",{class:"header-anchor",href:"#syntax-and-structure","aria-hidden":"true"},"#"),e(" Syntax and Structure")],-1),b=t("p",null,"Most materials inherit the settings of previously defined materials, then further building off of them. This is written in the following format:",-1),m=o('',3),q=o('',2),d=o('',2),_=o('',2),y=o('',2),h=o('',2),g=o('',3);r.render=function(e,o,l,r,f,v){const T=n("Label"),S=n("CodeHeader");return s(),a("div",null,[t(T,{color:"red"},{default:p((()=>[u])),_:1}),c,i,k,b,t(S),m,t(S),q,t(S),d,t(S),_,t(S),y,t(S),h,t(S),g])};export default r;export{l as __pageData};