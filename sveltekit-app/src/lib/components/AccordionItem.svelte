<details
	bind:this={details}
	class="
    accordion-item
    flex flex-col
    {closing ? 'is-closing' : ''}
    {className}
  "
  open={expanded}
>
	<summary
		class="accordion-header py-5"
		id={`heading-${id}`}
		onclick={toggle}
		aria-expanded={expanded}
		aria-controls={`target-${id}`}
	>
		<div class="grid grid-cols-12">
			{#if index}
				<div
					class="col-span-2 col-start-1 {expanded
						? 'gradient-primary'
						: ''} flex items-center leading-none font-bold select-none"
				>
					{index < 10 ? `0${index}` : index}
				</div>
			{/if}
			<div class="col-start-{index ? 3 : 2} col-span-{index ? '7' : '8'} flex items-center">
				{@render title()}
			</div>
			<div class="col-span-2 col-start-11 ms-auto grid items-center">
				<svg
					width="30"
					height="17"
					viewBox="0 0 30 17"
					class="accordion-toggle transition-transform duration-300 ease-in-out"
					class:rotate-180={expanded}
					style="transform-origin: center;"
				>
					<path
						d="M15.1914 16.9414C14.7168 16.9414 14.3125 16.748 13.9609 16.3965L1.14648 3.30078C0.830078 2.98438 0.654297 2.58008 0.654297 2.12305C0.654297 1.19141 1.375 0.470703 2.30664 0.470703C2.78125 0.470703 3.18555 0.646484 3.50195 0.945312L15.209 12.916L26.8984 0.945312C27.2148 0.646484 27.6367 0.470703 28.0762 0.470703C29.0078 0.470703 29.7285 1.19141 29.7285 2.12305C29.7285 2.58008 29.5527 2.98438 29.2539 3.2832L16.4395 16.3965C16.123 16.748 15.666 16.9414 15.1914 16.9414Z"
					/>
				</svg>
			</div>
		</div>
	</summary>
	<div
		class="accordion-collapse overflow-hidden"
		id={`target-${id}`}
		aria-labelledby={`heading-${id}`}
		data-bs-parent={parent}
	>
		<div class="accordion-body">
			{@render body()}
		</div>
	</div>
</details>

<script lang="ts">
	let {
		id,
		index,
		expanded = $bindable(false),
		closing = $bindable(false),
		parent,
		title,
		body,
		class: className = ''
	} = $props();

	let details = $state<HTMLElement>();

	function toggle(event: Event) {
    event.preventDefault();
    event.stopPropagation();
		expanded = !expanded;
	}
</script>

<style lang="css">
	.accordion-button {
		@apply cursor-pointer;
		transition: all 0.2s ease-in-out;
	}

	.accordion-button:hover {
		transform: translateX(2px);
	}

	.accordion-toggle {
		path {
			fill: url(#primary-gradient-def);
			transition: fill 0.2s ease-in-out;
		}
	}

	.accordion-item {
    .col-start-1 {
      transition: all 0.3s ease-in-out;
    }
  }

	details summary {
		list-style: none;
		cursor: pointer;
	}
	details::details-content {
    display: grid;
    grid-template-rows: 0fr;
    transition:
      grid-template-rows 0.5s,
      content-visibility 0.5s ease allow-discrete;
		overflow: hidden;
	}
	details[open]::details-content {
    grid-template-rows: 1fr;
	}

	/* @supports (interpolate-size: allow-keywords) {
		:root {
			interpolate-size: allow-keywords;
		}

		[open]::details-content {
			height: auto;
		}
	}
	@supports not (interpolate-size: allow-keywords) {
		[open]::details-content {
			height: 150px;
			overflow-y: scroll;
		}
	} */
</style>
