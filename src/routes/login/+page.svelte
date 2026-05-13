<script lang="ts">
  import { createSupabaseLoadClient } from '$lib/supabase'

  let email = $state('')
  let password = $state('')
  let error = $state('')
  let loading = $state(false)

  const supabase = createSupabaseLoadClient(fetch)

  async function handleLogin() {
    loading = true
    error = ''

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      error = authError.message
    } else {
      window.location.href = '/shipments'
    }

    loading = false
  }
</script>

<h1>Login</h1>

<input
  type="email"
  placeholder="Email"
  bind:value={email}
/>

<input
  type="password"
  placeholder="Password"
  bind:value={password}
/>

<button onclick={handleLogin} disabled={loading}>
  {loading ? 'Loading...' : 'Login'}
</button>

{#if error}
  <p style="color: red">{error}</p>
{/if}