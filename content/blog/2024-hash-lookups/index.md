---
id: posts/2024-11-21-hash-lookups
path: /posts/2024-11-21-hash-lookups
date: 2024-11-21
title: Hash lookups for content types
description: An elegant way to manage content mappings, or type-specific behaviours
---

# Data > Code when possible

Often times a large block of logic to calculate a value or behaviour can be mapped to our types.


```js
let msg = '-'

if (obj.type == 'public') {
  msg = 'Public'
} else if (obj.type == 'private') {
  msg = 'Hidden'
} else if (obj.type == 'archived') {
  msg = 'Limited visibility'
}
```

This code is very straight-forward, but it's an intermingling of data with logic applying the mapping. If we know that we are dealing with a mapping (case statements are a good sign of this), a hash is an elegant way to apply that mapping.

Data doesn't have bugs, code often does. If you ever have the chance to replace logic with a hash lookup, do it (just don't _force_ the mapping if there isn't one there).

```js
const Keys = {
  default: '-',
  public: 'Public',
  private: 'Hidden',
  archived: 'Limited visibility',
}

const msg = Keys[obj.type] || Keys.default
```

## Type-safe content

If this data is also strongly typed by GraphQL schema or union type elsewhere, we can get types involved and make our content type-safe.

If the types we're writing our code against change, we will want our code to adapt. If we write our data against our types, we'll be alerted when the types break.

```ts
type ObjectType = 'public' | 'private' | 'archived' /* | 'newtype' */;
```

So long as we have a list of our types for use across our codebase, we can use that to put requirements on the contents. Here a `Record` type ensures that the object will contain a key for _every_ value.

```ts
const Keys: Record<ObjectType | 'default', string> = {
  default: '-',
  public: 'Public',
  private: 'Hidden',
  archived: 'Limited visibility',
  // The `Keys` object will be missing the 'newtype'
}
```

If a new value is added to the union (or introduced in the GQL schema), we _will_ hear about it when our data needs updating 🚨

We wouldn't have that guarantee if `Keys` were a `Record<string, string>`. The benefit here comes from writing strong types that need to be satisfied, and making sure they stay satisfied.

