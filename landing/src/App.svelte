<script lang="ts">
</script>

<main>
    <div class="navbar bg-base-100 shadow-sm">
        <a class="btn btn-ghost text-xl" href="/#">
            <span style="font-family: 'Sour Gummy';">
                <span class="font-black italic bg-white text-black rounded-xs p-1 px-2" onmouseover={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'black';
                    target.style.color = 'white';
                }} onmouseout={(e) => {
                    const target = e.target as HTMLElement;
                    target.setAttribute("style", "");
                }} onfocus={()=>{}} onblur={()=>{}} aria-label="HRT Planner mark" role="note">hrt</span>
                <span class="font-bold">planner</span>
            </span>
        </a>
    </div>
</main>

<style>
</style>
