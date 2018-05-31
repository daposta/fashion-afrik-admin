import { Component, OnInit } from '@angular/core';
import {TagService} from '../../services/tag.service'

@Component({
  selector: 'app-tags-listing',
  templateUrl: './tags-listing.component.html',
  styleUrls: ['./tags-listing.component.css'],
  providers: [TagService]
})
export class TagsListingComponent implements OnInit {

  tags: any = [];

  constructor(private tagSrv: TagService) { }

  ngOnInit() {
    this.fetchTags()
  }

  fetchTags() {
    this.tagSrv.fetchTags().subscribe(
      res => {
        console.log(res);
        this.tags = res;
      }, err => {
        console.log(err);
      }
    )
  }

}
