import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { EmployerService } from "../services/employer.service";
import { EmployeeService } from "../services/employee.service";
import { Employee } from '../models/employee.model';
import { Employer } from "../models/employer.model"
import { TransferService } from '../services/transfer.service';
import { Router } from '@angular/router';
import { MatDialogRef, ErrorStateMatcher } from '@angular/material';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {
  typeOfAccount: string
  FreelancerCreateForm: FormGroup
  BusinessCreateForm: FormGroup
  submitted: boolean = false
  employee: object
  matcher = new MyErrorStateMatcher
  skills = ["Auditing", "AutoCAD", "Automotive", "Art", "Analytical Skills", "Adobe Photoshop", "Art Direction", "Automation", "Adobe Illustrator", "Agile Methodologies", "A + Certified - A320", "A330 - AC Drives", "AC Nielsen - ACPI", "ACR - ADEA", "ADFS - ADS-B", "ADSI - AHDL", "AHLTA - AIX Administration", "AJAX - AMBA", "AMBA AHB - AMX Programmer", "ANCC - APA", "APAC - APT", "APV - ARMA", "ARP - ASK MANMAN", "ASME Standards - AT&T Business Direct", "AT&T Connect - ATV Insurance", "AU - AWS (DO NOT USE TAG Amazon Web Services)", "AWS CWI - Ableton Live", "Ableton Push - Academic Achievement", "Academic Administration - Accelerated Reader", "Accelerated Testing - Access to Information", "Access to Justice - Account Direction", "Account Directors - AccountRight", "AccountRight Live - Accredited Cruise Counselor", "Accredited Staging Professional - Aconex", "Acoustic - Acronis", "Acronis True Image - Active Adult Communities", "Active Directory - ActiveX Data Objects (ADO)", "Activism - Acute Care", "Acute Coronary Syndrome - Adaptive Control", "Adaptive Equipment - Ademco", "Adenovirus - Administration CRM et ERP", "Administration Jobs - Adobe Certified", "Adobe Color - Adobe Marketing Cloud", "Adobe Media Encoder - Adoption", "Adoption Law - Advanced", "Advanced Cardiac Life Support (ACLS) - Advertising Operations", "Advertising Research - Aerobics", "Aerodynamics - Affiliate Window", "Affiliates - African Development", "African Diaspora - Agency Relationship Management", "Agency Selection - Agile Methodologies", "Agile Modeling - Agricultural Law", "Agricultural Lending - Air Defense", "Air Duct Cleaning - Airborne School", "Airbrush - Airline Economics", "Airline Management - AlarmPoint", "Albanian - Algorithm Design", "Algorithm Development - Allergy Testing", "Allgemein - Alternate Channels", "Alternate Reality Games - Altium", "Altium Designer - Amazon CloudFront", "Amazon Dynamodb - Amdocs", "Amek 9098i - American Studies", "American Welding Society (AWS) - Anaerobic Digestion", "Anaerobic Microbiology - Analytica", "Analytical Applications - Analytique", "Analyzation - Android SDK", "Android Studio - Animal Care", "Animal Chiropractic - Animation Direction", "Animation Programming - Annual Reports", "Annual Returns - Anti-aging Products", "Anti-bribery - Antique Restoration", "Antiques - Apache Cordova", "Apache Derby - Apogee", "Apollo - Appellate Practice", "Appetizers - Apple TV", "Apple Watch - Application Management Services", "Application Migrations - Applications Development Management", "Applications Software Development - Apportionment", "Appraisers - Aquariums", "Aquatic Ecology - ArcGIS", "ArcGIS Engine - Archery", "Archestra - Architectural Plans", "Architectural Programming - Archtics Ticketing System", "Arcplan - Arista", "Arithmetic - Art Consulting", "Art Criticism - ArtBase", "ArtCAM - Articulate Studio", "Articulate Suite - Artlantis Studio", "Arts & Crafts - Ashtanga", "Asia Business Development - Asphalt Shingles", "Aspose - Assessment Tools", "Assessment for Learning - Asset-Backed Security (ABS)", "Association of Chartered Certified Accountants (ACCA) - Asus", "Asylum - Athletics", "Atlas - Attachment Theory", "Attendance Management - Audience Response Systems", "Audience Segmentation - Audio Plug-Ins", "Audio Post Production - Audit Committee", "Audit Management - Aurora HDR", "Australasia - Auto Glass Replacement", "Auto Injuries - AutoMapper", "AutoMod - Autodesk Vault", "Autodock - Automobile Liability", "Automotive - Automotive Technology", "Automotive Writing - Avast", "Avatars - Avid Newscutter", "Avid Studio - Aweber", "Awk - asdf", "Advising", "Business Analysis", "Budgeting", "Business Strategy", "Business Process Improvement", "Business Services", "Business Planning", "Branding", "Business-to-Business (B2B)", "Business Intelligence", "Business Process", "Banking Software", "Biography", "Biology", "Bioremediation", "Biotransformation", "Black Box Testing", "Blacksmithing", "Graphic design", "Data analytics", "Software proficiencies", "Programming", "Equipment/machinery operation", "Typing/Word processing", "Systems administration", "Spreadsheets", "Slideshow Presentations", "Email management", "Accounting", "Clerical skills", "Mathematics", "Copywriting", "Copyediting", "Engineering", "Website design", "Medical coding", "Record keeping", "Data entry", "Search engine optimization(SEO)"]

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private employerService: EmployerService,
    public transferService: TransferService,
    private router: Router,
    private matDialogRef: MatDialogRef<AccountCreateComponent>
  ) { }



  ngOnInit() {
    this.FreelancerCreateForm = this.formBuilder.group({
      username: new FormControl ("", Validators.required),
      name: new FormControl("", Validators.required),
      email: new FormControl ("", [Validators.required, Validators.email]),
      password: new FormControl ("", [Validators.required, Validators.minLength(6)]),
      profilePicture: '',
      phoneNumber: '',
      location: '',
      linkdin: '',
      faceBook: '',
      instagram: '',
      twitter: '',
      skills: '',
      about: ''
    });

    this.BusinessCreateForm = this.formBuilder.group({
      username: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      phoneNumber: "",
      location: "",
      website: "",
      about: ""
    })

  }

  fc() {
    return this.FreelancerCreateForm.controls
  }

  bc() {
    return this.BusinessCreateForm.controls
  }

  handleButton(event) {
    this.typeOfAccount = event.value
  }

  // saveEmployee() {
  //   return new Employee().deserialize(this.AccountCreateForm.value)
  // }

  submit(Form) {
    sessionStorage.setItem("account", this.typeOfAccount)
    this.matDialogRef.close(Form.value)

  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}