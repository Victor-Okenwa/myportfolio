import { action, createStore, thunk } from "easy-peasy";

export default createStore({
    theme: false,
    setTheme: action((state, payload) => {
        state.theme = payload;
    }),
    toggleTheme: thunk(async (actions, payload, helpers) => {
        const { theme } = helpers.getState();
        try {
            const Home = document.querySelector('.Home');
            const Nav = document.querySelector('.Nav');
            actions.setTheme(theme === false ? true : false);
            if (!theme) {
                Home.classList.add('dark');
                Nav.classList.add('dark');
            } else {
                Home.classList.remove('dark');
                Nav.classList.remove('dark');
            }
        } catch (err) {
            console.log(err);
        }
    }),
    showModal: false,
    setShowModal: action((state, payload) => {
        state.showModal = payload
    }),
    handleModalClose: thunk(async (actions, payload, helpers) => {
        actions.setShowModal(false);
        console.log(helpers.getState().showModal);
    }),
    handleModalShow: thunk(async (actions, payload, helpers) => {
        actions.setShowModal(true);
        console.log(helpers.getState().showModal);
    }),
    activeLink: '',
    setActiveLink: action((state, payload) => {
        state.activeLink = payload;
    }),
    handleNavLinkClick: thunk((actions, elementId, helpers) => {
        try {
            actions.setActiveLink(elementId);
            const section = document.getElementById(elementId);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth'
                })
            }
        } catch (err) {
            console.log(err);
        }
    }),
    handleScroll: thunk((actions) => {
        try {
            const scrollY = window.scrollY;
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const sectionId = section.getAttribute('id');
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    actions.setActiveLink(sectionId);
                }

                if (scrollY > 272) {
                    document.querySelector('.backTop').classList.add('show');
                } else {
                    document.querySelector('.backTop').classList.remove('show');
                }
            })
        } catch (err) {
            console.log(err);
        }
    })

});