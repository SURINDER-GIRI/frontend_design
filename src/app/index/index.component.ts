import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import {NgZone} from '@angular/core';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public sid : boolean   ;
  public mod ;
  public width ;
  public height;
  public path;


  constructor( private ngZone:NgZone,private router:Router) { 


  		//  window.onresize = (e) =>
    // {
        ngZone.run(() => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            if(this.width <= 850 )
            {
              this.sid = false;
              this.mod = "over";
            }
            else{
              
              this.sid = true;
              this.mod = "side";

            }
        });
    }
  // }

  ngOnInit() {
  }

  nav(agent){

    this.router.navigateByUrl("/index/(" + agent + ":" +agent +")" ) ;
  }

}
