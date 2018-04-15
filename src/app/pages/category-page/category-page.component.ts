import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, Renderer } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {


  private categoryList: Category[] = [];

  constructor(public categoryService: CategoryService){

  }

  ngOnInit() {

    window.scroll(0,0)
    this.categoryService.getCategorys().subscribe(cateResponse=>{
       this.categoryList = cateResponse;
    })
  }



  saveCategory(name: string){
    sessionStorage.setItem("categoryName", name);
  }



}

