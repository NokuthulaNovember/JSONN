import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {
  course:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.course=this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePage');
  }

}
