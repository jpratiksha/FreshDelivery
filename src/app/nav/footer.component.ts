import { Component } from '@angular/core'

@Component({
selector: 'footer-bar',
templateUrl:'./footer.component.html',
styles: [`
        .nav.navbar-nav {font-size: 20px; background-color: #14361d }
        .container-fluid {background-color: #14361d}
        #searchForm {margin-right:100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
`]
})

export class NavBarComponent{

}