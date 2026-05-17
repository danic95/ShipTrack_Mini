<script lang="ts">
  const { form } = $props()
</script>

<h1>New Shipment</h1>

<form method="POST" action="?/getRates">
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
</form>

{#if form?.rates}
  <h3>Available Rates</h3>
  {#each form.rates as rate}
    <div style="margin-bottom: 1rem; padding: 1rem; border: 1px solid #ccc;">
      <strong>{rate.service_type}</strong> —
      ${rate.shipping_amount.amount} ({rate.delivery_days} days)

      <form method="POST" action="?/selectRate" style="display: inline;">
        <input type="hidden" name="service_type" value={rate.service_type} />
        <input type="hidden" name="shipping_cost" value={rate.shipping_amount.amount} />
        <input type="hidden" name="delivery_days" value={rate.delivery_days} />
        <input type="hidden" name="carrier_id" value={rate.carrier_id} />
        <input type="hidden" name="from_address" value={form.from_address} />
        <input type="hidden" name="to_address" value={form.to_address} />
        <button type="submit">Select</button>
      </form>
    </div>
  {/each}
{/if}

{#if form?.success}
  <p style="color: green">
    Shipment saved! <a href="/shipments">View all shipments</a>
  </p>
{/if}