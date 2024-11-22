import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewChild,
  type OnInit,
} from "@angular/core";
import { YouTubePlayer, YouTubePlayerModule } from "@angular/youtube-player";
import { Subject, take, takeUntil } from "rxjs";

@Component({
  selector: "app-book",
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: "./book.component.html",
  styleUrl: "./book.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("player") player: YouTubePlayer;
  public bookNames = [
    "이해식 가야금",
    "도날드워맥 가야금",
    "가야금 민요",
    "가야금 무악",
  ];

  public bookInfoList = [
    [
      {
        title: "가야고를 위한 三章 ",
        description:
          "작곡 이해식 I 산조가야금 김보경 [가야금 라이브러리 사이 Vol.1 이해식 가야금 작품展]",
        id: "bILeefVoNO4",
      },
      {
        title: "명상하는 사람을 위한 바람의 색깔",
        description:
          "작곡 이해식 I 25현가야금 강소희 [가야금 라이브러리 사이 Vol.1 이해식 가야금 작품展]",
        id: "64MiTDVTWpc",
      },
      {
        title: "25현 가야고로 그리는 4장의 춤그림",
        description:
          "작곡 이해식 I 25현가야금 윤하영 [가야금 라이브러리 사이 Vol.1 이해식 가야금 작품展]",
        id: "zyG_qPeI--U",
      },
      {
        title: "금파람(琴風)",
        description:
          "작곡 이해식 I 18현가야금 김은세 [가야금 라이브러리 사이 Vol.1 이해식 가야금 작품展]",
        id: "Gi7xITVEHPI",
      },
      {
        title:
          "네 대의 25현금을 위한 불꽃으로부터의 명상",
        description:
          "작곡 이해식 I 편곡 손성국 [가야금 라이브러리 사이 Vol.1 이해식 가야금 작품展]",
        id: "8dYvTbcyfYs",
      },
    ],
    [
      {
        title: "구미호 Gumiho",
        description:
          "작곡 도널드워맥 I 25현가야금 김은세 [가야금 라이브러리 사이 Vol.2 도널드워맥 가야금 작품展]",
        id: "F5RiYJqBusw",
      },
      {
        title: "해태 Haetae",
        description:
          "작곡 도널드워맥 I 산조가야금 강소희 [가야금 라이브러리 사이 Vol.2 도널드워맥 가야금 작품展]",
        id: "qjl4sa9QWoc",
      },
      {
        title: "줄타기 Highwire Act",
        description:
          "작곡 도널드워맥 I 산조가야금 강소희 [가야금 라이브러리 사이 Vol.2 도널드워맥 가야금 작품展]",
        id: "YAkwDeZPUI0",
      },
      {
        title: "도깨비 Dokkaebi",
        description:
          " 작곡 도널드워맥 I 산조가야금 윤하영 [가야금 라이브러리 사이 Vol.2 도널드워맥 가야금 작품展]",
        id: "wP1kJ-qXaec",
      },
      {
        title: "나선그루브 Spiral Grooves",
        description:
          "작곡 도널드워맥 I 25현가야금 진나정 [가야금 라이브러리 사이 Vol.2 도널드워맥 가야금 작품展]",
        id: "oyeJYP2QyNU",
      },
      {
        title: "김해 Liquid Metal",
        description:
          "작곡 도널드워맥 I 25현가야금 4중주 [가야금 라이브러리 사이 Vol.2 도널드워맥 가야금 작품展]",
        id: "PPm5T562r4o",
      },
    ],
    [
      {
        title: "세 대의 가야금을 위한 민요연곡",
        description: "편곡 김희조 [가야금 라이브러리 사이 Vol.3 가야금 민요展",
        id: "vSpcW3DqzYw",
      },
      {
        title: "가야금 4중주를 위한 '옹헤야'",
        description: "작곡 임준희 [가야금 라이브러리 사이 Vol.3 가야금 민요展]",
        id: "39ke11HoAEc",
      },
      {
        title: "앞산타령",
        description: "작곡 임지선 [가야금 라이브러리 사이 Vol.3 가야금 민요展]",
        id: "n6alBwDigSc",
      },
      {
        title: "한강수타령 선율 주제에 의한 25현 가야금 3중주 '가람'",
        description: "작곡 박병오 [가야금 라이브러리 사이 Vol.3 가야금 민요展]",
        id: "QlUPWkbqzuE",
      },
      {
        title: "느시랑타령 주제에 의한 가야금 4중주 '느시랑'",
        description: "작곡 이재준 [가야금 라이브러리 사이 Vol.3 가야금 민요展]",
        id: "jWEeoI8qWkM",
      },
    ],
    [
      {
        title: "Vex Veil",
        description:
          "작곡 최민준 I 18현가야금 강소희 [가야금 라이브러리 사이 Vol.4 가야금 무악展]",
        id: "o-f-TJF_u-U",
      },
      {
        title: "25현가야금 Etude: 문門",
        description:
          " 작곡 이재준 I 25현가야금 김보경 [가야금 라이브러리 사이 Vol.4 가야금 무악展]",
        id: "JARpyzKSiRg",
      },
      {
        title: "밤의 귀로에서",
        description:
          "작곡 김영상 I 25현가야금 김은세 [가야금 라이브러리 사이 Vol.4 가야금 무악展]",
        id: "SgTE0i2FG9Y",
      },
      {
        title: "달아치는 바다 옆에서",
        description:
          "작곡 황재인 I 산조가야금 윤하영 [가야금 라이브러리 사이 Vol.4 가야금 무악展]",
        id: "0GPbwSgYJzo",
      },
      {
        title: "산조가야금 4중주를 위한 '4(Sha)Manism'",
        description: "작곡 김현섭 [가야금 라이브러리 사이 Vol.4 가야금 무악展]",
        id: "soyLZVHRXxE",
      },
    ],
  ];

  public selectedBook = 0;
  public selectedBookItem = 0;

  public _unsubscribeAll: Subject<any> = new Subject();

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
    this._unsubscribeAll.unsubscribe();
  }

  public onSelectBook(index: number): void {
    this.selectedBook = index;
    this.selectedBookItem = 0;

    this.player.videoId =
      this.bookInfoList[this.selectedBook][this.selectedBookItem].id;
  }

  public onSelectedBookItem(index: number): void {
    this.selectedBookItem = index;
    this.player.stopVideo();

    this.player.videoId =
      this.bookInfoList[this.selectedBook][this.selectedBookItem].id;
  }
}
