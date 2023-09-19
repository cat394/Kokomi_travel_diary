<script lang="ts">
	export let href: string;
</script>

<div class="link-btn">
	<a {href} {...$$restProps}>
    <slot />
  </a>
</div>

<style>
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--size-2);
    width: 100%;
    height: 100%;
    padding: var(--size-3);
  }

  .link-btn {
    background: var(--primary-light);
    color: white;
    box-shadow: 0px 5px 0px 0px var(--gray-5);
    border-radius: var(--radius-round);
    transition: all 300ms;
  }

  .link-btn:hover {
    transform: translateY(3px);
    box-shadow: 0px 2px 0px 0px var(--gray-5);
  }
</style>