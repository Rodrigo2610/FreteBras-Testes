///<reference types="cypress" />
import 'cypress-xpath';

describe("Testes FreteBras", () => {

  it("Abrir pagina OLX", () => {
   cy.visit("https://www.olx.com.br/");
   //cy.wait(50000)
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it("Validar titulo da pagina", () => {
    cy.title().should('contain', 'OLX - O Maior Site de Compra e Venda do Brasil')
    timeout: 50000;
  })

  it("Digitar texto para pesquisar", () => {
  cy.get('input[name="q"]').focus().type('iphone')
  timeout: 50000;
  cy.get('button[class="submitBtn"]').click()
  })

  it("Imprimir os 5 primeiros resultados", () => {
    cy.wait(500);
    cy.get('#content > div > div.col2.sc-15vff5z-5.fFdJjk > div.sc-1fcmfeb-0.WQhDk > ul > li:nth-child(1) > a > div > div.fnmrjs-7.cfjFVu > div.fnmrjs-9.eFXSRz').then((resultado1) => {
      cy.log(resultado1.text())
    });

    cy.get('#content > div > div.col2.sc-15vff5z-5.fFdJjk > div.sc-1fcmfeb-0.WQhDk > ul > li:nth-child(2) > a > div > div.fnmrjs-7.cfjFVu > div.fnmrjs-9.eFXSRz').then((resultado2) => {
     cy.log(resultado2.text())
    });

    cy.get('#content > div > div.col2.sc-15vff5z-5.fFdJjk > div.sc-1fcmfeb-0.WQhDk > ul > li:nth-child(5) > a > div > div.fnmrjs-7.cfjFVu > div.fnmrjs-9.eFXSRz').then((resultado3) => {
     cy.log(resultado3.text())
    });

    cy.get('#content > div > div.col2.sc-15vff5z-5.fFdJjk > div.sc-1fcmfeb-0.WQhDk > ul > li:nth-child(6) > a > div > div.fnmrjs-7.cfjFVu > div.fnmrjs-9.eFXSRz').then((resultado4) => {
     cy.log(resultado4.text())
    });

    cy.get('#content > div > div.col2.sc-15vff5z-5.fFdJjk > div.sc-1fcmfeb-0.WQhDk > ul > li:nth-child(7) > a > div > div.fnmrjs-7.cfjFVu > div.fnmrjs-9.eFXSRz').then((resultado5) => {
     cy.log(resultado5.text())
    });

  })

  it("Print do primeiro anuncio da segunda pagina", () => {
  cy.xpath('//*[@id="content"]/div/div[2]/div[12]/ul/li[16]/a').click()
  cy.wait(500);
  cy.get('#content > div > div.col2.sc-15vff5z-5.fFdJjk > div.sc-1fcmfeb-0.WQhDk > ul > li:nth-child(1) > a > div').first().screenshot();
  
})

})