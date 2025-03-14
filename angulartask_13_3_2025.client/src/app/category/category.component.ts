import { Component } from '@angular/core';
import { APIService } from '../Services/-api.service';  // Import the service
@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: any[] = [];
  errorMessage: string = '';

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    // Fetch all categories on component initialization
    this.apiService.getAllItems().subscribe(
      data => this.categories = data,
      error => this.errorMessage = error.message
    );
  }
}
