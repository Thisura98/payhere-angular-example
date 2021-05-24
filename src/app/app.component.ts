import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  script_tag = '<script type="text/javascript" src="https://www.payhere.lk/lib/payhere.js"></script>';

  startPayment(){
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
  }
}