import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { InputComponent } from './components/input/input.component';

export const routes: Routes = [
    { path: 'display', component: DisplayComponent },
    { path: 'input', component: InputComponent },
    { path: '', redirectTo: '/display', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }
