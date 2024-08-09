import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit {
  errorCode: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.errorCode = this.route.snapshot.paramMap.get('errorCode');
    console.log(this.errorCode);
    if (!this.errorCode) {
      this.errorCode = '404';
    }
  }
}
