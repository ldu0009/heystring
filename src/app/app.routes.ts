import { Routes } from "@angular/router";
import { LayoutComponent } from "./core/layout/layout.component";
import { MainComponent } from "./components/pages/main/main.component";
import { PrologueComponent } from "./components/pages/prologue/prologue.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { LibraryComponent } from "./components/pages/library/library.component";
import { BookComponent } from "./components/pages/book/book.component";
import { ContactComponent } from "./components/pages/contact/contact.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: MainComponent,
      },
      {
        path: "prologue",
        component: PrologueComponent,
      },
      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "library",
        component: LibraryComponent,
      },
      {
        path: "book",
        component: BookComponent,
      },
      {
        path: "contact",
        component: ContactComponent,
      },
    ],
  },
];
