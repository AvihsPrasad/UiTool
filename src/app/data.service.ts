import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, first, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: any = 'http://localhost:3200/api';
  header: any;

  constructor(private http: HttpClient) { }

    
  login(data: any) {
    return this.http.post(this.apiUrl + '/login', data).pipe(
      map(items => {
        console.log(items)
        return items;
      })
    )
  }

  addItems(data: any) {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
    return this.http.post(this.apiUrl + '/addData', data, {headers: reqHeader}).pipe(
      map(items => {
        console.log(items)
        this.getItems();
        return items;
      })
    )
  }

  getItems() {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
    return this.http.get(this.apiUrl + '/itemList', {headers: reqHeader}).pipe(
      map(items => {
        console.log(items)
        return items;
      })
    )
  }

  eidtItems(id: any, data: any) {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
    return this.http.put(this.apiUrl + '/editItem/' + id, data, {headers: reqHeader}).pipe(
      map(items => {
        console.log(items)
        return items;
      })
    )
  }
}
