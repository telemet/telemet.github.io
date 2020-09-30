<template>
  <div class="min-h-screen pt-14">
    <div class="flex w-full">
      <!-- Sidebar A -->
      <aside class="hidden lg:flex w-3/12">
        <div class="w-full max-w-sm px-6">
          <div class="sticky inset-14 pt-2">
            <slot name="sidebarA"></slot>
          </div>
        </div>
      </aside>
      <!-- Main Content Area -->
      <main class="flex-1 max-w-2xl mx-auto p-2">
        <div class="mb-12">
          <slot name="main"></slot>
        </div>
      </main>
      <!-- Sidebar B -->
      <aside class="hidden lg:flex w-2/12">
        <div class="w-full max-w-xs ml-0 mr-auto">
          <div class="sticky inset-14">
            <slot name="sidebarB"></slot>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
