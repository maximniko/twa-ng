import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Injectable} from "@angular/core";
import {NavigationExtras, Router} from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    return handler.handle(req).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        if (error) {
          switch (error.status) {
            case 400:
              break;
            case 401:
              break;
            case 500:
              const navigationExtras: NavigationExtras = { state: { error: error.error } };
              this.router.navigateByUrl("/server-error", navigationExtras);
              break;
            default:
              break;
          }
          throw error;
        }
      })
    )
  }
}
