import { Component,Input, Output, EventEmitter } from '@angular/core';
import { FavDirective } from './fav.directive'

@Component({
    selector: 'media-item',
    directives:[FavDirective],
    templateUrl: 'app/MediaComponent/media.component.html',
    styleUrls : ['app/MediaComponent/media.component.css'],
})


export class MediaComponent{
    @Input('mediaItemToWatch') mediaItem;
    @Output('deleted') delete = new EventEmitter();


    onDelete(){
        console.log('deleted');
        this.delete.emit(this.mediaItem);
    }
}
