import axios, { AxiosPromise } from 'axios';

export class APIService {
  private httpClient = axios;
  private readonly apiUrl = 'http://localhost:3000';

  constructor(protected endpoint: string = '') {}

  public get(params?: any): AxiosPromise {
    return this.httpClient.get(this.getUrl(), { params });
  }

  public post(params: any) {
    return this.httpClient.post(this.getUrl(), { params });
  }

  private getUrl(): string {
    return this.apiUrl + this.endpoint;
  }
}
