import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { YouTubePlayerModule } from "@angular/youtube-player";
import * as pageData from "../../../../assets/data/main.json";
@Component({
  selector: "app-main",
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  public readonly pageData = pageData;

  ngOnInit(): void {
    console.log(this.pageData);
  }
}
