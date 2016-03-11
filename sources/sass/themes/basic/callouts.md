
---

<a name="callouts"></a>

## Callouts

> Callouts are ideal to give users feedback on their actions and provide important messages. All colors from the color.sass file are available.


<div class="tvg--callout tvg--callout-default">A Default Callout</div><p></p>
<div class="tvg--callout tvg--callout-primary">A Primary Callout</div><p></p>
<div class="tvg--callout tvg--callout-success">A Success Callout</div><p></p>
<div class="tvg--callout tvg--callout-info">An Info Callout</div><p></p>
<div class="tvg--callout tvg--callout-warning">A Warning Callout</div><p></p>
<div class="tvg--callout tvg--callout-danger">A Danger Callout</div><p></p>

<h2>Code</h2>

<pre><code class="html">
&lt;div class="tvg--callout tvg--callout-default">A Default Callout&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--callout tvg--callout-primary">A Primary Callout&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--callout tvg--callout-success">A Success Callout&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--callout tvg--callout-info">An Info Callout&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--callout tvg--callout-warning">A Warning Callout&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--callout tvg--callout-danger">A Danger Callout&lt;/div>&lt;p>&lt;/p>
</code></pre>

<h2>Callout examples with nested elements</h2>

<blockquote>Callouts can also be used for nested elements like buttons, links etc.</blockquote>

<div class="tvg--callout tvg--callout-danger">A danger callout with a flat button
<p></p>
<a href="#callouts"><button class="tvg--button-M tvg--button-danger tvg--border-radius">Do something Sam!</button></a></div><p></p>
<div class="tvg--callout tvg--callout-danger tvg--raised">A danger callout with <a href="#callouts">link</a> and flat button
<a href="#callouts"><button class="tvg--button-S tvg--button-danger tvg--border-radius">Do it again Sam!</button></a></div>

## Code

<pre><code class="code html">
&lt;div class="tvg--callout tvg--callout-danger">A danger callout with a flat button
    &lt;p>&lt;/p>
    &lt;a href="#callouts">
        &lt;button class="tvg--button-M tvg--button-danger tvg--border-radius">
        Do something Sam!&lt;/button>
    &lt;/a>
&lt;/div>&lt;p>&lt;/p>
&lt;div class="tvg--callout tvg--callout-danger tvg--raised">
    A danger callout with &lt;a href="#callouts">link&lt;/a> and flat button
    &lt;a href="#callouts">&lt;button class="tvg--button-S tvg--button-danger tvg--border-radius">
        Do it again Sam!&lt;/button>
    &lt;/a>&lt;/div>
</code></pre>
