import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EmployeeService } from '../services/employee.service';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {
  FreelancerUpdateForm: FormGroup;
  BusinessUpdateForm: FormGroup;
  skills = ["Auditing", "AutoCAD", "Automotive", "Art", "Analytical Skills", "Adobe Photoshop", "Art Direction", "Automation", "Adobe Illustrator", "Agile Methodologies", "A + Certified - A320", "A330 - AC Drives", "AC Nielsen - ACPI", "ACR - ADEA", "ADFS - ADS-B", "ADSI - AHDL", "AHLTA - AIX Administration", "AJAX - AMBA", "AMBA AHB - AMX Programmer", "ANCC - APA", "APAC - APT", "APV - ARMA", "ARP - ASK MANMAN", "ASME Standards - AT&T Business Direct", "AT&T Connect - ATV Insurance", "AU - AWS (DO NOT USE TAG Amazon Web Services)", "AWS CWI - Ableton Live", "Ableton Push - Academic Achievement", "Academic Administration - Accelerated Reader", "Accelerated Testing - Access to Information", "Access to Justice - Account Direction", "Account Directors - AccountRight", "AccountRight Live - Accredited Cruise Counselor", "Accredited Staging Professional - Aconex", "Acoustic - Acronis", "Acronis True Image - Active Adult Communities", "Active Directory - ActiveX Data Objects (ADO)", "Activism - Acute Care", "Acute Coronary Syndrome - Adaptive Control", "Adaptive Equipment - Ademco", "Adenovirus - Administration CRM et ERP", "Administration Jobs - Adobe Certified", "Adobe Color - Adobe Marketing Cloud", "Adobe Media Encoder - Adoption", "Adoption Law - Advanced", "Advanced Cardiac Life Support (ACLS) - Advertising Operations", "Advertising Research - Aerobics", "Aerodynamics - Affiliate Window", "Affiliates - African Development", "African Diaspora - Agency Relationship Management", "Agency Selection - Agile Methodologies", "Agile Modeling - Agricultural Law", "Agricultural Lending - Air Defense", "Air Duct Cleaning - Airborne School", "Airbrush - Airline Economics", "Airline Management - AlarmPoint", "Albanian - Algorithm Design", "Algorithm Development - Allergy Testing", "Allgemein - Alternate Channels", "Alternate Reality Games - Altium", "Altium Designer - Amazon CloudFront", "Amazon Dynamodb - Amdocs", "Amek 9098i - American Studies", "American Welding Society (AWS) - Anaerobic Digestion", "Anaerobic Microbiology - Analytica", "Analytical Applications - Analytique", "Analyzation - Android SDK", "Android Studio - Animal Care", "Animal Chiropractic - Animation Direction", "Animation Programming - Annual Reports", "Annual Returns - Anti-aging Products", "Anti-bribery - Antique Restoration", "Antiques - Apache Cordova", "Apache Derby - Apogee", "Apollo - Appellate Practice", "Appetizers - Apple TV", "Apple Watch - Application Management Services", "Application Migrations - Applications Development Management", "Applications Software Development - Apportionment", "Appraisers - Aquariums", "Aquatic Ecology - ArcGIS", "ArcGIS Engine - Archery", "Archestra - Architectural Plans", "Architectural Programming - Archtics Ticketing System", "Arcplan - Arista", "Arithmetic - Art Consulting", "Art Criticism - ArtBase", "ArtCAM - Articulate Studio", "Articulate Suite - Artlantis Studio", "Arts & Crafts - Ashtanga", "Asia Business Development - Asphalt Shingles", "Aspose - Assessment Tools", "Assessment for Learning - Asset-Backed Security (ABS)", "Association of Chartered Certified Accountants (ACCA) - Asus", "Asylum - Athletics", "Atlas - Attachment Theory", "Attendance Management - Audience Response Systems", "Audience Segmentation - Audio Plug-Ins", "Audio Post Production - Audit Committee", "Audit Management - Aurora HDR", "Australasia - Auto Glass Replacement", "Auto Injuries - AutoMapper", "AutoMod - Autodesk Vault", "Autodock - Automobile Liability", "Automotive - Automotive Technology", "Automotive Writing - Avast", "Avatars - Avid Newscutter", "Avid Studio - Aweber", "Awk - asdf", "Advising", "Business Analysis", "Budgeting", "Business Strategy", "Business Process Improvement", "Business Services", "Business Planning", "Branding", "Business-to-Business (B2B)", "Business Intelligence", "Business Process", "Banking Software", "Biography", "Biology", "Bioremediation", "Biotransformation", "Black Box Testing", "Blacksmithing", "Graphic design", "Data analytics", "Software proficiencies", "Programming", "Equipment/machinery operation", "Typing/Word processing", "Systems administration", "Spreadsheets", "Slideshow Presentations", "Email management", "Accounting", "Clerical skills", "Mathematics", "Copywriting", "Copyediting", "Engineering", "Website design", "Medical coding", "Record keeping", "Data entry", "Search engine optimization(SEO)"]
  typeOfAccount: string = sessionStorage.getItem("account")
  adminAccountType = this.data.typeOfAccount

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private employerService: EmployerService,
    private matDialogRef: MatDialogRef<AccountUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.FreelancerUpdateForm = this.formBuilder.group({
      username: this.data.account.username,
      name: this.data.account.name,
      email: this.data.account.email,
      password: this.data.account.password,
      profilePicture: this.data.account.profilePicture,
      phoneNumber: this.data.account.phoneNumber,
      location: this.data.account.location,
      linkdin: this.data.account.linkdin,
      faceBook: this.data.account.faceBook,
      instagram: this.data.account.instagram,
      twitter: this.data.account.twitter,
      skills: this.data.account.skills,
      about: this.data.account.about
    });

    this.BusinessUpdateForm = this.formBuilder.group({
      username: this.data.account.username,
      name: this.data.account.name,
      email: this.data.account.email,
      password: this.data.account.password,
      phoneNumber: this.data.account.phoneNumber,
      location: this.data.account.location,
      website: this.data.account.website,
      about: this.data.account.about
    })
  }



  submit(AccountUpdateForm) {
    console.log(AccountUpdateForm.value)
    this.matDialogRef.close(AccountUpdateForm.value)

  }
}