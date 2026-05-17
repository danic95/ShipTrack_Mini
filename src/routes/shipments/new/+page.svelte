<script lang="ts">
  const { form } = $props()
</script>

<h1>New Shipment</h1>

<form method="POST">
  <h3>Ship From</h3>
  <input name="from_name" placeholder="Name" required />
  <input name="from_phone" placeholder="Phone" required />
  <input name="from_address" placeholder="Address" required />
  <input name="from_city" placeholder="City" required />
  <input name="from_state" placeholder="State (e.g. TX)" required />
  <input name="from_zip" placeholder="ZIP Code" required />

  <h3>Ship To</h3>
  <input name="to_name" placeholder="Name" required />
  <input name="to_phone" placeholder="Phone" required />
  <input name="to_address" placeholder="Address" required />
  <input name="to_city" placeholder="City" required />
  <input name="to_state" placeholder="State (e.g. NY)" required />
  <input name="to_zip" placeholder="ZIP Code" required />

  <h3>Package</h3>
  <input name="weight" type="number" placeholder="Weight (lbs)" required />

  <button type="submit">Get Rates</button>

  {#if form?.error}
    <p style="color: red">{form.error}</p>
  {/if}

  {#if form?.rates}
    <h3>Available Rates</h3>
    {#each form.rates as rate}
      <div>
        <strong>{rate.service_type}</strong> —
        ${rate.shipping_amount.amount} ({rate.delivery_days} days)
      </div>
    {/each}
  {/if}
</form>