<div class="definition-list">
  {@render children()}
</div>

<script>
const { children } = $props();
</script>

<style lang="css">
  .definition-list {
    :global(.accordion-toggle) {
      width: 1rem;
      @screen lg {
        height: 1.5rem;
      }
    }
    :global(.accordion-toggle path) {
        fill: #F7F7F7 !important;
    }
  }
</style>
