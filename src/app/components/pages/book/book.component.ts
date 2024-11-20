import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  type OnInit,
} from "@angular/core";
import { YouTubePlayer, YouTubePlayerModule } from "@angular/youtube-player";

@Component({
  selector: "app-book",
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: "./book.component.html",
  styleUrl: "./book.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
  @ViewChild("player") player: YouTubePlayer;
  public bookList = [
    ["bILeefVoNO4", "64MiTDVTWpc", "zyG_qPeI--U", "Gi7xITVEHPI", "8dYvTbcyfYs"],
    [
      "F5RiYJqBusw",
      "qjl4sa9QWoc",
      "YAkwDeZPUI0",
      "wP1kJ-qXaec",
      "oyeJYP2QyNU",
      "PPm5T562r4o",
    ],
    ["vSpcW3DqzYw", "39ke11HoAEc", "n6alBwDigSc", "QlUPWkbqzuE", "jWEeoI8qWkM"],
    ["o-f-TJF_u-U", "JARpyzKSiRg", "SgTE0i2FG9Y", "0GPbwSgYJzo", "soyLZVHRXxE"],
  ];

  public bookNames = [
    "이헤식 가야금",
    "도날드워맥 가야금",
    "가야금 민요",
    "가야금 무악",
  ];

  public selectedBook = 0;
  public selectedBookItem = 0;

  ngOnInit(): void {}

  public onSelectBook(index: number): void {
    this.selectedBook = index;
    this.selectedBookItem = 0;

    this.player.videoId =
      this.bookList[this.selectedBook][this.selectedBookItem];
  }

  public onSelectedBookItem(index: number): void {
    this.selectedBookItem = index;
    this.player.stopVideo();

    this.player.videoId =
      this.bookList[this.selectedBook][this.selectedBookItem];
  }
}
