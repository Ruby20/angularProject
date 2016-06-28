import {Component} from '@angular/core';
import {MediaComponent} from './media.component';
import {CategoryListPipe } from './category-list.pipe';
import {MediaItemService} from './media-item.service';

@Component({
    selector: 'media-item-list',
    directives: [MediaComponent],
    pipes : [CategoryListPipe ],
    templateUrl: 'app/MediaComponent/media-item-list.component.html',
    styleUrls: ['app/MediaComponent/media-item-list.component.css']
})
export class MediaItemComponent {
    medium = '';
    mediaItems=[];

    constructor(private service:MediaItemService){

    }

    ngOnInit(){
         this.getMediaItems(this.medium);
    }



    onMediaItemDeleted(mediaItem) {
         this.service.deleteItem(mediaItem);
    }

    private getMediaItems(medium):void {
        this.medium = medium;
        this.service.getItems()
            .subscribe(mediaItems => {
                this.mediaItems= mediaItems;
            });
    }
}