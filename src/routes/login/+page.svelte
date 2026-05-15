<script lang="ts">
  const { form } = $props()
</script>

<h1>Login</h1>

<form method="POST">
  <input
    type="email"
    name="email"
    placeholder="Email"
    required
  />

  <input
    type="password"
    name="password"
    placeholder="Password"
    required
  />

  <button type="submit">Login</button>

  {#if form?.error}
    <p style="color: red">{form.error}</p>
  {/if}
</form>