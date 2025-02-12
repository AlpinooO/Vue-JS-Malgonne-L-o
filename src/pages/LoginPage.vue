<template>
    <main class="login_main">
        <h1>Login Page</h1>
        <form v-on:submit.prevent="submitHandler" class="form"> 
            <section>
                <article>
                    <label for="email"></label>
                    <input v-model="data.email"
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
                    <input v-model="data.password"
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
import { watch, reactive} from "vue";

const data = reactive({
    email: '',
    password: ''
})

watch(data, (val) =>{
    console.log('Changement dans la variable data')
})


const isUserInputValid = (input:string): boolean => {
    const pattern = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    return pattern.test(input)

}
if (isUserInputValid("test@test.com")){
    console.log('Email valide');
} else {
    console.log('Email invalide');
}


const submitHandler = ()=> {

}

const inputHandler = function(){

}
</script>

<style lang="scss" scoped>
.login_main{

}
</style>