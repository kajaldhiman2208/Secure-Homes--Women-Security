import React from 'react';
import form_image from '../images/form_image.jpg';

function FormSection(){
    return(
        <>
        <div style={{display:"flex",marginBottom:"50px",marginTop:"50px"}}>
        <div style={{marginLeft:"200px"}}>
            <h1 style={{fontSize:"35px"}}>Get in touch</h1>
            <p style={{fontSize:"16px",color: "#00000066",fontFamily:"Nunito Sans"}}>Our Friendly team would love to hear from you</p>
            <form>
                <div style={{display:"flex",fontSize:"14px"}}>
                <label>First name*</label>
                <label style={{marginLeft:"198px"}}>Last name*</label>
                </div>
                <div style={{display:"flex",marginBottom:"20px"}}>
                <input type='text' placeholder='First name' style={{marginTop:"5px",height:"40px",width:"200px",borderRadius:"5px",border:"1px solid #00000066",paddingLeft:"10px"}}/>
                <input type='text' placeholder='Last name' style={{marginLeft:"50px",marginTop:"5px",height:"40px",width:"200px",borderRadius:"5px",border:"1px solid #00000066",paddingLeft:"10px"}}/>
                </div>
                <div style={{marginBottom:"20px"}}>
                <label style={{fontSize:"14px"}}>Email*</label><br/>
                <input type='email' placeholder='you@company.com' style={{marginTop:"5px",height:"40px",width:"463px",borderRadius:"5px",border:"1px solid #00000066",paddingLeft:"10px"}}/><br/>
                </div>
                <div style={{marginBottom:"20px",fontSize:"14px"}}>
                <label>Phone number</label><br/>
                <input type='text' placeholder='+91 12345-67890' style={{marginTop:"5px",height:"40px",width:"463px",borderRadius:"5px",border:"1px solid #00000066",paddingLeft:"10px"}}/>
                </div>
                <div style={{marginBottom:"20px",fontSize:"14px"}}>
                <label>Message*</label><br/>
                <textarea placeholder='Message' style={{marginTop:"5px",height:"80px",width:"463px",borderRadius:"5px",border:"1px solid #00000066",paddingLeft:"10px",paddingTop:"10px"}}></textarea>
                </div>
                <div style={{marginBottom:"20px",fontSize:"14px",color:"#00000066"}}>
                <input type='checkbox' />
                <span style={{marginLeft:"5px"}}>You agree to our friendly <a href='/' style={{color:"#00000066"}}>privacy policy</a></span>
                </div>
                <button style={{marginTop:"5px",height:"40px",width:"463px",borderRadius:"5px",border:"1px solid #000000",paddingLeft:"10px",paddingTop:"0px",backgroundColor:"#000000",color:"#fff",cursor:"pointer"}}>Send message</button>
            </form>
        </div>
        <div style={{marginLeft:"100px",marginTop:"75px"}}>
            <img src={form_image} alt='img' style={{width:"600px",height:"540px",borderRadius:"10px"}}/>
        </div>
        </div>
        </>
    )
}

export default FormSection;


// import {Link}from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import * as yup from 'yup';
// import form_image from '../images/form_image.jpg';
// import Contact from '../models/Contact';

// function FormSection() {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phoneNumber: '',
//         message: '',
//         agreeToPrivacyPolicy: false
//     });

//     const [formErrors, setFormErrors] = useState({});

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });

//         const maxLength = { phoneNumber: 10 };

//         if (name === 'phoneNumber' && value.length > maxLength[name]) { return; }

//         if (name === 'firstName' || name === 'lastName') {
//             const nameRegex = /^[a-zA-Z]/;
//             if (!nameRegex.test(value)) {
//                 setFormErrors({ ...formErrors, [name]: 'Name must contain only letters' });
//             } else {
//                 delete formErrors[name];
//             }
//         }

//         if (name === 'phoneNumber') {
//             const phoneNumberRegex = /^\d{10}$/;
//             if (!phoneNumberRegex.test(value)) {
//                 setFormErrors({ ...formErrors, phoneNumber: 'Phone number must contain only 10 digits' });
//             } else {
//                 delete formErrors.phoneNumber;
//             }
//         }
//     };

//     const handleCheckboxChange = (event) => {
//         setFormData({ ...formData, agreeToPrivacyPolicy: event.target.checked });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const validationSchema = yup.object().shape({
//                 firstName: yup.string().required('First name is required').matches(/^[a-zA-Z]/, 'Name must contain only letters'),
//                 lastName: yup.string().required('Last name is required').matches(/^[a-zA-Z]/, 'Name must contain only letters'),
//                 email: yup.string()
//                     .email('Invalid email address')
//                     .required('Email is required')
//                     .test('is-unique', 'Email address is already in use', async (value) => {
//                         const contact = await Contact.findOne({ email: value });
//                         return !contact;
//                     }),
//                 phoneNumber: yup.string().matches(/^\d{10}$/, 'Phone number must contain only 10 digits'),
//                 message: yup.string().required('Message is required'),
//                 agreeToPrivacyPolicy: yup.boolean().oneOf([true], 'You must agree to the privacy policy')
//             });

//             await validationSchema.validate(formData, { abortEarly: false });

//             const contact = new Contact(formData);
//             await contact.save();

//             // Clear form data and errors
//             setFormData({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 phoneNumber: '',
//                 message:'',
//                 agreeToPrivacyPolicy: false
//             });

//             setFormErrors({});

//         } catch (error) {
//             if (error.inner) {
//                 const errors = {};
//                 error.inner.forEach((err) => {
//                     errors[err.path] = err.message;
//                 });
//                 setFormErrors(errors);
//             } else {
//                 console.error(error);
//             }
//         }
//     };

//     useEffect(() => {
//         yup.object().shape({
//             firstName: yup.string().required('First name is required').matches(/^[a-zA-Z]/, 'Name must contain only letters'),
//             lastName: yup.string().required('Last name is required').matches(/^[a-zA-Z]/, 'Name must contain only letters'),
//             email: yup.string()
//                 .email('Invalid email address')
//                 .required('Email is required')
//                 .test('is-unique', 'Email address is already in use', async (value) => {
//                     const contact = await Contact.findOne({ email: value });
//                     return !contact;
//                 }),
//             phoneNumber: yup.string().matches(/^\d{10}$/, 'Phone number must contain only 10 digits'),
//             message: yup.string().required('Message is required'),
//             agreeToPrivacyPolicy: yup.boolean().oneOf([true], 'You must agree to the privacy policy')
//         }).validate(formData, { abortEarly: false })
//             .then(() => {
//                 setFormErrors({});
//             })
//             .catch((error) => {
//                 if (error.inner) {
//                     const errors = {};
//                     error.inner.forEach((err) => {
//                         errors[err.path] = err.message;
//                     });
//                     setFormErrors(errors);
//                 } else {
//                     console.error(error);
//                 }
//             });
//     }, [formData]);

//     return (
//         <>
//             <div style={{ display: "flex", marginBottom: "50px", marginTop: "50px" }}>
//                 <div style={{ marginLeft: "200px" }} >
//                     <h1 style={{ fontSize: "35px" }}>Get in touch</h1>
//                     <p style={{ fontSize: "16px", color: "#00000066", fontFamily: "Nunito Sans" }}>Our Friendly team would love to hear from you</p>
//                     <form onSubmit={handleSubmit}>
//                         <div style={{ display: "flex", fontSize: "14px" }}>
//                             <label>First name*</label>
//                             <label style={{ marginLeft: "198px" }}>Last name*</label>
//                         </div>
//                         <div style={{ display: "flex", marginBottom: "20px" }}>
//                             <input
//                                 type='text'
//                                 name='firstName'
//                                 placeholder='First name'
//                                 style={{ marginTop: "5px", height: "40px", width: "200px", borderRadius: "5px", border: "1px solid #00000066", paddingLeft: "10px" }}
//                                 value={formData.firstName}
//                                 onChange={handleInputChange}
//                             />
//                             <input
//                                 type='text'
//                                 name='lastName'
//                                 placeholder='Last name'
//                                 style={{ marginLeft: "50px", marginTop: "5px", height: "40px", width: "200px", borderRadius: "5px", border: "1px solid #00000066", paddingLeft: "10px" }}
//                                 value={formData.lastName}
//                                 onChange={handleInputChange}
//                             />
//                             {formErrors.firstName && <p style={{ color: 'red' }}>{formErrors.firstName}</p>}
//                             {formErrors.lastName && <p style={{ color: 'red' }}>{formErrors.lastName}</p>}
//                         </div>
//                         <div style={{ marginBottom: "20px" }}>
//                             <label style={{ fontSize: "14px" }}>Email*</label><br />
//                             <input
//                                 type='email'
//                                 name='email'
//                                 placeholder='you@company.com'
//                                 style={{ marginTop: "5px", height: "40px", width: "463px", borderRadius: "5px", border: "1px solid #00000066", paddingLeft: "10px" }}
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                             /><br />
//                             {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
//                         </div>
//                         <div style={{ marginBottom: "20px", fontSize: "14px" }}>
//                             <label>Phone number</label><br />
//                             <input
//                                 type='number'
//                                 name='phoneNumber'
//                                 placeholder='+91 12345-67890'
//                                 style={{ marginTop: "5px", height: "40px", width: "463px", borderRadius: "5px", border: "1px solid #00000066", paddingLeft: "10px" }}
//                                 value={formData.phoneNumber}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div style={{ marginBottom: "20px", fontSize: "14px" }}>
//                             <label>Message*</label><br />
//                             <textarea
//                                 name='message'
//                                 placeholder='Message'
//                                 style={{ marginTop: "5px", height: "80px", width: "463px", borderRadius: "5px", border: "1px solid #00000066", paddingLeft: "10px", paddingTop: "10px" }}
//                                 value={formData.message}
//                                 onChange={handleInputChange}
//                             ></textarea>
//                             {formErrors.message && <p style={{ color: 'red' }}>{formErrors.message}</p>}
//                         </div>
//                         <div style={{ marginBottom: "20px", fontSize: "14px", color: "#00000066" }}>
//                             <input
//                                 type='checkbox'
//                                 name='agreeToPrivacyPolicy'
//                                 checked={formData.agreeToPrivacyPolicy}
//                                 onChange={handleCheckboxChange}
//                             />
//                             <span style={{ marginLeft: "5px" }}>You agree to our friendly <a href style={{ color: "#00000066", textDecoration:"underline" }}>privacy policy</a></span>
//                             {formErrors.agreeToPrivacyPolicy && <p style={{ color: 'red' }}>{formErrors.agreeToPrivacyPolicy}</p>}
//                         </div>
//                         <button
//                             type='submit'
//                             style={{ marginTop: "5px", height: "40px", width: "463px", borderRadius: "5px", border: "1px solid #000000", paddingLeft: "10px", paddingTop: "0px", backgroundColor: "#000000", color: "#fff", cursor: "pointer" }}
//                             // disabled={Object.keys(formErrors).length > 0}
//                         >
//                             Send message
//                         </button>
//                     </form>
//                 </div>
//                 <div style={{ marginLeft: "100px", marginTop: "75px" }}>
//                     <img src={form_image} alt='img' style={{ width: "600px", height: "540px", borderRadius: "10px" }} />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default FormSection;