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
    </tr>
  </thead>
  <tbody>
    {#each shipments as shipment}
      <tr>
        <td>{shipment.id}</td>
        <td>{shipment.destination}</td>
        <td>{shipment.status}</td>
      </tr>
    {/each}
  </tbody>
</table>