import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  public d:any;
  public idm: any;
  public namem: any;
  public depm: any;
  public emailm: any;
  public passm: any;
public g:any;
public empid:any;
  constructor() { }
edit(namem,idm,emailm,passm,depm){
  this.d=JSON.parse(localStorage.getItem('empData'));
  console.log(this.d);
  for(var i=0;i<this.d.length;i++)
  {
    console.log("edit for loop");
    if(idm==this.d[i].idd1)
    {
      console.log("edit for loop inside if")
      this.idm=this.d[i].idd1;
      this.namem=this.d[i].named;
    }
  }
}
Update(idm)
{
  this.d = JSON.parse(localStorage.getItem('empData'));
  console.log(idm);
  for (var i = 0; i < this.d.length; i++) {
    if (this.d[i].idd1 == idm) {
      this.d[i].named = this.namem
      this.d[i].emaild = this.emailm
      this.d[i].depd = this.depm
      this.d[i].passd = this.passm
      console.log("heyy kannu")

    }
  }
  localStorage.setItem('empData',JSON.stringify(this.d));
console.log(JSON.parse(localStorage.getItem('empData')))

}
  ngOnInit(): void {
    console.log("inside emp dash ngonit")
    console.log(JSON.parse(localStorage.getItem('empData')));
    this.empid=JSON.parse(localStorage.getItem('currentEmpID'))
    this.g=JSON.parse(localStorage.getItem('empData'));
    for(var i=0;i<this.g.length;i++)
    {
      if(this.g[i].idd1==this.empid)
      {
        this.idm=this.g[i].idd1;
        this.emailm=this.g[i].emaild;
        this.namem=this.g[i].named;
        this.passm=this.g[i].passd;
        this.depm=this.g[i].depd;
      }
    }
    console.log("inside emp byeee")
  }

}
