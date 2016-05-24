import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/Rx';

export abstract class RestService {

  constructor() { }

  getData<T>(): Promise<T> {
    return this.http.get(this.url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  putData<T>(body: string): Promise<T> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.url, body, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  protected abstract get http(): Http;

  protected abstract get url(): string;

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
