import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  
  posts: any = [];
  count: any;

  constructor(private ps:PostService){}

  ngOnInit(){

    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
        let count = 0;
        data.forEach(function (value) {
          // console.log(value.content);
          count = count + parseFloat(value.content); 
        });
        this.count = count; //get the total value of all bills
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deletePost(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
