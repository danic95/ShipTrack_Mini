<script lang="ts">
  const { data } = $props()
  const { shipments } = data
</script>

<h1>Shipments</h1>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Destination</th>
      <th>Status</th>
      <th>Service type</th>
      <th>Shipping cost</th>
      <th>Delivery days</th>
    </tr>
  </thead>
  <tbody>
    {#each shipments as shipment}
      <tr>
        <td>{shipment.id}</td>
        <td>{(shipment.to_address != '' && shipment.to_address != null) ? shipment.to_address : shipment.destination}</td>
        <td>{shipment.status}</td>
        <td>{shipment.service_type}</td>
        <td>{shipment.shipping_cost}</td>
        <td>{shipment.delivery_days}</td>
      </tr>
    {/each}
  </tbody>
</table>