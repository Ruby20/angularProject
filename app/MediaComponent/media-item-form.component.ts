import {Component, Inject} from '@angular/core';
import {  Control, Validators, FormBuilder } from '@angular/common'
import {MediaItemService} from './media-item.service';
/**
 * using the FormBuilder service we can get rid of the ControlGroup component
 */

@Component({
    selector: 'media-item-form',
   // providers:[MediaItemService],
    templateUrl: 'app/MediaComponent/media-item-form.component.html',
    styleUrls: ['app/MediaComponent/media-item-form.component.css']
})

export class MediaItemFormComponent {

    constructor(private formBuilder:FormBuilder,
                private service:MediaItemService,
                @Inject('LOOKUP_LISTS') public  lookupLists){}

    form;

    ngOnInit(){
        this.form = this.formBuilder.group({
            'medium' : new Control('Movies'),
            'name' : new Control('',
                Validators.compose(
                    [Validators.required,
                        Validators.pattern('[\\w\\-\\s\\/]+')])),
            'category': new Control(''),
            'year':new Control('', this.yearValidator)

        });
    }

    //custom validators
    yearValidator(control){
        if(control.value.trim().length === 0) return null;
        var year = parseInt(control.value);
        var minYear = 1900;
        var maxYear = 2100;

        if(year >= minYear && year <= maxYear) return null;
        return { 'year': true};

    }

    onSubmit(mediaItem){
        console.log(mediaItem);
        this.service.addItems(mediaItem);
    }
}