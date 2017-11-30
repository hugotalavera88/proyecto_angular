import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SalesComponent } from './components/sales/sales.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { BreadComponent } from './components/bread/bread.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CreateComponent } from './components/sales/create/create.component';
import { ListComponent } from './components/sales/list/list.component';
import { ClientService } from './services/client/client.service';
import { InventaryService } from './services/inventary/inventary.service';
import { SalesService } from './services/sales/sales.service';
import { HttpClientModule }       from '@angular/common/http';
import { LoginComponent }       from './components/login/login.component';
import { HttpModule }       from '@angular/http';
import { UsersService } from './services/users.service';
import { AuthenticationGuard } from './guards/authentication.guard';





// definir objetos de navegacion
var roots = [
  { path: 'sales', component: SalesComponent, canActivate : [AuthenticationGuard] },
  { path: 'clients', component: ClientsComponent, },
  { path: 'inventory', component: InventoryComponent },
  { path: 'home', component: HomeComponent,  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    SalesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InventoryComponent,
    FilterPipe,
    CreateComponent,
    ListComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(roots)
  ],
  providers: [ClientService, InventaryService, SalesService, UsersService, AuthenticationGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
