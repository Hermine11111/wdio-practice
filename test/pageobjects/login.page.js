class LoginPage {

    get emailInput() { return $('[data-test="email"]'); }
    get passwordInput() { return $('[data-test="password"]'); }
    get loginBtn() { return $('[data-test="login-submit"]'); }

    async open() {
        await browser.url('/auth/login');
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();