import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.sass']
})
export class AdminHomeComponent implements OnInit {

  public data: any;

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    // makes a request to payment api and get all the summary, then populate that data on to the chart
    this.http.getRequest('donations/getPaymentDetail').subscribe((data) => {
      const label: Array<any> = [];
      const values: Array<any> = [];
      data.paymentDetails.forEach(ele => {
        label.push(ele.name);
        values.push(ele.amount);
      });
      this.data = {
        labels: label,
        datasets: [
            {
                data: values,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };
    });
  }

}
