---

## Custom Directory

> This is a special directory for your custom SASS files. 

> Place your own custom files in this directory to protect them from being deleted during updates.

> To add them to the generated CSS files, just add a line

>>``` @import 'custom/productlist'; ``` 

>to your SCSS masterfile

### Example

    you have a file _productlist.sass in this directory.
    To add this file in your scss file i.e. tvidoo-grid.scss simply put the following line
    in the scss file:
    @import 'custom/productlist';
    Where the best place for this line is, depends on your needs. 
    
---