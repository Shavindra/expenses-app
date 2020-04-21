/**
 * External Imports
 */
import axios, { AxiosPromise } from 'axios';

export class APIService {
  private httpClient = axios;
  private readonly apiUrl = 'http://localhost:3000';

  constructor(protected endpoint: string = '') {}

  public get(params?: any): AxiosPromise {
    return this.httpClient.get(this.getUrl(), { params });
  }

  public post(url = '', params: any, config?: any) {
    return this.httpClient.post(this.getUrl(url), params, config);
  }

  private getUrl(suffix = ''): string {
    return this.apiUrl + this.endpoint + suffix;
  }
}
