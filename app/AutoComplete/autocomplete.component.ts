import {Component, ElementRef} from '@angular/core';

@Component({
    selector: 'my-app',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    template: `
        <div class="container" >
            <div class="input-field col s12">
              <input id="country" type="text" class="validate filter-input" [(ngModel)]=query (keyup)=filter()>
              <label for="country">Country</label>
            </div>
            <div class="suggestions" *ngIf="filteredList.length > 0">
                <ul *ngFor="#item of filteredList" >
                    <li >
                        <a (click)="select(item)">{{item}}</a>
                    </li>
                </ul>
            </div>
        </div>
    	`,
    styles:[`.suggestions{
	border:solid 1px #f1f1f1;
	position:absolute;
	width:600px;
	background: white;
}

.suggestions ul{
	padding: 0px;
	margin: 0px;
}

.container{
	width:600px;
	margin-left:10px;
	margin-top:10px;
}
.suggestions ul li{
	list-style: none;
	padding: 0px;
	margin: 0px;
}

.suggestions ul li a{
	padding:5px;
	display: block;
	text-decoration: none;
	color:#7E7E7E;
}

.suggestions ul li a:hover{
	background-color: #f1f1f1;
}
    `],
})

export class AutoCompleteComponent {
    public query = '';
    public countries = [ "Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus","Belgium","Bosnia & Herzegovina",
        "Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Georgia",
        "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein",
        "Lithuania","Luxembourg","Macedonia","Malta","Moldova","Monaco","Montenegro","Netherlands",
        "Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Slovakia",
        "Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];
    public filteredList = [];
    public elementRef;

    constructor(myElement: ElementRef) {
        this.elementRef = myElement;
    }

    filter() {
        if (this.query !== ""){
            this.filteredList = this.countries.filter(function(el){
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }else{
            this.filteredList = [];
        }
    }

    select(item){
        this.query = item;
        this.filteredList = [];
    }

    handleClick(event){
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if(!inside){
            this.filteredList = [];
        }
    }


}