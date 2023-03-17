import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.716bc990.js";const i=JSON.parse('{"title":"Quick start","description":"","frontmatter":{},"headers":[{"level":2,"title":"Add controller","slug":"Add-controller","link":"#Add-controller","children":[]},{"level":2,"title":"Add route","slug":"Add-route","link":"#Add-route","children":[]},{"level":2,"title":"Add menu item","slug":"Add-menu-item","link":"#Add-menu-item","children":[]},{"level":2,"title":"Write CURD page logic","slug":"Write-CURD-page-logic","link":"#Write-CURD-page-logic","children":[]}],"relativePath":"guide/quick-start.md"}'),o={name:"guide/quick-start.md"},p=l(`<h1 id="quick-start" tabindex="-1">Quick start <a class="header-anchor" href="#quick-start">¶</a></h1><p>We use <code>users</code> table come with <code>Laravel</code> for example,the structure of table is:</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">users</span></span>
<span class="line"><span style="color:#A6ACCD;">    id          </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">integer</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"><span style="color:#A6ACCD;">    email       </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">password</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> string</span></span>
<span class="line"><span style="color:#A6ACCD;">    created_at  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">timestamp</span></span>
<span class="line"><span style="color:#A6ACCD;">    updated_at  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">timestamp</span></span>
<span class="line"></span></code></pre></div><p>And the model for this table is <code>App\\User.php</code></p><p>You can follow these steps to setup <code>CURD</code> interfaces of table <code>users</code>:</p><h2 id="Add-controller" tabindex="-1">Add controller <a class="header-anchor" href="#Add-controller">¶</a></h2><p>Use the following command to create a controller for <code>App\\User</code> model</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">php artisan admin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">make UserController </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">App\\\\User</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// under windows use:</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan admin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">make UserController </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">App\\User</span></span>
<span class="line"></span></code></pre></div><p>In <code>v1.8.0</code> version, you can use the <code>admin:controller</code> command to create a controller:</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">php artisan admin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">controller </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">model</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">App\\User</span></span>
<span class="line"></span></code></pre></div><p>The above command will create the controller in <code>app/Admin/Controllers/UserController.php</code>.</p><h2 id="Add-route" tabindex="-1">Add route <a class="header-anchor" href="#Add-route">¶</a></h2><p>Add a route in <code>app/Admin/routes.php</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$router-&gt;resource(&#39;demo/users&#39;, UserController::class);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="Add-menu-item" tabindex="-1">Add menu item <a class="header-anchor" href="#Add-menu-item">¶</a></h2><p>Open <code>http://localhost:8000/admin/auth/menu</code>, add menu link and refresh the page, then you can find a link item in left menu bar.</p><blockquote><p>Where <code>uri</code> fills in the path part that does not contain the prefix of the route, such as the full path <code>http://localhost:8000/admin/demo/users</code>, just input <code>demo/users</code>, If you want to add an external link, just fill in the full url, such as <code>http://laravel-admin.org/</code>.</p></blockquote><h2 id="Write-CURD-page-logic" tabindex="-1">Write CURD page logic <a class="header-anchor" href="#Write-CURD-page-logic">¶</a></h2><p>The controller <code>app/Admin/Controllers/UserController.php</code> created by the <code>admin:make</code> command is as follows:</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Controllers</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Models</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">User</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Controllers</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">AdminController</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Form</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Encore</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Show</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserController</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AdminController</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">title </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">grid</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Grid</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">created_at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Created at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">column</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">updated_at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Updated at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">detail</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">show </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Show</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">findOrFail</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">show</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">field</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">show</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">field</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">show</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">field</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">show</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">field</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">show</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">field</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">created_at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Created at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">show</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">field</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">updated_at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Updated at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">show</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">form</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">form </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">User</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">textarea</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">textarea</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Email</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">textarea</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>$title</code> attribute is used to set the title of this CURD module, which can be modified to any other string.</p><p>The <code>grid</code> method corresponds to the <code>list</code> page of the data. Refer to [model-grid documentation] (model-grid) to implement the related functional logic of the list page.</p><p>The <code>detail</code> method corresponds to the <code>details</code> page of the data, click on the <code>detail display</code> button in the operation column of the list page, and refer to [model-show documentation] (model-show.md) to realize the details page Related functional logic.</p><p>The <code>form</code> method corresponds to the <code>create</code> and <code>edit</code> pages of the data. Refer to [model-form documentation] (model-form.md) to implement the relevant functional logic of the data creation and edit pages.</p>`,24),e=[p];function t(c,r,D,F,y,A){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{i as __pageData,d as default};
