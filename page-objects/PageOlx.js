/// <reference types="cypress" />
import 'cypress-xpath';

class PageOlx 
{
    
visit()
{
   cy.visit ("https://www.olx.com.br/")
}

pesquisa(value)
{
 const input=cy.get('input[name="q"]')
 input.clear()
 input.type(value)
 return this
}

submit(value)
{
 const button=cy.get('button[class="submitBtn"]')
 button.click()
}

proxPagina(value)
{
 const button=cy.xpath('//*[@id="content"]/div/div[2]/div[12]/ul/li[16]/a')
 button.click()
}

resultado2Pag(value)
{
 const resultado=cy.get('#content > div > div.col2.sc-15vff5z-5.fFdJjk > div.sc-1fcmfeb-0.WQhDk > ul > li:nth-child(1) > a > div')
 resultado.first().screenshot()
}
    
}

export default PageOlx