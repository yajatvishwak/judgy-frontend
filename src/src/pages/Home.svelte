<script>
  import ModalWrapper from "../components/ModalWrapper.svelte";
  import Nav from "../components/Nav.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";

  let BASEURL = import.meta.env.VITE_BASEURL;
  let data = {
    projects: [],
  };
</script>

<ModalWrapper>
  <div class="p-3 md:p-5 lg:p-10">
    <Nav />
    <section class="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10">
      {#each data.projects as project}
        <ProjectCard
          description={project.shortDescription}
          title={project.title}
          id={project._id}
          isReviewed={project.isReviewed}
        />
      {/each}
    </section>
  </div>
</ModalWrapper>
