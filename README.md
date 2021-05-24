# PayHere Angular Example

<div style="text-align: center">
<img src="https://github.com/Thisura98/payhere-angular-example/blob/main/res/screenshot.png?raw=true" width="650">
<div>

A small Angular 12 example integrating with payhere.lk's JavaScript SDK

## How to use

Initialize the node project (because node_modules folder is not included in repo).

`npm install`

With Angular installed on your machine via npm, run one of the following commands.

1. `npx ng serve`
2. `ng serve`

## How to perform your own Angular - PayHere Integration.

### 1. In your `index.html` file, include the [PayHere JavaScript SDK](https://support.payhere.lk/api-&-mobile-sdk/payhere-javascript)

```html
<!doctype html>
<html lang="en">
<head>
  ...
  <!-- Add this line -->
  <script src="https://www.payhere.lk/lib/payhere.js"></script>
</head>
...
</html>

```

### 2. In your Component's TypeScript code refer to the PayHere object as follows.

```ts
let payhere = (window as any).payhere;
```

PayHere JS SDK attaches to the window property. But without the downcase to `any`, you will get compilation errors since TypeScript is a type safe language.

### 3. Use the PayHere JS SDK normally.

Example:
```js
let payhere = (window as any).payhere;
const payment = {
    "sandbox": true,
    "merchant_id": "1211149",    // Replace your Merchant ID
    "return_url": undefined,     // Important
    "cancel_url": undefined,     // Important
    "notify_url": "http://sample.com/notify",
    "order_id": "ItemNo12345",
    "items": "Door bell wireles",
    "amount": "1000.00",
    "currency": "LKR",
    "first_name": "Saman",
    "last_name": "Perera",
    "email": "samanp@gmail.com",
    "phone": "0771234567",
    "address": "No.1, Galle Road",
    "city": "Colombo",
    "country": "Sri Lanka",
    "delivery_address": "No. 46, Galle road, Kalutara South",
    "delivery_city": "Kalutara",
    "delivery_country": "Sri Lanka",
    "custom_1": "",
    "custom_2": ""
}
payhere.onCompleted = (orderId: String) => {
    console.log("PayHere Completed - Order number =", orderId);
};
payhere.onDismissed = () => {
    console.log("PayHere Dismissed");
};
payhere.onError = (error: String) => {
    console.log("PayHere Error =", error);
}
payhere.startPayment(payment);
```

## I have an issue, where should I ask?

1. You can ask questions in the [Issues Section](https://github.com/Thisura98/payhere-angular-example/issues) of this repo.

2. You can email a PayHere Developer at [techsupport@payhere.lk](mailto:techsupport@payhere.lk) for assistance.