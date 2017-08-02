import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalcPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html',
})
export class CalcPage {
num:string="";
flag:number=0;
no1:number=0;
no2:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
pressed0(){
  this.num+="0";
}
pressed1(){
  this.num+="1";
}
pressed2(){
  this.num+="2";
}
pressed3(){
  this.num+="3";
}
pressed4(){
  this.num+="4";
}
pressed5(){
  this.num+="5";
}
pressed6(){
  this.num+="6";
}
  pressed7()
  {
    this.num+="7";
  }
  pressed8(){
  this.num+="8";
}
pressed9(){
  this.num+="9";
}
pressedc(){
  this.num="";
}
pressedBackSpace(){
  this.num=this.num.substring(0,this.num.length-1);
}
pressedDot(){
  this.num+=".";
}
pressedPrc()
{
  this.no2=+this.num;
  this.num="";
  this.num=((this.no1*this.no2)/100)+"";
}
pressedplus()
{
  this.no1=+this.num;
  this.num="";
  this.flag=1;
}
pressedMinus(){
  this.no1=+this.num;
  this.num="";
  this.flag=2;
}
pressedMult(){
   this.no1=+this.num;
   this.num="";
  this.flag=3;
}
pressedDiv(){
  this.no1=+this.num;
  this.num="";
  this.flag=4;
}
pressedEq(){
  this.no2=+this.num;
  this.num="";
  if(this.flag==1){
    this.num=(this.no1+this.no2)+"";

  }

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcPage');
  }

}
