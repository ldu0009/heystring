import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  type OnInit,
} from "@angular/core";
import { HeaderService } from "./header.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
  public afterScrollValue = 0;

  constructor(public headerService: HeaderService) {}

  ngOnInit(): void {}
}
