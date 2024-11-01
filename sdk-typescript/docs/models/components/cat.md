# Cat

## Example Usage

```typescript
import { Cat } from "sdk/models/components";

let value: Cat = {
  type: "cat",
  name: "Panama",
  age: 1,
  breed: "British Short Hair",
  environment: "indoor",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | *string*                                                         | :heavy_check_mark:                                               | The type of pet                                                  | cat                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The name of the cat                                              | Panama                                                           |
| `age`                                                            | *number*                                                         | :heavy_check_mark:                                               | The age of the cat                                               | 1                                                                |
| `breed`                                                          | *string*                                                         | :heavy_check_mark:                                               | The breed of the cat                                             | British Short Hair                                               |
| `environment`                                                    | [components.Environment](../../models/components/environment.md) | :heavy_check_mark:                                               | Living environment of the cat                                    | indoor                                                           |