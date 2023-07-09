<script>
  import store from "../store/store";
  import Papa from "papaparse";
  let file = null;
  async function submit() {
    Papa.parse(file[0], {
      header: true,
      complete: function (results) {
        results.errors.forEach((error) => {
          results.data.splice(error.row, 1);
        });
        let fin = results.data.map((item) => {
          return {
            title: item["Title"],
            shortDescription: item["Short Description"],
            longDescription: item["Long Description"],
            githubLink: item["Github Link"],
            demoLink: item["Demo Link"],
          };
        });
        console.log(fin);
      },
    });
  }
</script>

<input
  type="checkbox"
  bind:checked={$store.isAddCSVModalOpen}
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box max-w-3xl">
    <button
      on:click={() => ($store.isAddCSVModalOpen = false)}
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
    >
    <h3 class="font-bold text-lg">Add Multiple Hackathon Submissions</h3>
    <div class="py-4 flex flex-col gap-3">
      <input
        type="file"
        bind:files={file}
        class="file-input file-input-bordered w-full"
      />
      <div class="label-text-alt">Upload a CSV file</div>
    </div>
    <div class="flex">
      <button on:click={() => (file = null)} class="btn btn-ghost">Clear</button
      >
      <button on:click={submit} class="btn btn-circle ml-auto"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
