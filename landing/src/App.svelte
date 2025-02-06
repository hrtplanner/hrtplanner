<script lang="ts">
</script>

<!--
    I will look at this 5 years into the future and vomit.
    I am not proud of myself for writing this landing page.
    I am not proud of anything I write because it ends up looking like this.
    
    Side note: Will modularize later. This is how it'll be for now until I can get collaborators on board.
-->
<main class="flex flex-col items-center text-center justify-center h-[100%] bg-base-200">
    <div class="navbar bg-base-100 shadow-sm fixed top-0 left-0">
        <a id="watermark" style="font-family: 'Sour Gummy';" class="text-xl" href="/#">
            <span class="font-black italic bg-white text-black rounded-xs p-1 px-2 transition-all"><span class="inline-flex transition-all">HRT</span></span>
            <span class="inline-flex font-bold transition-transform">planner</span>
        </a>
    </div>
    <div class="mt-[300px] card shadow-lg p-4 bg-base-100 w-5xl min-h-[20vh] flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold mb-2" style="font-family: 'Delius Unicase', serif;">hrtplanner</h1>
        <h1 style="font-family: 'Sour Gummy';" class="text-4xl font-bold">your <span class="inline-flex bg-gradient-to-r from-[#c9f0ff] to-[#ffdbe2] bg-clip-text text-transparent" style="filter:drop-shadow(0px 1px 3px white);">transitioning</span> bestie</h1>
    </div>
    <div class="flex flex-row w-5xl h-[400px] justify-between mt-4 gap-2">
        <div class="card shadow-lg p-4 bg-base-100 w-1/2 h-full flex flex-col items-center">
            <h1 class="mt-5 text-2xl font-bold mb-2" style="font-family: 'Delius Unicase', serif;" aria-label="What is HRT Planner?"><span class="icon large mb-5">?</span></h1>
            <p class="text-lg font-bold">Find affordable HRT on a tight budget</p>
            <p class="mt-3 text-lg">HRTPlanner keeps tabs on your current spending, estimated price until a user-provided "end of treatment," and the lowest prices discoverable on medical HRT sources.</p>
            <p class="mt-2 text-lg">In addition, it scrapes multiple online shopping sites for supplies requested for social transitioning.</p>
        </div>
        <div class="card shadow-lg p-4 bg-base-100 w-1/2 h-full flex flex-col items-center">
            <h1 class="mt-5 text-2xl font-bold mb-2" style="font-family: 'Delius Unicase', serif;" aria-label="What is HRT Planner?"><span class="icon large mb-5">!</span></h1>
            <p class="text-lg font-bold">Free forever, donation run</p>
            <p class="mt-3 text-lg">HRTPlanner is entirely FOSS and free. Its only source of income are donations.</p>
        </div>
    </div>
    <div class="mt-4 card shadow-lg p-4 bg-base-100 w-5xl min-h-[30vh] flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold mb-2" style="font-family: 'Sour Gummy';">in progress...</h1>
        <h1 class="text-xl font-bold">HRTPlanner is in <a target="_blank" class="link hover:text-gray-300" href="https://github.com/hrtplanner/hrtplanner">active development</a>. Keep tabs on us on GitHub.</h1>
    </div>

    <div class="mt-12"></div>
</main>

<style lang="scss">
    .icon {
        font-size: 1.5rem;
        background-color: white;
        color: black;
        border-radius: 50%;
        padding: 0.5rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        -webkit-text-fill-color: black;

        &.large {
            font-size: 2rem;
            width: 3rem;
            height: 3rem;
        }
    }
    #watermark {
        width: 13rem;
        & > span:nth-child(1) {
            display: inline-block;
            white-space: nowrap;
            max-width: 4rem;
            position: relative;
        }

        &:hover > span:nth-child(1) {
            max-width: 2.4rem;

            background: linear-gradient(90deg, #c9f0ff, #ffdbe2);

            & > span {
                transform-origin: center left;
                transform: scaleX(0);
            }
        }

        &:hover > span:nth-child(2) {
            transform: scale(0);
        }
    }
</style>
