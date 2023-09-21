<script lang="ts">
  export let category: string;
</script>

<div id={category} class="credit">
  <h3>{category}</h3>
  <slot />
</div>

<style>
  h3 {
    font-size: var(--font-size-md);
		text-decoration-thickness: 0.06em;
    margin-bottom: var(--size-7);
    text-align: center;
    font-weight: 500;
  }

  h3::before, h3::after {
    display: inline-block;
    content: '～';
  }

  h3::before {
    padding-right: var(--size-3);
  }

  h3::after {
    padding-left: var(--size-3);
  }

  .credit {
    overflow: auto;
    padding-top: var(--size-5);
    margin-top: var(--size-10);
  }
</style>