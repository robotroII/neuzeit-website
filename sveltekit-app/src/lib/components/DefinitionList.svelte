<dl class="definition-list">
  {@render children()}
</dl>

<script>
const { children } = $props();
</script>

<style lang="css">
  .definition-list {
    :global(.accordion-toggle) {
      width: 1rem;
      @media (min-width: 1024px) {
        height: 1.5rem;
      }
    }
    :global(.accordion-toggle path) {
        fill: #F7F7F7 !important;
    }
  }
</style>
