import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, ValidatorFn, AbstractControl} from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { IRoleReportingTo } from '../models/RoleReportingTo';
import * as Xlsx from 'xlsx';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
  animations: fuseAnimations
})
export class SellerComponent implements OnInit, OnDestroy {
  form: FormGroup;
  sellers: any[] = [];
  states: any[] = [{'id':1,'description':'karnataka'}];
  rowData: any[] = [];
  columnDef: any[] = [];

  isRadioButtonTouched: boolean = true;

  constructor(private _formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    // Reactive Form
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      promises: ['', Validators.required],
      flat: ['', Validators.required],
      road: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', Validators.required],
      status: ['resident', Validators.required],     
      pan: ['', [Validators.required,this.panValidator()]],
      email: [''],
      phone: [''],
      share: ['']
    });
    
    this.columnDef = [{ 'header': 'Name', 'field': 'name', 'type': 'label' },
    { 'header': 'Employee ID', 'field': 'empId', 'type': 'label' },
    { 'header': 'Email', 'field': 'email', 'type': 'label' },
    { 'header': 'Mobile', 'field': 'phone', 'type': 'label' },
    { 'header': 'Role', 'field': 'role', 'type': 'label' },
    { 'header': 'Date', 'field': 'dates', 'type': 'label' },
    { 'header': 'Status', 'field': 'status', 'type': 'label' }
    ];

    this.rowData = [
      {
        'id': '1',
        'name': 'Reyna',
        'empId': 435345345,
        'email': 'test@gmail.com',
        'phone': '23456456456',
        'roleId': 2,
        'role': 'MD',
        'dates': '01/03/2020 to till date',
        'status': 'Active'
      },
      {
        'id': '1',
        'name': 'koli',
        'empId': 435345345,
        'email': 'test@gmail.com',
        'phone': '23456456456',
        'roleId': 2,
        'role': 'MD',
        'dates': '01/03/2020 to till date',
        'status': 'Active'
      },
      {
        'id': '1',
        'name': 'sachin',
        'empId': 435345345,
        'email': 'test@gmail.com',
        'phone': '23456456456',
        'roleId': 2,
        'role': 'MD',
        'dates': '01/03/2020 to till date',
        'status': 'Active'
      },
      {
        'id': '1',
        'name': 'dhoni',
        'empId': 435345345,
        'email': 'test@gmail.com',
        'phone': '23456456456',
        'roleId': 2,
        'role': 'MD',
        'dates': '01/03/2020 to till date',
        'status': 'Active'
      },

    ];
  }

  clear() {
    this.form.reset();
  }

  save() {

    if (this.form.valid) {
      let model = this.form.value;
      let startDate = new Date(this.form.value);
    }
  }

  /**
     * On destroy
     */
  ngOnDestroy(): void {
  }

  selectedRows(eve) {
    eve.selected[0]['gender'] = 1;
    eve.selected[0]['birthDate'] = new Date();
    eve.selected[0]['startDate'] = new Date();
    eve.selected[0]['toDate'] = new Date();
    this.form.patchValue(eve.selected[0]);


    var ele = document.getElementsByClassName('mat-tab-label') as HTMLCollectionOf<HTMLElement>;
    ele[0].click();

  }

  download() {
    const ws: Xlsx.WorkSheet = Xlsx.utils.json_to_sheet(this.rowData);
    const wb: Xlsx.WorkBook = Xlsx.utils.book_new();
    Xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
    Xlsx.writeFile(wb, '.xls');
  }

  showSeller(model:any) {
    this.form.patchValue(model);
  }
  addCoSeller() {
    if (this.form.valid) {
      this.sellers = [this.form.value, ...this.sellers];
    
      this.form.reset();

    }
    else {
      if (this.form.get("status").value)
        this.isRadioButtonTouched = true;
      else
        this.isRadioButtonTouched = false;

      Object.keys(this.form.controls).forEach(field => { 
        const control = this.form.get(field);          
        control.markAsTouched({ onlySelf: true });
      });
      //this.form.markAsTouched({ onlySelf: true });
     // this.form.markAllAsTouched();
    }
  }

  panValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      // if input field is empty return as valid else test
      const ret = (control.value !== '') ? new RegExp('^[A-Za-z]{5}[0-9]{4}[A-Za-z]$').test(control.value) : true;
      return !ret ? { 'invalidNumber': { value: control.value } } : null;
    };
  }
}
