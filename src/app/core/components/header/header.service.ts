import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  public isScrollDown = false;

  constructor() {}
}
