import { Component, OnInit } from '@angular/core';
import { IPUser } from 'src/Models/Model';
import { ServicesService } from './../services.service';
import { faTimesCircle, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface PeriodicElement {
  id: number;
  name: string;
  family: string;
}
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class PersonComponent implements OnInit {
  constructor(
    private _userService: ServicesService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  personData: PeriodicElement[] = [];
  name: string = '';
  family: string = '';
  active: boolean = false;
  successMessage: string = '';
  faTimesCircle = faTimesCircle;
  faUserEdit: any = faUserEdit;
  staticAlertClosed = false;
  showPersonInModal: any = '';
  removeId: number = -1;
  private _success = new Subject<string>();
  ngOnInit(): void {
    this.personData = this._userService.getData();
    setTimeout(() => (this.staticAlertClosed = true), 4000);
  }
  open(content, person: any, idx: number) {
    this.modalService.open(content);
    this.showPersonInModal = person;
    this.removeId = idx;
  }
  insertData(): void {
    var lng = this.personData.length - 1;
    var id = this.personData[lng].id + 1;
    this.personData.push(new IPUser(id, this.name, this.family, this.active));
    console.log('person', this.personData);
  }
  removeUser(id: number) {
    this.personData.splice(id, 1);
    this._success.subscribe((message) => (this.successMessage = message));
    this._success
      .pipe(debounceTime(3000))
      .subscribe(() => (this.successMessage = ''));
    this._success.next(`user removed`);
  }
}
