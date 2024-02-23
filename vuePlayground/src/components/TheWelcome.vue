<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { ref } from 'vue'

const step = ref(0);

const update = () => {
  step.value++;
}


setInterval(() => update(), 1000);

</script>

<template>
  <WelcomeItem class="fade-in-text" :class="{ 'd-none': step < 0 }">
    <template #icon>
      <EcosystemIcon class="green-icon"/>
    </template>
    <template #heading>Level 300</template>
    Documents received from customer. The customer is typically the owner of the construction
    project and will likely have level 300/350 documents.
  </WelcomeItem>

  <WelcomeItem class="fade-in-text" :class="{ 'd-none': step < 1 }">
    <template #icon>
      <img src="https://alliedbim.com/wp-content/uploads/2023/08/5.png"
        height="40"/>
        
        <!-- <ToolingIcon /> -->
      </template>
      <template #heading>Level 500</template>
      Custom Revit tools are leveraged to convert the received model into a model that can be fabricated
    </WelcomeItem>
    
    <WelcomeItem class="fade-in-text" :class="{ 'd-none': step < 2 }">
      <template #icon>
        <img src="https://alliedbim.com/wp-content/uploads/2023/08/6.png"
          height="40"/>
          <!-- <EcosystemIcon /> -->
        </template>
        <template #heading>Platform</template>
        The detailed model is then uploaded to a cloud platform where it can be distributed to work centers to be fabricated.
      </WelcomeItem>
      
      <WelcomeItem class="fade-in-text" :class="{ 'd-none': step < 3 }">
        <template #icon>
          <img src="https://alliedbim.com/wp-content/uploads/2023/08/7.png"
            height="30"/>
          <!-- <CommunityIcon /> -->
        </template>
    <template #heading>Ecosystem</template>
    Once the model is uploaded into the platform it is then sent to fabrication machines at brick and mortar pop-up locations. These locations a active websockets, allowing them to be controlled remotely by the server. Once complete, status data is sent back to the server.
  </WelcomeItem>

  <WelcomeItem class="fade-in-text" :class="{ 'd-none': step < 4 }">
    <template #icon>
      <SupportIcon class="text-danger" />
    </template>
    <template #heading>Delivery</template>
    The final product is delivered to the construction site and installed by the GC.
  </WelcomeItem>
</template>

<style scoped>

.green-icon {
  color: hsla(160, 100%, 37%, 1);

}
.fade-in-text {
  color: gray;
  animation: fadeIn 1s;
  -webkit-animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
  -ms-animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>