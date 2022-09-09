# Prevent The Most Common Cross Site Scripting Attack

## Scripting attack example

Lets say you inject a script tag into a search query

```js
<script>alert('hello')</script>
```

script tags will not run when injected into a page with this manner

In order to inject js, we use img tag w blank source.

This will cause it to throw an error, and we can use on error function 

```html
<img src="" onerror ='alert(hi)' alt="">
```

more practical example

``` html
<img src="" onerror ='alert(document.cookie)' alt="">
```

This will return the stored cookies, most websites store session ID, wich is both and if we have it and we can log into the site as that user

---
## Prevent this attack

If you use .innerhtml, know that its not safe to injection, if a user inputs valid html, it will render that as actual html, rather than text

So make sure that nothing that goes into that innerhtml is from the user, or escape the user input by remvoing html specific symbols, so it will render as a text 


```js
Example on verint.com :

The following characters are not allowed: []<>"&!?
```


