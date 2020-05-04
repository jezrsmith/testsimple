import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(protected httpClient: HttpClient) {
  }


  title = 'testsimple';

  ready = false;
  formApi: any;
  form: any;

  handleFormLoad(event) {
    this.formApi = event.target;
    this.form = event.detail;
    console.log('formLoad :', event);
  }

  handleFormEvent(event) {
    console.log(event);
  }

  handleCancel() {
    // @ts-ignore
    this.formApi.cancel();
  }

  handleClose() {
    this.formApi.close(this.form.data);
  }

  handleSubmit() {
    this.form.data.InsuranceClaim.ClaimType = 'test';
    const test  = this.form.data.InsuranceClaim.Participant[0];
    delete test._id;
    this.form.data.InsuranceClaim.Participant = [];
    this.form.data.InsuranceClaim.Participant.push(test);

    // const testobj = { ...test};
    // Object.assign(testobj, test);
    // this.form.data.InsuranceClaim.Participant.push(testobj);
    this.formApi.submit(this.form.data);
  }

  ngOnInit(): void {
    let body;
    let url;
    url = '/idm/v3/login-oauth';
    body = new HttpParams()
      .set('Email', '')
      .set('Password', '')
      .set('TenantId', 'bpm')
      .set('ClientID', '');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    this.httpClient.post(url, body.toString(), { headers }).subscribe(
      next => {
        console.log(next);
        this.ready = true;
      }
    );
  }

}

