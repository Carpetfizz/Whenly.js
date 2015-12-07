# Whenly.js

A silly Javascript library for "Bad Hax". Allows you to watch variables for specific value changes. The theme of "Bad Hax" was to create the most useless (but working) hack. Check out the source `Whenly.js` if you want to see some grotesque code.

# Example

```javascript
var name = "Max";
var age = 18;

Whenly.when(this, "name").is("George", function(){
  //handle variable change
});

Whenly.when(this, "age").is(18, function(){
  //handle variable change
});

Whenly.init();

```
