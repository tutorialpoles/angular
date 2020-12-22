import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { bookCategoriesData } from '../book-categpries.constant';
import { IBookDetail } from '../book-detail.interface';
import { IBookCategory } from '../book-hyphen.interface';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  public book:IBookDetail = Object.create({});
  public bookCategories:Array<IBookCategory>=[];

  constructor() { 
    this._setCategories();
  }

  ngOnInit(): void {
  }

  public getValue(bookForm:NgForm){
    return JSON.stringify(bookForm.value);
  }

  public logBookDetails(){
    console.log(this.book);
  }

  private _setCategories(){
    this.bookCategories = bookCategoriesData;
  }
}
