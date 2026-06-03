import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// NOTE: Do not edit anything in this details component.

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {
  bookId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookId = id ? Number(id) : null;
  }
}
