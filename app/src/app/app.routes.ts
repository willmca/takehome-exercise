import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { InputContainerComponent } from './components/input-container/input-container.component';

export const routes: Routes = [
    { path: 'display', component: DisplayComponent },
    { path: 'input', component: InputContainerComponent },
    { path: '', redirectTo: '/display', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }
