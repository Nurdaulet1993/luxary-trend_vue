<template>
    <header class="header">
            <div class="header__top">
                <div class="container">
                    <ul class="header__info">
                        <li class="info-group header__info-group">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:Sapaainash@mail.ru">Sapaainash@mail.ru</a>
                        </li>
                        <li class="info-group header__info-group">
                            <i class="fas fa-phone"></i>
                            <a href="tel:+77784097967">+7 (778) 409 - 79 - 67</a>
                        </li>
                    </ul>

                    <ul class="header__socials">
                        <li class="header__socials-item">
                            <a href="javascript:void(0)">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li class="header__socials-item">
                            <i class="fab fa-instagram"></i>
                        </li>
                        <li class="header__socials-item">
                            <i class="fab fa-vk"></i>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="header__body">
                <div class="container">
                    <a href="javascript: void(0)" class="logo">
                        <img src="../assets/img/logo-origin.svg" alt="logotype" width="200">
                    </a>
                    <nav class="header__nav nav">
                        <router-link tag="a" class="nav__link" active-class="active" exact to="/">Главная</router-link>
                        <router-link tag="a" class="nav__link" active-class="active"  to="/products">О продукте</router-link>
                        <router-link tag="a" class="nav__link" active-class="active"  to="/benefits">Польза</router-link>
                        <router-link tag="a" class="nav__link" active-class="active"  to="/testimonials">Отзывы</router-link>
                        <router-link tag="a" class="nav__link" active-class="active"  to="/contacts">Контакты</router-link>
                    </nav>
                </div>
            </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>