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
  public isSubmitted:boolean;

  constructor() { 
    this._setCategories();
  }

  ngOnInit(): void {
  }
  public logBookDetails(bookForm:any){
    console.log(bookForm.invalid)
    console.log(this.book);
  }
 
  public saveBook(bookForm:NgForm){
    if(!this.isSubmitted){
      this.isSubmitted = true;
    }
    if(bookForm.valid){
      console.log(this.book);
      console.log("Book has been added");
    }
  }

  private _setCategories(){
    this.bookCategories = bookCategoriesData;
  }
}
