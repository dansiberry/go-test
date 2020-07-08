<template>
    <div class="container">
        <div class="">
            <h3 class="title">Google Optimize Test</h3>

            <p><b>Experiments:</b></p>

            <ul>
                <li v-for="(experiment, i) in experimentsMapping" :key="i">
                    <p>handle: {{ experiment.handle }}</p>
                    <p>Experiment is live: {{ activeExperiments[experiment.handle] ? 'Yes' : 'No' }}</p>
                    <p>id: {{ experiment.id }}</p>
                </li>
            </ul>

            <div style="text-align: center">
                <p><b>Colour swap test example.</b></p>
                <p>Variants:  0 red (default), 1 blue</p>
                <p>Active variant:  {{ activeExperiments['colourSwapTest'] }}</p>

            </div>
            <div v-if="goLoaded" class="test-marker" :class="swapColour ? 'bg-blue' : 'bg-red'"></div>
            </div>
        </div>
    </div>

</template>

<script>
import googleOptimize from '~/mixins/google-optimize';

export default {
  mixins: [googleOptimize],

  computed: {
    swapColour() {
      return this.activeExperiments.colourSwapTest === '1';
    }
  }
}
</script>

<style>

.test-marker {
  width: 100px;
  height: 100px;
  margin: 30px auto;
  border-radius: 50%
}

ul {
    margin-top: 10px;
    margin-bottom: 60px;
}

li {
    margin: 15px 0;
}

.bg-red {
  background-color: red
}

.bg-blue {
  background-color: blue
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
