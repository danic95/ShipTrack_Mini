<script lang="ts">
  const shipments = [
    { id: '1', destination: 'New York', status: 'In Transit' },
    { id: '2', destination: 'Los Angeles', status: 'Delivered' },
    { id: '3', destination: 'Chicago', status: 'Pending' },
  ]
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