import {Injectable} from "@angular/core";

export interface Alert {
  message: string;
  type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}

@Injectable({
  providedIn: 'root'
})
export class AlertCreator {
  orderCreated(): Alert {
    return {
      message: "Your order has been added successfully!",
      type: "success"
    }
  }
}
