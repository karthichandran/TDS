import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { IRoleReportingTo} from '../models/RoleReportingTo';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss'],
  animations: fuseAnimations
})
export class UserRoleComponent implements OnInit, OnDestroy {
  form: FormGroup;
  reportingToDDL: IRoleReportingTo[] = [{ id: 1, description: 'Admin' }, { id: 2, description: 'MD' }, { id: 3, description: 'Manager' }, { id: 4, description: 'Ceo' }];
  rowData: any[] = [];
  columnDef: any[] = [];

  constructor(private _formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    // Reactive Form
    this.form = this._formBuilder.group({   
     
      reportingTo: ['', Validators.required],
      isOrganizationRole: false,
      role: ['', Validators.required]
    });
    this.columnDef = [{ 'header': 'Name', 'field': 'name', 'type': 'textbox' },
      { 'header': 'Last Name', 'field': 'lastName', 'type': 'label' },
      { 'header': 'Note', 'field': 'notes', 'type': 'checkbox','checkall':true },
      { 'header': 'Seletions', 'field': 'id', 'type': 'selection', 'options': this.reportingToDDL }];

    this.rowData = [
      {
        'id': '1',
        'name': 'Abbott',
        'lastName': 'Keitch',
        'avatar': 'assets/images/avatars/Abbott.jpg',
        'nickname': 'Royalguard',
        'company': 'Saois',
        'jobTitle': 'Digital Archivist',
        'email': 'abbott@withinpixels.com',
        'phone': '+1-202-555-0175',
        'address': '933 8th Street Stamford, CT 06902',
        'birthday': '',
        'notes': true
      },
      {
        'id': '2',
        'name': 'Arnold',
        'lastName': 'Matlock',
        'avatar': 'assets/images/avatars/Arnold.jpg',
        'nickname': 'Wanderer',
        'company': 'Laotcone',
        'jobTitle': 'Graphic Artist',
        'email': 'arnold@withinpixels.com',
        'phone': '+1-202-555-0141',
        'address': '906 Valley Road Michigan City, IN 46360',
        'birthday': '',
        'notes': false
      },
      {
        'id': '4',
        'name': 'Barrera',
        'lastName': 'Bradbury',
        'avatar': 'assets/images/avatars/Barrera.jpg',
        'nickname': 'Jackal',
        'company': 'Unizim',
        'jobTitle': 'Graphic Designer',
        'email': 'barrera@withinpixels.com',
        'phone': '+1-202-555-0196',
        'address': '183 River Street Passaic, NJ 07055',
        'birthday': '',
        'notes': true
      },
      {
        'id': '2',
        'name': 'Blair',
        'lastName': 'Strangeway',
        'avatar': 'assets/images/avatars/Blair.jpg',
        'nickname': 'Knight',
        'company': 'Conedubdax',
        'jobTitle': 'Visual Designer',
        'email': 'blair@withinpixels.com',
        'phone': '+1-202-555-0118',
        'address': '143 Jones Street Eau Claire, WI 54701',
        'birthday': '',
        'notes': false
      },
      {
        'id': '1',
        'name': 'Boyle',
        'lastName': 'Winters',
        'avatar': 'assets/images/avatars/Boyle.jpg',
        'nickname': 'Jester',
        'company': 'Newo',
        'jobTitle': 'Catalogue Illustrator',
        'email': 'boyle@withinpixels.com',
        'phone': '+1-202-555-0177',
        'address': '218 Pearl Street Brandon, FL 33510',
        'birthday': '',
        'notes': true
      },
      {
        'id': '3',
        'name': 'Christy',
        'lastName': 'Camacho',
        'avatar': 'assets/images/avatars/Christy.jpg',
        'nickname': 'Mist',
        'company': 'uniway',
        'jobTitle': '3D Animator',
        'email': 'christy@withinpixels.com',
        'phone': '+1-202-555-0136',
        'address': '329 Bridge Street Desoto, TX 75115',
        'birthday': '',
        'notes': false
      },
      {
        'id': '2',
        'name': 'Copeland',
        'lastName': 'Redcliff',
        'avatar': 'assets/images/avatars/Copeland.jpg',
        'nickname': 'Cloudlaw',
        'company': 'Tempron',
        'jobTitle': 'Multimedia Artist',
        'email': 'copeland@withinpixels.com',
        'phone': '+1-202-555-0107',
        'address': '956 6th Avenue North Bergen, NJ 0704',
        'birthday': '',
        'notes': true
      },
      {
        'id': '4',
        'name': 'Estes',
        'lastName': 'Stevens',
        'avatar': 'assets/images/avatars/Estes.jpg',
        'nickname': 'Roamer',
        'company': 'nam-dex',
        'jobTitle': 'Special Effects Artist',
        'email': 'estes@withinpixels.com',
        'phone': '+1-202-555-0113',
        'address': '664 York Street Cambridge, MA 02138',
        'birthday': '',
        'notes': false
      },
      {
        'id': '2',
        'name': 'Harper',
        'lastName': 'MacGuffin',
        'avatar': 'assets/images/avatars/Harper.jpg',
        'nickname': 'Tempest',
        'company': 'runcane',
        'jobTitle': 'Application Developer',
        'email': 'harper@withinpixels.com',
        'phone': '+1-202-555-0173',
        'address': '738 Route 11 Cornelius, NC 28031',
        'birthday': '',
        'notes': true
      },
      {
        'id': '4',
        'name': 'Helen',
        'lastName': 'Sheridan',
        'avatar': 'assets/images/avatars/Helen.jpg',
        'nickname': 'Magicbattler',
        'company': 'Subhow',
        'jobTitle': 'Content Developer',
        'email': 'helen@withinpixels.com',
        'phone': '+1-202-555-0163',
        'address': '194 Washington Avenue Saint Petersburg, FL 33702',
        'birthday': '',
        'notes': false
      },
      {
        'id': '2',
        'name': 'Henderson',
        'lastName': 'Cambias',
        'avatar': 'assets/images/avatars/Henderson.jpg',
        'nickname': 'Blizzard',
        'company': 'Howcom',
        'jobTitle': 'Web Designer',
        'email': 'henderson@withinpixels.com',
        'phone': '+1-202-555-0151',
        'address': '686 Roosevelt Avenue Oviedo, FL 32765',
        'birthday': '',
        'notes': true
      },
      {
        'id': '3',
        'name': 'Josefina',
        'lastName': 'Lakefield',
        'avatar': 'assets/images/avatars/Josefina.jpg',
        'nickname': 'Violet',
        'company': 'Gecko',
        'jobTitle': 'Web Developer',
        'email': 'josefina@withinpixels.com',
        'phone': '+1-202-555-0160',
        'address': '202 Hartford Road Lynchburg, VA 24502',
        'birthday': '',
        'notes': false
      },
      {
        'id': '3',
        'name': 'Katina',
        'lastName': 'Bletchley',
        'avatar': 'assets/images/avatars/Katina.jpg',
        'nickname': 'Rose',
        'company': 'Lexicom',
        'jobTitle': 'Software Designer',
        'email': 'katina@withinpixels.com',
        'phone': '+1-202-555-0186',
        'address': '219 Woodland Road Valrico, FL 33594',
        'birthday': '',
        'notes': true
      },
      {
        'id': '2',
        'name': 'Lily',
        'lastName': 'Peasegood',
        'avatar': 'assets/images/avatars/Lily.jpg',
        'nickname': 'Star',
        'company': 'zooflex',
        'jobTitle': 'Software Specialist',
        'email': 'lily@withinpixels.com',
        'phone': '+1-202-555-0115',
        'address': '305 Willow Drive Superior, WI 54880',
        'birthday': '',
        'notes': false
      },
      {
        'id': '3',
        'name': 'Mai',
        'lastName': 'Nox',
        'avatar': 'assets/images/avatars/Mai.jpg',
        'nickname': 'Violetmage',
        'company': 'quadzone',
        'jobTitle': 'Software Engineer',
        'email': 'mai@withinpixels.com',
        'phone': '+1-202-555-0199',
        'address': '148 Heather Lane Mcminnville, TN 37110',
        'birthday': '',
        'notes': true
      },
      {
        'id': '1',
        'name': 'Nancy',
        'lastName': 'Jaggers',
        'avatar': 'assets/images/avatars/Nancy.jpg',
        'nickname': 'Silverwarden',
        'company': 'Opetamnix',
        'jobTitle': 'Software Architect',
        'email': 'nancy@withinpixels.com',
        'phone': '+1-202-555-0120',
        'address': '345 Laurel Lane Union City, NJ 07087',
        'birthday': '',
        'notes': false
      },
      {
        'id': '1',
        'name': 'Nora',
        'lastName': 'Franklin',
        'avatar': 'assets/images/avatars/Nora.jpg',
        'nickname': 'Katanachanter',
        'company': 'Saoway',
        'jobTitle': 'Database Coordinator',
        'email': 'nora@withinpixels.com',
        'phone': '+1-202-555-0172',
        'address': '572 Rose Street Summerfield, FL 34491',
        'birthday': '',
        'notes': true
      },
      {
        'id': '1',
        'name': 'Odessa',
        'lastName': 'Goodman',
        'avatar': 'assets/images/avatars/Odessa.jpg',
        'nickname': 'Rose',
        'company': 'transace',
        'jobTitle': 'Database Administration Manager',
        'email': 'odessa@withinpixels.com',
        'phone': '+1-202-555-0190',
        'address': '527 Jefferson Court Conyers, GA 30012',
        'birthday': '',
        'notes': false
      },
      {
        'id': '1',
        'name': 'Reyna',
        'lastName': 'Preece',
        'avatar': 'assets/images/avatars/Reyna.jpg',
        'nickname': 'Holydawn',
        'company': 'Dingex',
        'jobTitle': 'Data Processing Planner',
        'email': 'reyna@withinpixels.com',
        'phone': '+1-202-555-0116',
        'address': '297 Strawberry Lane Faribault, MN 55021',
        'birthday': '',
        'notes': true
      }
     
    ];
  }

  clear() {
    this.form.reset();
  }

  save() {
   
    if (this.form.valid) {
      let model = this.form.value;
    }
  }

  /**
     * On destroy
     */
  ngOnDestroy(): void {
  }
}
