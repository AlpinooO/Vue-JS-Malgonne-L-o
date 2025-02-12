<template>
    <main class="login_main">
        <h1>Login Page</h1>
        <form v-on:submit.prevent="submitHandler" class="form"> 
            <section>
                <article>
                    <label for="email"></label>
                    <input v-model="email"
                    id="email"
                    placeholder="Entrez votre email"
                    type="email"
                    class="input"
                    />
                </article>
            </section>
            <section>
                <article>
                    <label for="password"></label>
                    <input v-model="password"
                    id="password"
                    placeholder="Entrez votre mot de passe"
                    type="password"
                    class="input"
                    />
                </article>
            </section>
            <section>
                <button type="submit" class="button is-primary">Valider</button>
                <button type="reset" class="button is-danger">Annuler</button>
            </section>

        </form>
    </main>
</template>

<script lang="ts" setup>
import { watch, reactive, ref} from "vue";
import InputValidator from '../utils/input-validator.ts';

// const data = reactive({
//     email: '',
//     password: ''
// })

const email = ref('')
const password = ref('')

watch(email, (val) =>{
    console.log(val,InputValidator(val, 'email'));
})

watch(password,(val) =>{
    console.log(val,InputValidator(val, 'password'));
})

// const isUserPasswordValid = (input:string): boolean => {
//     const pattern1 = new RegExp(/^(?=.*[A-Z] *[a-z])(?=.*\d)(?=.*[@#$:%*?&])[A-Za-z\d @#$:%*?&]{8,}$/);
//     return pattern1.test(input)
// }
// if (isUserPasswordValid("1234Test*")){
//     console.log('Mot de passe valide');
// } else {
//     console.log('Mot de passe invalide');
// }


const submitHandler = async()=> {
    const result = await fetch('users.json');
    const users = await result.json();
    console.log(users);
}

</script>

<style lang="scss" scoped>
.login_main{

}
</style>