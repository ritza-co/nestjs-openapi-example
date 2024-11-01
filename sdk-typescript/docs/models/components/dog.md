# Dog

## Example Usage

```typescript
import { Dog } from "sdk/models/components";

let value: Dog = {
  type: "dog",
  name: "Fluffy",
  age: 4,
  breed: "Alaskan Malamute",
  size: "medium",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | *string*                                           | :heavy_check_mark:                                 | The type of pet                                    | dog                                                |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | The name of the dog                                | Fluffy                                             |
| `age`                                              | *number*                                           | :heavy_check_mark:                                 | The age of the dog                                 | 4                                                  |
| `breed`                                            | *string*                                           | :heavy_check_mark:                                 | The breed of the dog                               | Alaskan Malamute                                   |
| `size`                                             | [components.Size](../../models/components/size.md) | :heavy_check_mark:                                 | The Size of the dog'                               | medium                                             |