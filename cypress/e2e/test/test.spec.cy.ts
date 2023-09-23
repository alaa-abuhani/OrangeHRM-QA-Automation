import login from "../../support/PageObjectModel/login";
const loginObj: login = new login();

describe(" login test cases", () => {
  beforeEach(() => {
    cy.intercept("/web/index.php/dashboard/index").as("loginpage");
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.fixture("login.json").as("logininfo");
  });

  it(" LOGIN: Valid User Login and valid Username valid pass", () => {
    cy.get("@logininfo").then((logininfo: any) => {
      loginObj.loginValid(logininfo[0].Username, logininfo[0].Password);
    });
  });

  it("  LOGIN: Invalid Username and Valid Password", () => {
    cy.get("@logininfo").then((logininfo: any) => {
      loginObj.loginInValid(logininfo[1].Username, logininfo[1].Password);
    });
  });
  it(" LOGIN: Valid Username and Invalid Password", () => {
    cy.get("@logininfo").then((logininfo: any) => {
      loginObj.loginInValid(logininfo[2].Username, logininfo[2].Password);
    });
  });
  it(" lOGIN: Invalid Username and Invalid Password", () => {
    cy.get("@logininfo").then((logininfo: any) => {
      loginObj.loginInValid(logininfo[3].Username, logininfo[3].Password);
    });
  });
  it(" LOGIN: Empty Username and Empty Password", () => {
    cy.get("@logininfo").then((logininfo: any) => {
      loginObj.loginInEmpty();
    });
  });
  it(" LOGIN: Empty Password ", () => {
    cy.get("@logininfo").then((logininfo: any) => {
      loginObj.loginInEmptyPassword(logininfo[5].Username);
    });
  });

  it(" LOGIN: Empty Username ", () => {
    cy.get("@logininfo").then((logininfo: any) => {
      loginObj.loginInEmptyUserName(logininfo[6].Password);
    });
  });

  it(" LOGIN: Hidden Password", () => {
    cy.get("@logininfo").then((logininfo: any) => {
      loginObj.hiddenPassword();
    });
  });
});
