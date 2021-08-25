<script>
    async function dynamicallyLoadCSS() {
        await import("$lib/mod.css");   
    }
</script>

<button on:click={dynamicallyLoadCSS}>Dynamically Load CSS</button>