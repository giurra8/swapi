import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '@services/api.service';
import { Category } from '@utils/interfaces'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  categories: Category[] = [
    { value: "people", viewValue: "People"},
    { value: "planets", viewValue: "Planets"},
    { value: "films", viewValue: "Films"},
    { value: "species", viewValue: "Species"},
    { value: "vehicles", viewValue: "Vehicles"},
    { value: "starships", viewValue: "Starships"}
  ];
  searchTerm: string;
  selectedCategory: string;
  httpClient: HttpClient;
  filteredResources;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      searchTerm: ['', ],
      selectedCategory: ['', ],
    })
  }

  onSubmit() {
    this.searchTerm = this.form.get('searchTerm')?.value;
    this.selectedCategory = this.form.get('selectedCategory')?.value;
  }

  ngOnInit(): void {
  }

  getCategory(category: string) {
    this.filteredResources = this.apiService.getCategory(category);
  }

}
