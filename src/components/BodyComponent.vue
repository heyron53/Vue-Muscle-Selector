<template>
    <div class="d-flex justify-content-center">
        <h1 v-if="!bodyChange">Male Human Body</h1>
        <h1 v-else>Female Human Body</h1>
    </div>
    <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-info" @click="changeBodyType">Change body type</button>
    </div>
    <div class="d-flex justify-content-center">
        <div v-if="!bodyChange" class="row" style="width: 50em">
            <div class="col-6">
                <MaleFront/>
            </div>
            <div class="col-6">
                <MaleBack/>
            </div>
            
        </div>
        <div v-else  class="row" style="width: 50em">
            <div class="col-6">
                <FemaleFront/>
            </div>
            <div class="col-6">
                <FemaleBack/>
            </div>
        </div>
    </div>
    
</template>
<script setup>

    import { ref } from 'vue';

    const bodyChange = ref(false);

    const changeBodyType = () => {
        bodyChange.value = !bodyChange.value;
    }

</script>