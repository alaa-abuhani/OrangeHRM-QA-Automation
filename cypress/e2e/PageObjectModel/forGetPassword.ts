// class loginPage {
//     elements = {
//         // userName: () => cy.get('[placeholder="Username"]'),
//         userName: () => cy.getByPlaceholder("Username"),
//         // password: () => cy.get('[placeholder="Password"]'),
//         password: () => cy. getByPlaceholder("Password"),
//         loginBtn:() => cy.get('button'),
//         getPassword: () => cy.get('.orangehrm-login-forgot-header')
//     }

//     login(userName:string , password :string ){
//         this.elements.userName().type(userName);
//         this.elements.password().type(password);
//         this.elements.loginBtn().click()
//     }
//     forGotPassword(resetPass :string){
//         this.elements.getPassword().click();
//         cy.get('.oxd-input').type(resetPass);
//         cy.get('.orangehrm-forgot-password-button--reset').click()
//         cy.get('.orangehrm-forgot-password-title').should('contain', 'Reset Password link sent successfully')

//     }

// }
// export default loginPage;