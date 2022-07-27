import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

  itemDetails: any = {};
  editItem: any = {};
  allItems: any;
  editval: boolean = false;

  ngOnInit(): void {
    this.fetchAllItems();
  }

  saveItem() {
    console.log(this.itemDetails);
    this.dataService.addItems(this.itemDetails).subscribe((response: any) => {
      console.log(response);
    })
  }
  fetchAllItems() {
    this.dataService.getItems().subscribe((response: any) => {
      console.log(response);
      this.allItems = response.data;
    })
  }
  edit(val: any, data: any) {
    this.editval = val;
    this.editItem = data;
  }
  closeModel(val: any){
    this.editval = val;
  }
  
  saveEditiedChanges() {
    console.log(this.editItem);
    this.dataService.eidtItems(this.editItem._id, this.editItem).subscribe((response: any) => {
      console.log(response);
    })
  }

  Logout() {
    this.router.navigate(['/login']);
  }

}
