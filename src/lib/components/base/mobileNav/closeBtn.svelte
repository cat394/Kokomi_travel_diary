<div class="close-btn">
  <button on:click>
    <span class="text">メニューを閉じる</span>
  </button>
</div>

<style>
  .close-btn {
		justify-self: center;
		display: inline-grid;
		border: 2px solid white;
		border-radius: var(--radius-3);
		padding: var(--size-2) var(--size-3);
	}
  
  button {
		display: flex;
		gap: var(--size-3);
		border: var(--primary);
		justify-self: center;
	}
</style>