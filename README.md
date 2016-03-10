[![logo.png](http://www.tvidoo-commerce.com/wp-content/uploads/2015/04/tvidoo_logo_commerce_2015_72dpi_150.png?github_repo=tvidoo-grid)](http://www.tvidoo-commerce.com/en/author/thorsten/?utm_source=github&utm_medium=readme&utm_term=logo_click&utm_campaign=github_tvidoo-grid&utm_content=logo)

tvidoo grid
===
tvidoo grid is a pure css based fluid grid layout system for all purposes regarding responsive (adaptive) web design. tvidoo grid is brought to you by [Thorsten Körner](http://www.tvidoo-commerce.com/en/author/thorsten/) it is pure CSS / CSS3 and don't rely on any JavaScript libraries. So you are absolutely free to combine it with whatever frameworks you want, be it AngularJS, be it jQuery and so many more.

tvidoo grid also don't hurt existing template sets, when you are required to migrate softly to a responsive design.

Contributing
===
Please read the [CONTRIBUTING](https://github.com/tvidoo-commerce/tvidoo-grid/blob/master/CONTRIBUTING.md) doc when you are interested in contributing to the tvidoo grid project.

History
===
It was first developed during my work on several responsive shop templates for Magento, OXID and Prestashop online shops, as well as WordPress blogs at [tvidoo commerce](http://www.tvidoo-commerce.com).

After doing several different shops, I decided to strip down the code to have it more generic, so tvidoo grid is strictly designed to have a small footprint.


Installing tvidoo grid
===
### Compile from sources (recomended)
Since compiling the sources gives you the opportunity to make your own settings and design, I recommend this way.
 
Prerequisites:
- ruby (https://www.ruby-lang.org/)
- compass (http://compass-style.org/)
- grunt (http://gruntjs.com)

1. Clone this project (```$> git clone git@github.com:tvidoo-commerce/tvidoo-grid.git```)
2. CD to the project directory (```$> cd /path/tvidoo-grid/```)
3. Run NPM (```$> npm install```). This may take some time now, so go and grab a coffee :-) 
4. Start the automatic compass watcher with ```$> grunt watch```
5. Now, whenever you make changes to one of the source files, the contents of the distribution directory will be rebuilt automatically.
6. Use the compressed contents of the distribution directory in your project. (See Usage section in this file.)

### Distribution | Installing tvidoo grid using a ZIP archive
If you want to install tvidoo grid just as it is, just download the latest ZIP archive release and unpack the contents of the distribution directory to your web project or website.

Prerequisites:
- No special requirements when just using the CSS files. 


[![tvidoo grid](https://img.shields.io/badge/tvidoo--grid-v_0.9__beta-blue.svg)](https://github.com/tvidoo-commerce/tvidoo-grid) [![npm](https://img.shields.io/npm/l/express.svg)](https://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
===

Usage
===
Use the compressed contents of the distribution directory in your project.

	EXAMPLE:
	Load the tvidoo-grid and the desired tvidoo theme in the <head></head> section of your html:
	
         <link rel="stylesheet" href="../../distribution/css/tvidoo-grid.css">
         <link rel="stylesheet" href="../../distribution/css/tvidoo-grid-theme-basic.css">
         
That's it. Now you can use the grid for your design on your website.

Use tvidoo grid for your WordPress theme
===
It is easy to use the tvidoo grid layout system to develop your WordPress theme.

In this case, you have to use a file style.css in the theme's root directory and @import all css files, you want.

Since this is the way, you would normally go, we have a better one. You can simply use the style.scss file in the sources/sass directory and adapt everything to your needs.

Don't forget to edit the comment section at the top according to the WordPress codex. (https://codex.wordpress.org/Theme_Development#Theme_Stylesheet)

License (tvidoo grid code)
===
The MIT License (MIT)

Copyright (c) 2013 - 2016 Thorsten Koerner [http://tvidoo-commerce.com/en/author/thorsten/](http://tvidoo-commerce.com/en/author/thorsten/?utm_source=github&utm_medium=readme&utm_term=author_link_click&utm_campaign=github_tvidoo-grid&utm_content=author_link)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

License (tvidoo grid documentation)
===

Documentation is released under:
- [creative commons license Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0)
- Read the full license here (http://creativecommons.org/licenses/by-sa/4.0/legalcode)

Licenses (used third party libraries)
===
Used third party libraries are published under different libraries. See their respecting README or License files for more information

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/tvidoo-commerce/tvidoo-grid/trend.png)](https://bitdeli.com/free "Bitdeli Badge")