<template>
  <div class="l-demo">
    <div class="l-demo__content">
      <div class="l-demo__example">
        <slot name="example"></slot>
      </div>
    </div>
    <l-divider />
    <div class="l-demo__toolbar">
      <l-space size="large">
        <div class="svg svg-codesandbox">
          <svg
            t="1628586546560"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="15108"
            width="17"
            height="17"
          >
            <path
              d="M512 972.8a34.133333 34.133333 0 0 1-14.472533-3.208533l-409.6-191.146667A34.133333 34.133333 0 0 1 68.266667 747.52v-471.04a34.133333 34.133333 0 0 1 19.729066-30.993067l409.6-191.146666a34.133333 34.133333 0 0 1 28.8768 0l409.6 191.146666A34.133333 34.133333 0 0 1 955.733333 276.48v471.04a34.133333 34.133333 0 0 1-19.6608 30.993067l-409.6 191.146666a34.133333 34.133333 0 0 1-14.472533 3.140267zM887.466667 328.021333L546.133333 473.156267v411.921066l170.666667-79.598933V663.552a68.266667 68.266667 0 0 1 39.662933-61.986133L887.466667 541.2864z m-750.933334 0v213.1968l131.140267 60.347734a68.266667 68.266667 0 0 1 39.5264 61.986133v141.9264L477.866667 885.077333V473.156267z m0 288.3584v109.226667l102.4 47.786667V663.552z m750.933334 0l-102.4 47.104v109.9776l102.4-47.786666z m-562.3808-406.186666l-138.8544 64.853333L512 413.422933l325.768533-138.4448-138.786133-64.853333L525.653333 283.989333a34.133333 34.133333 0 0 1-26.692266 0L325.085867 210.193067zM512 123.016533l-103.697067 48.401067 103.697067 44.100267 103.765333-44.032-103.765333-48.469334z"
              p-id="15109"
              fill="#333"
            />
          </svg>
        </div>

        <div class="svg svg-copy">
          <div
            v-if="!isCopySuccess"
            class="copy-svg"
            @click="handleCopyCode(code)"
          >
            <svg
              t="1628585304610"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7383"
              width="15"
              height="15"
            >
              <path
                d="M912.749751 0H339.522058a54.289819 54.289819 0 0 0-54.213995 54.593114V208.515365h-174.394669A54.289819 54.289819 0 0 0 56.6994 263.108478v706.298408a54.51729 54.51729 0 0 0 54.213994 54.593114h595.974825a54.51729 54.51729 0 0 0 54.213994-54.593114V792.358386h151.647538A54.51729 54.51729 0 0 0 966.963746 737.765272V54.593114A54.289819 54.289819 0 0 0 912.749751 0z m-8.340614 714.639023a14.709811 14.709811 0 0 1-14.406516 14.785635h-128.900408V263.108478a54.289819 54.289819 0 0 0-54.213994-54.593113H347.862673V77.719363a14.558164 14.558164 0 0 1 14.785634-14.785635h527.354314a14.48234 14.48234 0 0 1 14.406516 14.785635v636.91966z m-205.482414 231.262495a15.164754 15.164754 0 0 1-14.785635 15.164754H133.660525a14.823547 14.823547 0 0 1-14.406516-15.164754V286.234728a14.823547 14.823547 0 0 1 14.406516-15.164754h550.480563a15.164754 15.164754 0 0 1 14.785635 15.164754v659.66679zM212.896364 610.38134a31.315217 31.315217 0 0 0 31.087745 31.466864h252.114032a31.466864 31.466864 0 0 0 0-62.933728H243.984109a31.315217 31.315217 0 0 0-31.087745 31.466864z m31.087745-142.169567h183.493521a31.466864 31.466864 0 0 0 0-62.933728H243.984109a31.466864 31.466864 0 0 0 0 62.933728z m320.734543 284.339134H243.984109a31.466864 31.466864 0 0 0 0 62.933728h320.734543a31.466864 31.466864 0 0 0 0-62.933728z"
                p-id="7384"
                fill="#333"
              />
            </svg>
          </div>
          <div v-else class="copy-success" @mouseleave="handleSuccessIcon">
            <svg
              t="1629358251966"
              class="icon"
              viewBox="0 0 1290 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8949"
              width="15"
              height="15"
            >
              <path
                d="M334.037833 1023.999672a57.488633 57.488633 0 0 1-8.859549-0.656263 67.266951 67.266951 0 0 1-49.285347-33.206905L8.85955 522.942922A67.076634 67.076634 0 0 1 125.34622 456.39786l223.129398 390.93583L1171.691842 21.754919a67.070072 67.070072 0 1 1 94.829994 94.698742L384.635705 1001.161722l-3.150062 3.215688a67.070072 67.070072 0 0 1-47.44781 19.622262z"
                p-id="8950"
                fill="#36ad6a"
              />
            </svg>
          </div>
        </div>

        <div class="svg svg-code" @click="handleCodeVisible">
          <svg
            t="1628584940901"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="18203"
            width="20"
            height="20"
          >
            <path
              d="M541.141333 268.864l61.717334 16.938667-132.394667 482.474666-61.717333-16.938666 132.394666-482.474667zM329.002667 298.666667l44.885333 45.610666-175.36 172.586667 175.04 167.573333-44.266667 46.229334L106.666667 517.504 329.002667 298.666667z m355.882666 0l222.336 218.837333L684.586667 730.666667l-44.266667-46.229334 175.018667-167.573333L640 344.277333 684.885333 298.666667z"
              p-id="18204"
              fill="#333"
            />
          </svg>
        </div>
      </l-space>
    </div>

    <div v-show="codeVisible" class="l-demo__footer">
      <div class="l-demo__source">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import copy from 'clipboard-copy'
export default defineComponent({
  setup(props, { slots }) {
    const codeVisible = ref(false)

    const isCopySuccess = ref(false)

    const handleCodeVisible = () => {
      codeVisible.value = !codeVisible.value
    }

    const code = computed(() => {
      const codeSlots = slots.code?.()[0]
      return codeSlots?.props?.code ?? null
    })

    const handleCopyCode = (code: string) => {
      copy(code)
      isCopySuccess.value = true
    }

    const handleSuccessIcon = () => {
      setTimeout(() => {
        isCopySuccess.value = false
      }, 300)
    }

    return {
      code,
      codeVisible,
      handleCodeVisible,
      isCopySuccess,
      handleCopyCode,
      handleSuccessIcon,
    }
  },
})
</script>

<style lang="scss">
@import '@style/mixin.scss';
@import '@style/var.scss';
@include b(demo) {
  border: 1px solid $border;

  padding: 0 30px;
  margin: 20px 0;
  @import './styles/l-code.scss';

  @include e(content) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    padding-top: 30px;
    padding-bottom: 20px;

    .l-demo__example {
      flex: 1 1 auto;
    }
  }

  @include e(toolbar) {
    .svg {
      cursor: pointer;
    }

    padding-top: 10px;
    padding-bottom: 20px;
  }

  @include e(source) {
    padding-bottom: 20px;
  }
}
</style>
