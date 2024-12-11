import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewChild,
  type OnInit,
} from '@angular/core';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('player') player: YouTubePlayer;
  public bookNames = [
    '이해식 가야금 작품展',
    '도날드워맥 가야금 작품展',
    '가야금 민요展',
    '가야금 무악展',
  ];

  public bookInfoList = [
    [
      {
        title: ['가야고를 위한 三章 '],
        description: ['산조가야금 김보경'],
        id: 'bILeefVoNO4',
      },
      {
        title: ['명상하는 사람을 위한 바람의 색깔'],
        description: ['25현가야금 강소희'],
        id: '64MiTDVTWpc',
      },
      {
        title: ['25현 가야고로 그리는 4장의 춤그림'],
        description: ['25현가야금 윤하영'],
        id: 'zyG_qPeI--U',
      },
      {
        title: ['금파람(琴風)'],
        description: ['18현가야금 김은세'],
        id: 'Gi7xITVEHPI',
      },
      {
        title: [
          '네 대의 25현금을 위한 불꽃으로부터의 명상',
        ],
        description: ['김보경 강소희 윤하영 김은세'],
        id: '8dYvTbcyfYs',
      },
    ],
    [
      {
        title: ['구미호 Gumiho'],
        description: ['25현가야금 김은세'],
        id: 'F5RiYJqBusw',
      },
      {
        title: ['해태 Haetae'],
        description: ['산조가야금 김보경'],
        id: 'qjl4sa9QWoc',
      },
      {
        title: ['줄타기 Highwire Act'],
        description: ['산조가야금 강소희'],
        id: 'YAkwDeZPUI0',
      },
      {
        title: ['도깨비 Dokkaebi'],
        description: ['산조가야금 윤하영'],
        id: 'wP1kJ-qXaec',
      },
      {
        title: ['나선그루브 Spiral Grooves'],
        description: ['25현가야금 진나정'],
        id: 'oyeJYP2QyNU',
      },
      {
        title: ['김해 Liquid Metal'],
        description: [
          '25현가야금 4중주 김은세 강소희 윤하영 김보경',
          '장구 김민정 꽹과리 노동혁',
        ],
        id: 'PPm5T562r4o',
      },
    ],
    [
      {
        title: ['세 대의 가야금을 위한 민요연곡'],
        description: [
          '해금_김다현 장구_방지원',
          '고음가야금_강소희 중음가야금_김보경 저음가야금_김은세',
        ],
        id: 'vSpcW3DqzYw',
      },
      {
        title: ['옹헤야', "가야금 4중주를 위한 '옹헤야'"],
        description: [
          '산조가야금_강소희 장구_방지원',
          '18현가야금I_강소희 18현가야금II_윤하영 18현가야금III_김은세 18현가야금IV_김보경',
        ],
        id: '39ke11HoAEc',
      },
      {
        title: ['앞산타령', '앞산타령 (임지선 작곡, 2005)'],
        description: [
          '산조가야금_김은세 장구_방지원',
          '양금_윤하영 산조가야금I_김은세 산조가야금II_김보경 산조가야금III_강소희',
        ],
        id: 'n6alBwDigSc',
      },
      {
        title: [
          '한강수타령',
          "한강수타령 선율 주제에 의한 25현 가야금 3중주 '가람'",
        ],
        description: [
          '산조가야금_윤하영 장구_방지원',
          '25현가야금I_윤하영 25현가야금II_김보경 25현가야금III_김은세',
        ],
        id: 'QlUPWkbqzuE',
      },
      {
        title: ['느시랑타령', "느시랑타령 주제에 의한 가야금 4중주 '느시랑'"],
        description: [
          '산조가야금_김보경 북,장구_방지원',
          '18가야금I_김보경 18가야금II_윤하영 산조가야금I_김은세 산조가야금II_강소희',
        ],
        id: 'jWEeoI8qWkM',
      },
    ],
    [
      {
        title: ['서도굿', 'Vex Veil'],
        description: [
          '채보-산조가야금 강소희 | 타악 방지원 이준호',
          '작곡 최민준 | 18현가야금 강소희',
        ],
        id: 'o-f-TJF_u-U',
      },
      {
        title: ['서울새남굿', '25현가야금 Etude: 문門'],
        description: [
          '채보-산조가야금 김보경 | 타악 방지원 이준호',
          '작곡 이재준 | 25현가야금 김보경 | 타악 이준호',
        ],
        id: 'JARpyzKSiRg',
      },
      {
        title: ['진도씻김굿', '밤의 귀로에서'],
        description: [
          '채보-산조가야금 김은세 | 타악 방지원 이준호',
          '작곡 김영상 | 25현가야금 김은세 | 타악 방지원',
        ],
        id: 'SgTE0i2FG9Y',
      },
      {
        title: ['동해안별신굿', '달아치는 바다 옆에서'],
        description: [
          '채보-산조가야금 윤하영 | 타악 방지원 이준호',
          '작곡 황재인 | 산조가야금 윤하영 | 타악 방지원',
        ],
        id: '0GPbwSgYJzo',
      },
      {
        title: ["산조가야금 4중주를 위한 '4(Sha)Manism'"],
        description: [
          '작곡 김현섭 | 산조가야금 윤하영 김보경 강소희 김은세 | 타악 방지원',
        ],
        id: 'soyLZVHRXxE',
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
