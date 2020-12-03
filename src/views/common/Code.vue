<template>
  <pre v-highlight class="language-javascript">
            <code>{{code}}</code>
        </pre>
</template>

<script>
export default {
    props: {
        code: String
    }
}
</script>

<style>

</style>