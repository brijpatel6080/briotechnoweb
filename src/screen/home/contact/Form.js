import React from 'react'
import InputText, { TextArea, SubmitButton } from '../../../componets/form/InputBox'
import emailjs from 'emailjs-com';


function Form() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_tu9cdy4', e.target, 'user_usnPurn5Q12tZZp2vhAJM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }



    return (
        <>
            {/* <form  class="contact-form" id="contact-form-2" method="post" > */}
            <form  class="contact-form" onSubmit={sendEmail} >

                <div class="contact-form__two">
                    <div class="contact-input">
                        <div class="contact-inner">
                            <InputText 
                                name='name'
                                type='text'
                                placeholder='Name *'
                            />
                        </div>
                        <div class="contact-inner"> 
                            <InputText 
                                name='email'
                                type='email'
                                placeholder='Email *'
                            />
                        </div>
                    </div>
                    <div class="contact-select">
                        <div class="form-item contact-inner">
                            <span class="inquiry">
                                <select id="Visiting" name="subject">
                                    <option disabled selected>Select Department to email</option>
                                    <option value="Your inquiry about">Your inquiry about</option>
                                    <option value="General Information Request">General Information Request</option>
                                    <option value="Partner Relations">Partner Relations</option>
                                    <option value="Careers">Careers</option>
                                    <option value="Software Licencing">Software Licencing</option>
                                </select>

                            </span>
                        </div>
                    </div>
                    <div class="contact-inner contact-message mb-15">
                        <TextArea 
                            name='message' 
                            placeholder='Please describe what you need.' 
                        />
                    </div>
                    <div class="comment-submit-btn">
                        <SubmitButton 
                        value='Send Message' 
                        type="submit" 
                        name='submit' 
                        />
                        <p class="form-messege-2"></p>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form
