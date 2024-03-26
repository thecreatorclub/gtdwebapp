/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import { configure } from "@testing-library/cypress";
import "@testing-library/cypress/add-commands";

configure({
  testIdAttribute: "data-test-id",
});

Cypress.Commands.add("seed", () => {
  cy.request("POST", `/api/seed`);
});

Cypress.Commands.add("login", (email = "test@user.com", password = "123") => {
  // cy.clearCookies();
  cy.request("/api/signin");

  // cy.session([email, password], () => {
  //   cy.request("/api/signin").then(() => {
  //     cy.getCookie("next-auth.session-token").should("exist");
  //   });
  //   // cy.request("/api/auth/csrf").then(({ body: { csrfToken } }) => {
  //   //   cy.request({
  //   //     method: "POST",
  //   //     url: "/api/auth/callback/credentials",
  //   //     form: true,
  //   //     body: {
  //   //       username: email,
  //   //       password,
  //   //       csrfToken,
  //   //     },
  //   //   }).then(() => {
  //   //     cy.getCookie("next-auth.session-token").should("exist");
  //   //   });
  //   // });
  // });
});

Cypress.Commands.add("logout", async () => {
  window.localStorage.removeItem("corpix.user");
  window.localStorage.removeItem("corpix.userId");
  window.localStorage.removeItem("corpix.token");
});
