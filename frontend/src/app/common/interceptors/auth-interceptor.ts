import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {TwaService} from "../services/twa.service";
import {Observable} from "rxjs";

// export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
//   // Inject the current `AuthService` and use it to get an authentication token:
//   const initData = inject(TwaService).getInitData();
//   // Clone the request to add the authentication header.
//   const newReq = req.clone({
//     headers: req.headers.append('Authentication', `twa ${initData}`),
//   });
//   return next(newReq);
// }

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    const initData = inject(TwaService).getInitData();

    return handler.handle(req.clone({
      headers: req.headers
        .append('Content-Type', 'application/json')
        .append('Authorization', `twa ${initData}`),
    }));
  }
}
