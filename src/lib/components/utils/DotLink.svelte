<script lang="ts">
  export let href: string;
</script>

<a {href} {...$$restProps}><slot /></a>

<style>
  a {
    text-decoration-line: underline;
		text-decoration-style: dotted;
		text-decoration-color: var(--primary);
  }

  a:hover {
    text-decoration: none;
  }
</style>