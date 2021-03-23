# One Element Per File

This rule disallows creating multiple `HTMLElement` classes in a single file.

## Rule Details

👎 Examples of **incorrect** code for this rule:

```js
```

👍 Examples of **correct** code for this rule:

```js
```


Declaring multiple Custom Elements per file can:

 - Result in large files which are difficult to navigate.
 - Make a project difficult to navigate, as Custom Elements do not have a 1-1 mapping with files.
 - Make it more difficult for bundle optimizations such as "Tree Shaking", "Bundle Splitting" or "Dead Code Elimination"

Having one element per file eliminates these problems.

## When Not To Use It

If you intentionally want multiple elements in a single file then you can disable this rule.

## Version

This rule was introduced in v0.0.1
