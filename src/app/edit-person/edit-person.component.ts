import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from './../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss'],
})
export class EditPersonComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _service: ServicesService,
    private router: Router
  ) {}
  id: number;
  editData: any[] = [];
  allUsersData: any[] = [];
  idx: number;
  name: string = '';
  family: string = '';
  active: boolean = false;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      (data) => (this.id = parseInt(data.get('id')))
    );
    let tmp = this._service.getData();
    this.allUsersData = tmp;
    this.editData = this.allUsersData.filter((value) => value.id === this.id);
    this.name = this.editData[0].name;
    this.family = this.editData[0].family;
    this.active = this.editData[0].active;
  }
  editPerson() {
    if (!this.name.length || !this.family.length) {
      return;
    }
    for (let index = 0, len = this.allUsersData.length; index < len; ++index) {
      if (this.allUsersData[index].id === this.id) {
        this.idx = index;
        break;
      }
    }
    this.allUsersData[this.idx].name = this.name;
    this.allUsersData[this.idx].family = this.family;
    this.allUsersData[this.idx].active = this.active;
    this.router.navigate(['/person']);
  }
}
