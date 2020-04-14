import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  get crmUrl (): string { return environment.crm_url; }

  get apiUrl (): string { return environment.api_url; }

  get firUrl (): string { return environment.fir_url; }

  get imageUrl(): string { return environment.image; }
}
