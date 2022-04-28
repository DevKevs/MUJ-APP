import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit, OnDestroy {

  complaints: any;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private http: HttpClient) { }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.GetComplaint()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      dom: 'Bfrtip',
    }
  }
  GetComplaint(){
    this.http.get('https://localhost:44370/api/Quejas').subscribe(obj => {
      this.complaints = obj
      this.dtTrigger.next(this.complaints);
    })
  }

}
