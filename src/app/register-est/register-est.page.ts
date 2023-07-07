import { Component} from '@angular/core';
@Component({
  selector: 'app-register-est',
  templateUrl: './register-est.page.html',
  styleUrls: ['./register-est.page.scss'],
})


export class RegisterEstPage{

public selectedCategory = {
    name: 'RESORT',
    form: 'resortForm'
}

public newCat =
  {name: '', form: ''}
      
  
  categories = [
    { name: 'RESORT', form: 'resortForm' },
    { name: 'ESTABLISHMENTS', form: 'establishmentsForm' },
    { name: 'HERITAGE', form: 'heritageForm' }
  ];

  times = [
    {value: '00:00'},
    {value: '01:00'},
    {value: '02:00'},
    {value: '03:00'},
    {value: '04:00'},
    {value: '05:00'},
    {value: '06:00'},
    {value: '07:00'},
    {value: '08:00'},
    {value: '09:00'},
    {value: '10:00'},
    {value: '11:00'},
    {value: '12:00'},
    {value: '13:00'},
    {value: '14:00'},
    {value: '15:00'},
    {value: '16:00'},
    {value: '17:00'},
    {value: '18:00'},
    {value: '19:00'},
    {value: '20:00'},
    {value: '21:00'},
    {value: '22:00'},
    {value: '23:00'},
    {value: '24:00'}
    
  ]
  
  resortForm = {  

    name: '',
    email: '',
    // Define fields for resort form
    // Example: name: string, email: string, etc.
  };

  establishmentsForm = {
    // Define fields for establishments form
  };

  heritageForm = {
    // Define fields for heritage form
  };

  constructor() {}
  

  onCategoryChange(){
    // Reset the form fields based on the selected category

   /*  this.selectedCategory = {
      name:this.selectedCategory.name ,
      form:this.selectedCategory.form
    } */ 
  }

  onSubmit() {
    // Handle form submission based on the selected category
    switch (this.selectedCategory.name) {
      case "RESORT":
        // Handle resort form submission
        break;
      case "ESTABLISHMENTS":
        // Handle establishments form submission
        break;
      case "HERITAGE":
        // Handle heritage form submission
        break;
      default:
        alert(this.selectedCategory.name);
        break;
    }
  }
}
