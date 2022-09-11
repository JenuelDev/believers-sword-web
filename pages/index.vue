<script setup lang="ts">
useHead({
    title: "Believers Sword",
});
</script>
<template>
    <NuxtLayout>
        <section class="w-[100%] min-h-[100vh] dark:text-gray-100 py-[50px] duration-300">
            <div class="px-[15px] mx-auto flex justify-center">
                <img src="/assets/images/believers-sword.svg" width="180px" alt="Application Logo Image" />
            </div>
            <div
                class="w-[100%] max-w-[1000px] mx-auto flex flex-col justify-center items-center px-[15px] text-center"
            >
                <h1 class="md:text-[48px] text-[38px] font-thin">Believers Sword</h1>
                <p class="text-center md:text-[18px] text-[16px] font-thin max-w-[700px]">
                    To God be the glory, We want to introduce this amazing bible studying app called "Believers Sword".
                    Whether you're new to this app or a seasoned user, Believers Sword App is a simple application that
                    helps you study bible with extra features.
                </p>
                <div class="my-[30px]">
                    <a
                        id="link-download-app"
                        style="display: block"
                        href="https://github.com/Bible-Projects/believers-sword-app/releases/download/v1.2.6/Believers-Sword-Setup-1.2.6.exe"
                        class="my-[30px]"
                    >
                        <button
                            id="download-button"
                            class="bg-yellow-600 dark:bg-yellow-500 px-[15px] py-[5px] rounded-md hover:bg-yellow-700 duration-300 active:bg-yellow-900 text-gray-50"
                        >
                            Download For Windows v.1.2.6</button
                        ><br />
                        <small class="font-bold dark:text-yellow-400 text-yellow-600"
                            >Installer is <span>100%</span> Safe</small
                        >
                    </a>
                    <div id="loading-button" class="spin-icon" style="display: none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
                        >
                            <path
                                d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"
                            ></path>
                        </svg>
                    </div>
                </div>

                <small>
                    This is only avaiable for <span class="text-blue-500 font-medium">Windows</span>, Coming soon for
                    MAC and Linux
                </small>
                <small>By downloading, you agree to use it to study the bible heartily.</small>
            </div>
            <div class="px-[15px] mx-auto flex flex-col justify-center pt-[50px] items-center">
                <div class="max-w-[1200px] w-[100%] mx-auto relative md:px-20px">
                    <a class="dark:hidden block" href="~/assets/images/screen-light.png">
                        <img
                            class="rounded-md"
                            src="~/assets/images/screen-light.png"
                            alt="Application Preview Image"
                        />
                    </a>
                    <a class="dark:block hidden" href="~/assets/images/screen-dark.png">
                        <img class="rounded-md" src="~/assets/images/screen-dark.png" alt="Application Preview Image" />
                    </a>
                </div>
            </div>
            <div class="max-w-[1200px] w-[100%] mx-auto mt-[50px] px-[15px]">
                <div class="flex flex-wrap items-center justify-center gap-[20px] mb-[10px]">
                    <div class="max-w-[400px]" style="order: 1; text-align: left">
                        <h1 class="text-[30px] font-thin">Bookmark Verses</h1>
                        <p>
                            Bookmark verses so that you can come back to them later. This is important if your reading,
                            and have stopped on a particular verse or chapter.
                        </p>
                    </div>
                    <a
                        class="dark:block hidden rounded-xl overflow-hidden"
                        href="~/assets/images/features/bookmark-dark.png"
                    >
                        <img class="max-w-[300px]" src="~/assets/images/features/bookmark-dark.png" alt="" srcset="" />
                    </a>
                    <a
                        class="dark:hidden block rounded-xl overflow-hidden"
                        href="~/assets/images/features/bookmark-light.png"
                    >
                        <img class="max-w-[300px]" src="~/assets/images/features/bookmark-light.png" alt="" srcset="" />
                    </a>
                </div>
                <div class="flex flex-wrap items-center justify-center gap-[20px] mb-[10px]">
                    <div class="max-w-[400px]" style="text-align: right">
                        <h1 class="text-[30px] font-thin">Create Prayer List</h1>
                        <p>
                            You can also use this sword to create prayer list so that you can list all the things you
                            like to pray. e.g. family, friends, love once, your paster, your parents, etc..
                        </p>
                    </div>
                    <a
                        class="dark:block hidden rounded-xl overflow-hidden"
                        href="~/assets/images/features/create-prayer-list-dark.png"
                    >
                        <img
                            class="max-w-[300px]"
                            src="~/assets/images/features/create-prayer-list-dark.png"
                            alt=""
                            srcset=""
                        />
                    </a>
                    <a
                        class="dark:hidden block rounded-xl overflow-hidden"
                        href="~/assets/images/features/create-prayer-list-light.png"
                    >
                        <img
                            class="max-w-[300px]"
                            src="~/assets/images/features/create-prayer-list-light.png"
                            alt=""
                            srcset=""
                        />
                    </a>
                </div>
                <div class="flex flex-wrap items-center justify-center gap-[20px] mb-[10px]">
                    <div class="max-w-[400px]" style="order: 1; text-align: left">
                        <h1 class="text-[30px] font-thin">Highlight Phrases or words</h1>
                        <p>
                            You can mark/highlight words/phrases to show importance. The highlights will be saved for
                            easy access.
                        </p>
                    </div>
                    <a
                        class="dark:block hidden rounded-xl overflow-hidden"
                        href="~/assets/images/features/highlight-dark.png"
                    >
                        <img class="max-w-[300px]" src="~/assets/images/features/highlight-dark.png" alt="" srcset="" />
                    </a>
                    <a
                        class="dark:hidden block rounded-xl overflow-hidden"
                        href="~/assets/images/features/highlight-light.png"
                    >
                        <img
                            class="max-w-[300px]"
                            src="~/assets/images/features/highlight-light.png"
                            alt=""
                            srcset=""
                        />
                    </a>
                </div>
                <div class="flex flex-wrap items-center justify-center gap-[20px] mb-[10px]">
                    <div class="max-w-[400px]" style="text-align: right">
                        <h1 class="text-[30px] font-thin">Take Notes</h1>
                        <p>
                            &lt;b&gt;Im recommending that you right your notes on your personal notebook, use pen and
                            paper.&lt;/b&gt; If you don't have notebook in your moment, you can use this feature to take
                            notes.
                        </p>
                    </div>
                    <a
                        class="dark:block hidden rounded-xl overflow-hidden"
                        href="~/assets/images/features/notes-dark.png"
                    >
                        <img class="max-w-[300px]" src="~/assets/images/features/notes-dark.png" alt="" srcset="" />
                    </a>
                    <a
                        class="dark:hidden block rounded-xl overflow-hidden"
                        href="~/assets/images/features/notes-light.png"
                    >
                        <img class="max-w-[300px]" src="~/assets/images/features/notes-light.png" alt="" srcset="" />
                    </a>
                </div>
                <div class="flex flex-wrap items-center justify-center gap-[20px] mb-[10px]">
                    <div class="max-w-[400px]" style="order: 1; text-align: left">
                        <h1 class="text-[30px] font-thin">Search The Book</h1>
                        <p>
                            You can search a word, to search the entire bible. If your looking something in the bible a
                            word, a phrase, or a string of text you can search it.
                        </p>
                    </div>
                    <a
                        class="dark:block hidden rounded-xl overflow-hidden"
                        href="~/assets/images/features/search-dark.png"
                    >
                        <img class="max-w-[300px]" src="~/assets/images/features/search-dark.png" alt="" srcset="" />
                    </a>
                    <a
                        class="dark:hidden block rounded-xl overflow-hidden"
                        href="~/assets/images/features/search-light.png"
                    >
                        <img class="max-w-[300px]" src="~/assets/images/features/search-light.png" alt="" srcset="" />
                    </a>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>
