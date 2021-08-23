<script>
    async function loadModule() {
        const { foo } = await import("$lib/mod.js");
        // vvv DELETE ME vvv
        await import("$lib/mod.css");
        
        console.log("Module loaded successfully.")
    }
</script>

<button on:click={loadModule}>Load module</button>