import 'jquery-validation';

this.messageForm = $('#messageForm').validate({
  rules: {
    name: 'required',
    email: {
      required: true,
      email: true
    },
    message: 'required'
  },
  submitHandler: function(form) {
    form.submit();
  /* success event goes here  */
  }
});
