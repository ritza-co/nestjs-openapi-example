<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.pets.create({
    type: "cat",
    name: "Panama",
    age: 1,
    breed: "British Short Hair",
    environment: "indoor",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->