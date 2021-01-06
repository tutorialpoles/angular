import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { bookCategoriesData } from '../book-categpries.constant';
import { IBookDetail } from '../book-detail.interface';
import { IBookCategory } from '../book-hyphen.interface';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  public book:IBookDetail = Object.create({});
  public bookCategories:Array<IBookCategory>=[];
  public isSubmitted:boolean;

  public bookFormGroup:FormGroup;
  
  constructor() { 
    this._setCategories();
    this._initFormGroup();
  }

  ngOnInit(): void {
    this._onChangeSubscribe();
  }

  public log(){
    console.log(this.bookFormGroup.valid);
    console.log(this.bookFormGroup.value);
    console.log(this.bookFormGroup.getRawValue());
  }

  

  public updateBook(){
    console.log(this.bookFormGroup.value);
  }

  private _onChangeSubscribe(){
    this.bookFormGroup.get('title').valueChanges.subscribe(value=>{
      console.log(value);
    })
    this.bookFormGroup.get('categoryId').valueChanges.subscribe(value=>{
      console.log(value);
    })
  }

  private _initFormGroup(){
    this.bookFormGroup = new FormGroup({
      'title':new FormControl({value:'google',disabled:false}),
      'author':new FormControl(),
      'categoryId':new FormControl(),
      'price':new FormControl()
    });
  }

  private _setCategories(){
    this.bookCategories = bookCategoriesData;
  }
}
