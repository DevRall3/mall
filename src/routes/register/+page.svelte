<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';
    
    export let form: ActionData;
    // export let data: PageData;
</script>
<div class="register-container">
    <div class="register-div">
        <h1>Register account</h1>
        <form action="?/register" method="post" use:enhance>
            <label>E-mail: <input type="email" name="email"></label>
            <label>Name: <input type="text" name="fullName"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat Password: <input type="password" name="password-repeat"></label>
            <button class="main-btn"><span class="text">Submit</span></button>
            {#if form?.msg}
                <span style="color: red;">{form.msg}</span>
            {/if}
        </form>
        <span>Already have an account? </span><a href="/login">Log in here</a>
    </div>
</div>