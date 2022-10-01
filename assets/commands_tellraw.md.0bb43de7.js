import{_ as p,c as l,a as n,w as e,e as t,b as s,r,o as c,d as o}from"./404.md.40bc6a6e.js";var u="/assets/images/documentation/tellrawshow.png";const E='{"title":"Tellraw","description":"","frontmatter":{"title":"Tellraw","category":"General"},"headers":[{"level":2,"title":"Format","slug":"format"},{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Escaping Characters","slug":"escaping-characters"},{"level":2,"title":"Line breaks","slug":"line-breaks"},{"level":2,"title":"Displaying entities / player","slug":"displaying-entities-player"},{"level":2,"title":"Displaying scores","slug":"displaying-scores"},{"level":2,"title":"Translate text","slug":"translate-text"},{"level":2,"title":"Translate text with selectors/scores","slug":"translate-text-with-selectors-scores"}],"relativePath":"commands/tellraw.md"}',i={},d=t('<p>tellraw sends a JSON message to selected or all players being usefull for sending plain messages to players ingame</p><p><strong>The titleraw command follows the same theme</strong></p><p><img src="'+u+`" alt=""></p><h2 id="format" tabindex="-1">Format <a class="header-anchor" href="#format" aria-hidden="true">#</a></h2><p>this is how the tell raw command is formated</p><div class="language-"><pre><code>tellraw &lt;target: target&gt; &lt;raw json message: json&gt;
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li><code> &lt;target: target&gt;</code>: The target is expressed as a playername or player groups such as <code>@a</code> <code>@r</code> <code>@s</code> <code>@p</code></li><li><code>&lt;raw json message: json&gt;</code>: This is a json schema that tells how the message is structured or constructured. expressed with for example: <code>{&quot;rawtext&quot;:[{&quot;text&quot;:&quot;&quot;}]}</code></li></ul><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><p>This sends the words in the last set of quotes</p>`,9),k=t(`<div class="language-json line-numbers-mode"><pre><code>/tellraw @a <span class="token punctuation">{</span><span class="token property">&quot;rawtext&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="escaping-characters" tabindex="-1">Escaping Characters <a class="header-anchor" href="#escaping-characters" aria-hidden="true">#</a></h2><p>To use quotations in a tellraw message place a backslash to the left side of the quotation mark.</p>`,3),_=t(`<div class="language-json line-numbers-mode"><pre><code>/tellraw @a <span class="token punctuation">{</span><span class="token property">&quot;rawtext&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;Quote me: \\&quot;I am here\\&quot;.&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="line-breaks" tabindex="-1">Line breaks <a class="header-anchor" href="#line-breaks" aria-hidden="true">#</a></h2><p>To insert a line break use <code>\\n</code></p>`,3),h=t(`<div class="language-json line-numbers-mode"><pre><code>/tellraw @a <span class="token punctuation">{</span> <span class="token property">&quot;rawtext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;I am line one\\nI am line two&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="displaying-entities-player" tabindex="-1">Displaying entities / player <a class="header-anchor" href="#displaying-entities-player" aria-hidden="true">#</a></h2><p>You can use the following to use selector to display names.</p>`,3),g=t(`<div class="language-json line-numbers-mode"><pre><code>/tellraw @a <span class="token punctuation">{</span><span class="token property">&quot;rawtext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\xA76The winner is: \xA7a&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@a[r=5,c=1]&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="displaying-scores" tabindex="-1">Displaying scores <a class="header-anchor" href="#displaying-scores" aria-hidden="true">#</a></h2><p>You can use the following to use selector to display names.</p>`,3),m=t(`<div class="language-json line-numbers-mode"><pre><code>/tellraw @a <span class="token punctuation">{</span><span class="token property">&quot;rawtext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\xA76The winner is: \xA7a&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@a[r=5,c=1]&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\xA76With a score of: &quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token property">&quot;score&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@s&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;objective&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="translate-text" tabindex="-1">Translate text <a class="header-anchor" href="#translate-text" aria-hidden="true">#</a></h2><p>To have a language dependant text you can use the translate component and <a href="/concepts/text-and-translations.html">translation\xA0keys</a>. please note you will need relavent information in each of the desired .lang files for this to work.</p>`,3),q=o("RP/texts/en_US.lang"),T=s("div",{class:"language-"},[s("pre",null,[s("code",null,`example.langcode.1=I am line one
`)]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br")])],-1),w=o("RP/texts/de_DE.lang"),b=s("div",{class:"language-"},[s("pre",null,[s("code",null,`example.langcode.1=Ich bin strich eins
`)]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br")])],-1),v=s("p",null,"The command:",-1),x=t(`<div class="language-json line-numbers-mode"><pre><code>/tellraw @a <span class="token punctuation">{</span> <span class="token property">&quot;rawtext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token property">&quot;translate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.langcode.1&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="translate-text-with-selectors-scores" tabindex="-1">Translate text with selectors/scores <a class="header-anchor" href="#translate-text-with-selectors-scores" aria-hidden="true">#</a></h2><p>language files:</p>`,3),y=s("div",{class:"language-"},[s("pre",null,[s("code",null,`example.langcode.2=The winner is: %s. With a score of %s
`)]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br")])],-1),f=t(`<div class="language-json line-numbers-mode"><pre><code>/tellraw @a <span class="token punctuation">{</span><span class="token property">&quot;rawtext&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;translate&quot;</span><span class="token operator">:</span><span class="token string">&quot;example.langcode.2&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;with&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;rawtext&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;selector&quot;</span><span class="token operator">:</span><span class="token string">&quot;@a[r=5,c=1]&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;\xA76With a score of: &quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;score&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;@s&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;objective&quot;</span><span class="token operator">:</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,1);function S(A,C,I,V,P,j){const a=r("CodeHeader");return c(),l("div",null,[d,n(a),k,n(a),_,n(a),h,n(a),g,n(a),m,n(a,null,{default:e(()=>[q]),_:1}),T,n(a,null,{default:e(()=>[w]),_:1}),b,v,n(a),x,n(a),y,n(a),f])}var N=p(i,[["render",S]]);export{E as __pageData,N as default};