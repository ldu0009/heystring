import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewChildren,
  type OnInit,
} from "@angular/core";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as pageData from "../../../../assets/data/main.json";
import { HeaderService } from "../../../core/components/header/header.service";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: "app-main",
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("scrollField", { static: true }) scrollField!: ElementRef;
  @ViewChild("box", { static: true }) box!: ElementRef;
  @ViewChild("videos", { static: true }) videos!: ElementRef;
  @ViewChildren("fonts") fonts!: ElementRef[];
  @ViewChildren("videoEl") videoEl!: ElementRef[];

  public readonly pageData = pageData;
  public scrollProgress = 0;

  constructor(
    private headerService: HeaderService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log(this.pageData);
  }

  ngAfterViewInit(): void {
    ScrollTrigger.create({
      trigger: this.scrollField.nativeElement, // 스크롤 기준이 되는 요소
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        if (scrollProgress > this.scrollProgress)
          this.headerService.isScrollDown = true;
        else this.headerService.isScrollDown = false;
        this.scrollProgress = scrollProgress;
        this.cd.markForCheck();
      },
    });

    this.fonts.forEach((font) => {
      gsap.from(font.nativeElement, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: font.nativeElement,
          start: "top 100%",
          end: "top 80%",
          toggleActions: "play pause resume reset",
          scrub: 1,
        },
      });
    });

    this.videoEl.forEach((videoEl, index) => {
      gsap.from(videoEl.nativeElement, {
        x: index % 2 == 0 ? "100%" : "-100%",
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: videoEl.nativeElement,
          start: "top 60%",
          end: "top 30%",
          toggleActions: "play pause resume reset",
          scrub: 1,
        },
      });
    });
  }

  ngOnDestroy(): void {}
}
