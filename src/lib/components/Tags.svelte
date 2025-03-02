<script lang="ts">
  let tags = $state<string[]>(["react", "svelte"]);
  let textInputElement: HTMLInputElement;
  function removeTag(
    e: MouseEvent & {
      currentTarget: EventTarget & HTMLSpanElement;
    },
  ) {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const id = Number.parseInt(e.currentTarget.dataset.id!);
    tags = tags.filter((_, index) => index !== id);
  }
  $effect(() => {
    //
  });
</script>

<fieldset>
  <div id="tags">
    {#each tags as tag, index}
      <span class="tag"
        >{tag}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <span
          class="delHashtag"
          data-role="remove"
          data-id={index}
          onclick={removeTag}
        ></span>
      </span>
    {/each}
    <input type="text" name="tag" id="tag_input" maxlength="40" />
  </div>
</fieldset>

<!-- placeholder="Add tags (&quot;enter&quot; key to create it)" -->

<style>
  #tags {
    border: 1px dashed #666666;
    color: #999999;
    line-height: 36px;
    padding: 10px;
    min-height: 54px;
    margin-bottom: 10px;
  }
  #tag_input {
    border: none;
    color: #999999;
    background-color: transparent;
    display: inline-block;
    width: 250px;
  }
  .tag {
    border: 1px solid #666666 !important;
    color: #a09f9d;
    border-radius: 2px;
    background-color: transparent;
    padding: 6px 0 6px 6px;
    display: inline-block;
    margin: 3px;
    line-height: 20px;
    background-color: #232323;
    cursor: move;
  }
  .tag .delHashtag {
    margin-left: 5px;
    cursor: pointer;
  }
  .tag .delHashtag:after {
    content: "x";
    padding: 7px 7px 7px 5px;
  }
</style>
