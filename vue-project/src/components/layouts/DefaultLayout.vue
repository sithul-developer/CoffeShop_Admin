<template>
    <AppNavbar></AppNavbar>
    <AppSidebar></AppSidebar>
    <div class="content-wrapper">
        <router-view />
    </div>
    <AppFooter></AppFooter>
    <aside class="control-sidebar control-sidebar-dark">
    </aside>
</template>
<!--  -->

<script>

export default {
    name: "DefaultLayout",
    data() {
        return {

        }
    }
}

</script>