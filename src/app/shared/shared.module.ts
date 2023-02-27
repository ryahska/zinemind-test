import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { ShowhideDirective } from "./directive/showhide.directive";

@NgModule({
    declarations: [
        ShowhideDirective,
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        ToastrModule,
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        ShowhideDirective,
        ToastrModule,
    
    ],
    
    providers: [
    ],
})
export class SharedModule { }