///<reference types="cypress" />

import 'cypress-xpath';
import PageOlx from '../page-objects/PageOlx'

describe("Testes FreteBras", () => {
  const olx= new PageOlx()

  it("Abrir pagina OLX", () => {
    olx.visit()
   })

  Cypress.on('uncaught:exception', (err, runnable) => {
   return false
  })

  it("Validar titulo da pagina", () => {
    cy.title().should('contain', 'OLX - O Maior Site de Compra e Venda do Brasil')
    cy.wait(500);
  })

  it("Digitar texto para pesquisar", () => {
    olx.pesquisa('iphone')
    cy.wait(500);
    olx.submit()
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
  olx.proxPagina()  
  cy.wait(500);
  olx.resultado2Pag()
  
})

})