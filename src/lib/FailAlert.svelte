<script lang="ts">
  type Props = {
    message: string;
  };
  let { message }: Props = $props();
</script>

<div class="bg-red-100 text-red-800 p-4 rounded-md border-2 border-red-600">
  <p>{message}</p>
</div>
