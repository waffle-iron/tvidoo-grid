
---

<a name="infoboxes"></a>

## Infoboxes

> Infoboxes can be used to emphasize special text passages or messages. All colors from the color.sass file are available.

<div class="tvg--infobox tvg--infobox-default">A Default Infobox</div><p></p>
<div class="tvg--infobox tvg--infobox-primary">A Primary Infobox</div><p></p>
<div class="tvg--infobox tvg--infobox-success">A Success Infobox</div><p></p>
<div class="tvg--infobox tvg--infobox-info">A Info Infobox</div><p></p>
<div class="tvg--infobox tvg--infobox-warning">A Warning Infobox</div><p></p>
<div class="tvg--infobox tvg--infobox-danger">A Danger Infobox</div><p></p>

## Code

<pre><code class="code html">
&lt;div class="tvg--infobox tvg--infobox-default">A Default Infobox&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--infobox tvg--infobox-primary">A Primary Infobox&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--infobox tvg--infobox-success">A Success Infobox&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--infobox tvg--infobox-info">A Info Infobox&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--infobox tvg--infobox-warning">A Warning Infobox&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--infobox tvg--infobox-danger">A Danger Infobox&lt;/div>&lt;p>&lt;/p>
</code></pre>

<h2 class="tvg--underline">Infobox examples with nested elements.</h2>

> Infoboxes can also be used for nested elements:

<div class="tvg--infobox tvg--infobox-success">A Success Infobox with Flat Button
    <p></p>
    <button class="tvg--button-M tvg--button-success tvg--border-radius">Do it again Sam!</button>
</div><p></p>
<div class="tvg--infobox tvg--infobox-danger tvg--raised">A raised Danger Infobox with <a href="#infoboxes">link</a> and outlined button.
    <a href="#infoboxes"><button class="tvg--button-outline-danger tvg--button-XS tvg--border-radius">Do it again Sam!</button></a>
</div><p></p>

## Code

<pre><code class="code html">
&lt;div class="tvg--infobox tvg--infobox-success">A Success Infobox with Flat Button
    &lt;p>&lt;/p>
    &lt;button class="tvg--button-M tvg--button-success tvg--border-radius">
    Do it again Sam!&lt;/button>
&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--infobox tvg--infobox-danger tvg--raised">
A raised Danger Infobox with &lt;a href="#infoboxes">link&lt;/a> and outlined button.
    &lt;a href="#infoboxes">
    &lt;button class="tvg--button-outline-danger tvg--button-XS tvg--border-radius">
    Do it again Sam!&lt;/button>&lt;/a>
&lt;/div>&lt;p>&lt;/p>
</code></pre>
