import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { EmailComposer } from 'ionic-native';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
    feedbackForm: FormGroup;
    submitAttempt: boolean = false;
  constructor(public navCtrl: NavController, formBuilder: FormBuilder) {
      this.feedbackForm = formBuilder.group({
          name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          feedback: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
      })
    }

  onSubmit(value: string): void {
      console.log('Thanks for your feedback!', value);
  }
}
/*
EmailComposer.isAvailable().then((available: boolean) => {
    if (available) {
        //Now we know we can send
    }
});

let email = {
    to: 'brandon@wetogethr.com',
    cc: 'tolenashley7@gmail.com',
    bcc: ['', ''],
    attachments: [''
    ],
    subject: 'YumHack Feedback',
    body: 'Type your love note here and we\'ll take it to heart',
    isHtml: true
};

// Send a text message using default options
EmailComposer.open(email);
*/