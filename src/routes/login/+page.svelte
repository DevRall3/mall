<script lang="ts">
    import { enhance } from "$app/forms";
    import type { ActionData } from "./$types.js";

    export let form: ActionData;
    // export let data;
</script>

<!-- Enhance enhancear formuläret -->
<body>
    <div class="login-container">
        <div class="login-div">
            <h1>Login</h1>
            <form method="post" action="?/login" use:enhance>
                <label>Email: <input type="email" name="email" /></label>
                <label
                    >Password: <input type="password" name="password" /></label
                >

                <button class="main-btn"
                    ><span class="text">Log In</span></button
                >
                {#if form?.userName}
                    <span style="color: red;">{form.userName}</span>
                {/if}
            </form>
            <span>Don't have an account? </span>
            <a href="/register"
                >Register here</a
            >
        </div>
    </div>
</body>