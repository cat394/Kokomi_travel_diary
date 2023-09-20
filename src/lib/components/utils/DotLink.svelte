<script lang="ts">
  export let href: string;
</script>

<a {href} {...$$restProps}><slot /></a>

<style>
  a {
    text-decoration: underline dotted var(--primary);
  }

  a:hover {
    text-decoration: none;
  }
</style>