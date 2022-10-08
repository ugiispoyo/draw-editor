class tools {
    navbar: HTMLDivElement | null;

    constructor() {
        this.navbar = document.createElement('nav') as HTMLDivElement;
        this.styleNavbarTools()
    }

    styleNavbarTools() {
        this.navbar.style.background = '#000';
        this.navbar.style.height = '40px';
        this.navbar.style.width = '300px';
    }
}

export default tools;