

import { CoursesProvider } from '../../providers/courses/courses';


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoursePage } from '../course/course';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})

export class HomePage {
 course:any;
 arrcourses=[];

 constructor(public navCtrl: NavController,private courseP:CoursesProvider ) {

  courseP.getCourses().subscribe(res=>{
    console.log("response:",res)
    this.course = res;
    this.arrcourses=this.course.courses
    console.log("response",this.course);

  })


 }
submit(course:any){
  
  this.navCtrl.push(CoursePage,{data:course});
}
}