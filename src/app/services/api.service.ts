import { HttpClient } from '@angular/common/http';
import { Category, Character, Film } from '@utils/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
})
export class ApiService {
    baseUrl: string = 'https://swapi.dev/api/';
    constructor(private httpClient: HttpClient) {
    }

    async getCategory(category: string) {
      // const callBack = await this.httpClient.get(this.baseUrl + category).toPromise();
      const categories = await this.httpClient.get(this.baseUrl + category).toPromise();
      let results: [];
      if (categories.hasOwnProperty('results')) {
        results = categories['results'];
      }
      //ToDO recursively check for 'next' results as well (paginated API)
      console.log(results);
      return results;
    }

    async getResults(nextUrl: string) {
      const pagedResults = await this.httpClient.get(nextUrl).toPromise().then(res => res['results']);
      return pagedResults;
    }

}
