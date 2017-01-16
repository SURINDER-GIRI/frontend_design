 import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import{Routes,RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ForgetComponent} from "./forget/forget.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {IndexComponent} from "./index/index.component"; 
import { AgentComponent } from './agent/agent.component';
import { TaskComponent } from './task/task.component';
import { RulesComponent } from './rules/rules.component';
const routes : Routes = [
{ path : "" , pathMatch : "full" ,redirectTo:"authentication"},
{path: 'authentication', component : AuthenticationComponent,children:[
{path: 'login', component : LoginComponent,outlet:'login' },
{path: 'signup', component : SignupComponent,outlet:'signup' },
{path: 'forget', component : ForgetComponent,outlet:'forget' }
]},
{path: 'index', component : IndexComponent,children:[
{path: 'agent', component : AgentComponent,outlet:'agent'},
{path: 'task', component : TaskComponent,outlet:'task'},
{path: 'rules', component : RulesComponent,outlet:'rules'}

] }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})

export class AppRouting {}
export const appRoutingComponents = [LoginComponent,SignupComponent,ForgetComponent,AgentComponent,TaskComponent,RulesComponent]