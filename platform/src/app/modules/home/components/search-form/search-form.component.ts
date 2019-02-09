import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.searchForm = this.fb.group({
      week: ['', Validators.required],
      day: ['', Validators.required]
    })
  }

  ngOnInit() { 
    
  }

  onSearch(){
    console.log(this.searchForm.value);
  }

}
