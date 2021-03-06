"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AutoCompleteComponent = (function () {
    function AutoCompleteComponent(myElement) {
        this.query = '';
        this.countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia & Herzegovina",
            "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
            "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein",
            "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands",
            "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia",
            "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
        this.filteredList = [];
        this.elementRef = myElement;
    }
    AutoCompleteComponent.prototype.filter = function () {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    AutoCompleteComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    AutoCompleteComponent.prototype.handleClick = function (event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
    };
    AutoCompleteComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            host: {
                '(document:click)': 'handleClick($event)',
            },
            template: "\n        <div class=\"container\" >\n            <div class=\"input-field col s12\">\n              <input id=\"country\" type=\"text\" class=\"validate filter-input\" [(ngModel)]=query (keyup)=filter()>\n              <label for=\"country\">Country</label>\n            </div>\n            <div class=\"suggestions\" *ngIf=\"filteredList.length > 0\">\n                <ul *ngFor=\"#item of filteredList\" >\n                    <li >\n                        <a (click)=\"select(item)\">{{item}}</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    \t",
            styles: [".suggestions{\n\tborder:solid 1px #f1f1f1;\n\tposition:absolute;\n\twidth:600px;\n\tbackground: white;\n}\n\n.suggestions ul{\n\tpadding: 0px;\n\tmargin: 0px;\n}\n\n.container{\n\twidth:600px;\n\tmargin-left:10px;\n\tmargin-top:10px;\n}\n.suggestions ul li{\n\tlist-style: none;\n\tpadding: 0px;\n\tmargin: 0px;\n}\n\n.suggestions ul li a{\n\tpadding:5px;\n\tdisplay: block;\n\ttext-decoration: none;\n\tcolor:#7E7E7E;\n}\n\n.suggestions ul li a:hover{\n\tbackground-color: #f1f1f1;\n}\n    "],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AutoCompleteComponent);
    return AutoCompleteComponent;
}());
exports.AutoCompleteComponent = AutoCompleteComponent;
//# sourceMappingURL=autocomplete.component.js.map