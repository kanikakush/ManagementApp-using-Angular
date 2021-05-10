import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  public named: any;
  public details = [
    { named: "John", idd1: 101, emaild: "john@gmail.com", passd: "pass@123", depd: "IT" },
    { named: "James", idd1: 102, emaild: "james@gmail.com", passd: "pass@123", depd: "SALES" },
    { named: "kim", idd1: 103, emaild: "kim@gmail.com", passd: "pass@123", depd: "HR" },
    { named: "haily", idd1: 104, emaild: "haily@gmail.com", passd: "pass@123", depd: "HR" }];
  public d: any;
  public visible = false;
  public idm: any;
  public namem: any;
  public depm: any;
  public emailm: any;
  public passm: any;
  constructor(private route: Router) { }
  ngOnInit() {
    //console.log("hellooo")
    localStorage.setItem('empData', JSON.stringify(this.details));
    this.d = JSON.parse(localStorage.getItem('empData'));
    //console.log(this.d);

  }
  addemp(name, id, mail, pas, depart) {
    let newdata = { named: name, idd1: id, emaild: mail, passd: pas, depd: depart };
    console.log(newdata);
    this.details.push(newdata);
    console.log(this.details);
    localStorage.setItem('empData', JSON.stringify(this.details));
    this.d = JSON.parse(localStorage.getItem('empData'));
    console.log(this.d);
  }

  delete(k) {
    this.d.splice(k, 1);
    localStorage.setItem('empData', JSON.stringify(this.d));
    this.d = JSON.parse(localStorage.getItem('empData'));
    console.log(this.d);

  }
  Update(idm) {
    this.d = JSON.parse(localStorage.getItem('empData'));
    console.log(idm);
    for (var i = 0; i < this.d.length; i++) {
      if (this.d[i].idd1 == idm) {
        this.d[i].named = this.namem
        this.d[i].emaild = this.emailm
        this.d[i].depd = this.depm
        this.d[i].passd = this.passm

      }
    }
    localStorage.setItem('empData',JSON.stringify(this.d));
        console.log(JSON.parse(localStorage.getItem('empData')))
  }
  edit(k) {
    console.log(k);

    this.d = JSON.parse(localStorage.getItem('empData'));
    console.log("heyyyy edit method 1");
    console.log(this.d);
    this.namem = k.named
    this.emailm = k.emaild
    this.idm = k.idd1
    this.depm = k.depd
    this.emailm = k.emaild
    this.passm=k.passd
    console.log("heyyyy edit method 2");
    this.visible = true;
  }


}
