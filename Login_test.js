Feature('Login');

Scenario('test something', async ({ I }) => {
    I.amOnPage('/');
    I.see('Olá, futuro residente!');
    I.waitForElement('#email');
    I.fillField('#email', 'paulo.barros+16@codengage.com');
    I.fillField('#password', 'sanar123');
    I.click('button[type=submit]');
    I.click({ css: '[data-testid=menu-initial-button]'});
    I.click({ css: '[data-testid=rm-menu__go-to--account]'});
    I.wait(8);
            
    I.scrollPageToBottom('[class=es-main-menu__content--scrollable es-main-menu__content--scrollable--element]');     
           
    I.click({ css: '[data-testid=rm_menu_my-account__go_to--leave-account]'})
    
    I.click('Sair');
    I.see('Olá, futuro residente!');
     


});
