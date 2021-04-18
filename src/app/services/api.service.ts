import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ApiService {
    private baseUrl: string = 'https://swapi.dev/api/';
    private httpClientModule: HttpClientModule = new HttpClientModule;
    private httpClient: HttpClient;

}
