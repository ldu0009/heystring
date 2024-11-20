import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";

@Component({
  selector: "app-library",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./library.component.html",
  styleUrl: "./library.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryComponent implements OnInit {
  public libraryList = [
    [1, 2],
    [1, 2],
    [1, 2],
    [1, 2, 3],
  ];

  public selectedLibrary = -1;
  public selectedLibraryItem = 0;

  ngOnInit(): void {}

  public selectLibrary(index: number): void {
    this.selectedLibrary = index;
    this.selectedLibraryItem = 0;
  }

  public closePopup(): void {
    this.selectedLibrary = -1;
    this.selectedLibraryItem = 0;
  }
}
