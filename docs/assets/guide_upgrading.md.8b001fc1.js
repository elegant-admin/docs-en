import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.716bc990.js";const A=JSON.parse('{"title":"version update","description":"","frontmatter":{},"headers":[{"level":2,"title":"View current version","slug":"View-current-version","link":"#View-current-version","children":[]},{"level":2,"title":"Update to the latest version","slug":"Update-to-the-latest-version","link":"#Update-to-the-latest-version","children":[]},{"level":2,"title":"Update to development version","slug":"Update-to-development-version","link":"#Update-to-development-version","children":[]},{"level":2,"title":"Update the specified version","slug":"Update-the-specified-version","link":"#Update-the-specified-version","children":[]},{"level":2,"title":"Precautions","slug":"Precautions","link":"#Precautions","children":[]}],"relativePath":"guide/upgrading.md"}'),l={name:"guide/upgrading.md"},o=n(`<h1 id="version-update" tabindex="-1">version update <a class="header-anchor" href="#version-update">¶</a></h1><h2 id="View-current-version" tabindex="-1">View current version <a class="header-anchor" href="#View-current-version">¶</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">encore/laravel-admin</span></span>
<span class="line"></span></code></pre></div><h2 id="Update-to-the-latest-version" tabindex="-1">Update to the latest version <a class="header-anchor" href="#Update-to-the-latest-version">¶</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">encore/laravel-admin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-vvv</span></span>
<span class="line"></span></code></pre></div><h2 id="Update-to-development-version" tabindex="-1">Update to development version <a class="header-anchor" href="#Update-to-development-version">¶</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">encore/laravel-admin:dev-master</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-vvv</span></span>
<span class="line"></span></code></pre></div><h2 id="Update-the-specified-version" tabindex="-1">Update the specified version <a class="header-anchor" href="#Update-the-specified-version">¶</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">encore/laravel-admin:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">1.6.15</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-vvv</span></span>
<span class="line"></span></code></pre></div><h2 id="Precautions" tabindex="-1">Precautions <a class="header-anchor" href="#Precautions">¶</a></h2><p>Since the front-end resources of each version may be modified, you need to run the following commands after the update.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Force</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">release</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">assets</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">files</span></span>
<span class="line"><span style="color:#FFCB6B;">Php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vendor:publish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tag=laravel-admin-assets</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Force</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">release</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lang</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">files</span></span>
<span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vendor:publish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tag=laravel-admin-lang</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Clean</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">view</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cache</span></span>
<span class="line"><span style="color:#FFCB6B;">Php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">view:clear</span></span>
<span class="line"></span></code></pre></div><p>Finally, don&#39;t forget to clean up the browser cache.</p>`,13),p=[o];function t(r,c,i,C,d,y){return a(),e("div",null,p)}const D=s(l,[["render",t]]);export{A as __pageData,D as default};
