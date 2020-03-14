import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CreatecompanyComponent } from './admin/createcompany/createcompany.component';
import { ImportdataComponent } from './admin/importdata/importdata.component';
import { ManagecompanyComponent } from './admin/managecompany/managecompany.component';
import { UpdateioComponent } from './admin/updateio/updateio.component';
import { AdminComponent } from './admin/admin/admin.component';
import { IpoComponent } from './user/ipo/ipo.component';
import { UserComponent } from './user/user/user.component';
import { ComparecompanyComponent } from './user/comparecompany/comparecompany.component';
import { componentFactoryName } from '@angular/compiler';
import { ActivateComponent } from './activate/activate.component';
import { ComparesectorComponent } from './user/comparesector/comparesector.component';

import { ManageexchangeComponent } from './admin/manageexchange/manageexchange.component';
import { ManagestockexchangeComponent } from './admin/managestockexchange/managestockexchange.component';
import { IpolistComponent } from './ipolist/ipolist.component';
import { ComparecompanylistComponent } from './user/comparecompanylist/comparecompanylist.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UpdateStockComponent } from './admin/update-stock/update-stock.component';
import { UpdateIpoComponent } from './user/update-ipo/update-ipo.component';
import { SectorComponent } from './admin/sector/sector.component';
import { UpdateSectorComponent } from './admin/update-sector/update-sector.component';
import { SectorlistComponent } from './admin/sectorlist/sectorlist.component';
import { StockpriceComponent } from './admin/stockprice/stockprice.component';
import { StockpricelistComponent } from './admin/stockpricelist/stockpricelist.component';
import { UpdateStockpriceComponent } from './admin/update-stockprice/update-stockprice.component';
import { LandingComponent } from './landing/landing.component';
import { Login1Component } from './login1/login1.component';
import { ChartsComponent } from './charts/charts.component';
import { LogoutComponent } from './logout/logout.component';
import { Chart12Component } from './chart12/chart12.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UpdateProfileComponent } from './user/update-profile/update-profile.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';



const routes: Routes = [
  {path:'createcompany',component:CreatecompanyComponent},
{path:'manageexchange',component:ManageexchangeComponent},
{path:'admin/managestockexchange',component:ManagestockexchangeComponent},
{path:'user/comparecompanylist',component:ComparecompanylistComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'companylist',component:CompositionEvent},
  {path:'admin/createcompany',component:CreatecompanyComponent},
  {path:'admin/importdata',component:ImportdataComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/managecompany',component:ManagecompanyComponent},
  {path:'admin/updateio',component:UpdateioComponent},
  {path:'user/ipo',component:IpoComponent},
  {path:'user/comparecompany',component:ComparecompanyComponent},
  {path:'user/comparesector',component:ComparesectorComponent},
  // {path:'user/displayuser',component:DisplayuserComponent},
  {path:'user',component:UserComponent},
  {path:'ipolist',component:IpolistComponent},
  {path:'displayuser',component:UserlistComponent},
{path:'contact',component:ContactComponent},
{path:'about',component:AboutComponent},
{path:'update-user',component:UpdateUserComponent},
{path:'update-company',component:UpdateCompanyComponent},
{path:'update-stock',component:UpdateStockComponent},
{path:'update-ipo',component:UpdateIpoComponent},
{path:'sector',component:SectorComponent},
{path:'update-sector',component:UpdateSectorComponent},
{path:'contact-list',component:ContactListComponent},
{path:'sectorlist',component:SectorlistComponent},
{path:'stockprice',component:StockpriceComponent},
{path:'stockpricelist',component:StockpricelistComponent},
{path:'update-stockprice',component:UpdateStockpriceComponent},
{path:'landing',component:LandingComponent},
{path:'userprofile',component:UserProfileComponent},
{path:'updateProfile',component:UpdateProfileComponent},
{path:'changePassword',component:ChangePasswordComponent},
{path:'login1',component:Login1Component},
{path:"logout",component:LogoutComponent},

  {path:'activate',component:ActivateComponent},
  {path:'charts',component:ChartsComponent},
  {path:'chart12',component:Chart12Component},
  
  {path:'',component:HomeComponent} ,
   {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
