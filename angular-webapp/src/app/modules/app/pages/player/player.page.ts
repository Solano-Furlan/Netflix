import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  id!: string;
  link!: SafeResourceUrl;
  constructor(private route: ActivatedRoute, private dom: DomSanitizer) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id);
    this.link = this.dom.bypassSecurityTrustResourceUrl(
      `https://streamable.com/e/${this.id}?autoplay=1`
    );
  }
}
