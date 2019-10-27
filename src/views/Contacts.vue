<template>
    <section class="contacts">
        <div class="container">
            <div class="card contacts__card">
                <span class="card__header">
                    Оставить заявку
                </span>
                <div class="card__body">
                    <div class="input-primary">
                        <input @focus="inputFocus" @blur="inputBlur" type="text" name="name" id="name" placeholder="Ф.И.О">
                    </div>
                    <div class="input-primary">
                        <input @focus="inputFocus" @blur="inputBlur" type="text" name="email" id="email" placeholder="Email">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Contacts",
        methods: {
            inputFocus(e) {
                e.target.parentNode.classList.add('active');

            },
            inputBlur(e) {
                e.target.parentNode.classList.remove('active');
            }
        }
    }
</script>

<style scoped lang="scss">
    .contacts {
        height: calc(100vh - 130px);
        padding-top: 80px;
        /*background-image: url("../assets/img/contacts-bg.png");*/
        /*background-size: 110% 100%;*/

        &__card {
            max-width: (500 / 16) * 1rem;
        }

        .input-primary {
            margin-bottom: 15px;
            background-color: #fff;
        }

    }

</style>