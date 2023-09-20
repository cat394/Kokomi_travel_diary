<script lang="ts">
  export let category: string;
</script>

<div class="credit">
  <h2>{category}</h2>
  <slot />
</div>

<style>
  h2 {
    font-size: var(--font-size-md);
		text-decoration-thickness: 0.06em;
    margin-bottom: var(--size-7);
    text-align: center;
    font-weight: 500;
  }

  h2::before, h2::after {
    display: inline-block;
    content: '～';
  }

  h2::before {
    padding-right: var(--size-3);
  }

  h2::after {
    padding-left: var(--size-3);
  }
</style>