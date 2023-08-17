Shopify-Frontend

Techonologies used: React,React-Router-Dom,Formik,Yup,Axios,React-toastify,
                    React Hooks,Redux,React-bootstrap

Credentials: You can signup or use the given credentials
 customer: email:smilewithvishnu@gmail.com  
           pass:Vishnu@123
 admin: email:ajeethkumar.gopal@gmail.com 
        pass:Ajee@123

Deploy link: https://celebrated-liger-a9b72b.netlify.app

01. I have created the frontend using React

02. In public folder,index.html is where I have given the title and favicon

03. I have created components so that I can reuse my code functionalities.

04. App.js file is where I have made use of react-router-dom and specified my routings and also here
    I am exporting my backend deployed url to integrate with my backend API

05. In Dashboard.js I am calling my Navigation,Home,About and Contact Functional Components so that it will be
    rendered in my web page.

06. Inside the components folder, I have created a CustomerSignUp.js,CustomerLogin.js,ForgotPassword.js 
    in which I have used formik and yupto create validations for the sign up form,login form 
    and forgot password form and also made use of events such as onclick
    (Ex:When I click the login button it will navigate to login page using the use navigate hooks),
    using axios I am giving the backend deployed url along with its specified end points as parameter 
    to perform the operation and integrate with the backend api.

07. In filter.js, I have written the code logic to filter the product based on category so that it displays
    a dropdown from which you can choose the category (ex:jewellery,laptop,furniture,etc...)


08. I have made use of redux so that it provides me multiple state management and store all my application
    state in one place and I have provided the store access to the App functional component as you can see 
    in the index.js and you can update the state of the components by just using use dispatch so that it calls
    reducer function (ex:productreducer,cartreducer) so based on the action type you can update the state 
    and use selector hook gives you the state of the entire application.

09. Index.css is where I have specified all my stylings to the web application

10. I have used react-toastify in app.js so that it gives me toaster for 3 sec as notification

11. In Products folder, I have created the functional components for cart details,
    Ordered Items,Product list,Success order and product navigation

12. In Admin folder, I have created functional components for AdminSignUp,AdminLogin,ResetPassword,
    Forgot password,Add products, Admin home, Admin Navigation, All Orders,All Products and Order status
