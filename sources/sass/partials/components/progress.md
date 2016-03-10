
---

<a name="progress"></a>

## Progress Bars

> Progress Bars can be used to show the progress of any process or as a chart.

> They are animated using CSS

> Coloring is done with the CSS classes by using the color swatch colors

### Examples

<div style="clear: both">&nbsp;</div>

<div class="tvg--col-XXS-12  tvg--col-S-5">

<div class="tvg--progress">
    <div class="tvg--progress-default" style="width: 80%;">Default</div>
</div>
<div class="tvg--progress">
    <div class="tvg--progress-primary" style="width: 90%;">Primary</div>
</div>
<div class="tvg--progress">
    <div class="tvg--progress-success" style="width: 65%;">Success</div>
</div>
<div class="tvg--progress">
    <div class="tvg--progress-info" style="width: 80%;">Info</div>
</div>
<div class="tvg--progress">
    <div class="tvg--progress-warning" style="width: 65%;">Warning</div>
</div>
<div class="tvg--progress">
    <div class="tvg--progress-danger" style="width: 80%;">Danger</div>
</div>

</div>

<div style="clear: both">&nbsp;</div>

### Code

<pre><code class="html">&lt;div class="tvg--progress">
    &lt;div class="tvg--progress-default" style="width: 80%;">Default&lt;/div>
&lt;/div>
&lt;div class="tvg--progress">
    &lt;div class="tvg--progress-primary" style="width: 90%;">Primary&lt;/div>
&lt;/div>
&lt;div class="tvg--progress">
    &lt;div class="tvg--progress-success" style="width: 65%;">Success&lt;/div>
&lt;/div>
&lt;div class="tvg--progress">
    &lt;div class="tvg--progress-info" style="width: 80%;">Info&lt;/div>
&lt;/div>
&lt;div class="tvg--progress">
    &lt;div class="tvg--progress-warning" style="width: 65%;">Warning&lt;/div>
&lt;/div>
&lt;div class="tvg--progress">
    &lt;div class="tvg--progress-danger" style="width: 80%;">Danger&lt;/div>
&lt;/div>
</code></pre>

---

#### Example with Lists

<div style="clear: both">&nbsp;</div>

<div class="tvg--col-XXS-12 tvg--col-S-5">

<ul class="tvg--liststyle-none">
<li class="tvg--progress tvg--progress-margleft"><div class="tvg--progress-default" style="width: 80%;"><span>Default</span></div></li>
<li class="tvg--progress tvg--progress-margleft"><div class="tvg--progress-primary" style="width: 90%;"><span>Primary</span></div></li>
<li class="tvg--progress tvg--progress-margleft"><div class="tvg--progress-success" style="width: 65%;"><span>Success</span></div></li>
<li class="tvg--progress tvg--progress-margleft"><div class="tvg--progress-info" style="width: 80%;"><span>Info</span></div></li>
<li class="tvg--progress tvg--progress-margleft"><div class="tvg--progress-warning" style="width: 65%;"><span>Warning</span></div></li>
<li class="tvg--progress tvg--progress-margleft"><div class="tvg--progress-danger" style="width: 80%;"><span>Danger</span></div></li>
</ul>
</div><div class="tvg--col-XXS-12 tvg--col-S-7">&nbsp;</div>

<div style="clear: both">&nbsp;</div>

### Code Progress Bar with Lists

<pre><code class="html">&lt;li class="tvg--progress tvg--progress-margleft">
    &lt;div class="tvg--progress-default" style="width: 80%;">&lt;span>Default&lt;/span>&lt;/div>
&lt;/li>
&lt;li class="tvg--progress tvg--progress-margleft">
    &lt;div class="tvg--progress-primary" style="width: 90%;">&lt;span>Primary&lt;/span>&lt;/div>
&lt;/li>
&lt;li class="tvg--progress tvg--progress-margleft">
    &lt;div class="tvg--progress-success" style="width: 65%;">&lt;span>Success&lt;/span>&lt;/div>
&lt;/li>
&lt;li class="tvg--progress tvg--progress-margleft">
    &lt;div class="tvg--progress-info" style="width: 80%;">&lt;span>Info&lt;/span>&lt;/div>
&lt;/li>
&lt;li class="tvg--progress tvg--progress-margleft">
    &lt;div class="tvg--progress-warning" style="width: 65%;">&lt;span>Warning&lt;/span>&lt;/div>
&lt;/li>
&lt;li class="tvg--progress tvg--progress-margleft">
    &lt;div class="tvg--progress-danger" style="width: 80%;">&lt;span>Danger&lt;/span>&lt;/div>
&lt;/li>
</code></pre>

<div class="tvg--infobox tvg--infobox-info">TIPP: the progress bar elements are reacting to the ltr/rtl switch in _directions.sass. So you can easily switch the direction in your internationalization project.</div>
