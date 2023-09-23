import loginPage from "../PageObjectModel/loginPage";
const obj : loginPage = new loginPage();
let resId :any ;

describe('template spec', () => {
    beforeEach(() => {
      cy.intercept('/web/index.php/dashboard/index').as('loginpage')
      cy.visit('https://opensource-demo.orangehrmlive.com')
      obj.login('Admin','admin123')
    })

//     it('Verify login response', ()=>{
//       cy.request("/web/index.php/api/v2/dashboard/shortcuts")
//       .then((response)=>{
//           expect(response).property('status').to.equal(200);
//       })
      
//  })
 function generateRandomString(length:number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }
  
  return result;
}



 it('Verify API ADD USER response', ()=>{
  cy.request( {
    method:'POST',
    url :"https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users",
   
    body: {
      empNumber: 24,
      password: "123456a",
      status: true,
      userRoleId: 2,
      username: "alaaabu"+generateRandomString(10)
      

    },
  })  
  .then((response)=>{
    console.log(response);
      expect(response).property('status').to.equal(200);
      resId =response.body.data.userRoleId;

      cy.log(response.body.data.userRoleId)
  })
  
})

// it("DELETE API testing Using Cypress API Plugin", () => {
//   cy.request({
//     method:"DELETE",
//     url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users/" +resId})
//     .should((response) => {
//     expect(response.status).to.eq(204);
//   });
// });


// it(' verfiy login response' ,  () => {
//   cy.request('')
//   .then((response) => {
//     expect.(response).property
   
//   })

// })


    // it('login valid', () => {
    // obj.login('Admin','admin123')
    
    // })

    // it('forget password', () =>{
    //   obj.forGotPassword('Admin')

    // })'
    
    // it('Delete user', ()=>{
    //   cy.request({
    //       method: 'DELETE',
    //       url: '/web/index.php/api/v2/admin/users',
    //       body:{
    //           ids:[resId]
    //       }
    //   })
    // }) 
  
  })
