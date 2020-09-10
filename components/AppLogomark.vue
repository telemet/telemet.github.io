<template>
  <svg
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="presentation"
  >
    <defs>
      <linearGradient
        id="linearGradient-1"
        x1="82.1990967%"
        y1="84.3109131%"
        x2="15.8203125%"
        y2="16.7510986%"
      >
        <stop stop-color="#FF0C51" offset="0%"></stop>
        <stop stop-color="#FF0528" offset="100%"></stop>
      </linearGradient>
      <circle id="path-2" cx="256" cy="256" r="256"></circle>
    </defs>
    <g
      id="telemet-logomark-red-white-1024-copy-5"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="telemetNext"
        transform="translate(155.000000, 72.000000)"
        fill="#FEFEFE"
        fill-rule="nonzero"
      >
        <g transform="translate(0.280948, 0.004825)">
          <path
            d="M192.375,293.061568 L182.275316,227.140038 L129.149768,227.140038 L129.149768,96.1961195 C129.149768,78.1767129 137.967093,60.5741254 166.310786,60.5741254 L195.071298,60.5741254 L195.071298,4.46387365 C195.071298,4.46387365 168.972015,0.0071165165 144.027,0.0071165165 C91.9566868,0.0071165165 57.9057798,31.5571095 57.9057798,88.7254402 L57.9057798,227.140038 L0,227.140038 L0,293.061568 L57.9057798,293.061568 L57.9057798,364.210745 L129.149768,364.210745 L129.149768,293.061568 L192.375,293.061568 Z"
            transform="translate(97.535649, 182.108931) scale(1, -1) translate(-97.535649, -182.108931) "
          ></path>
        </g>
      </g>
      <g id="Group">
        <g id="Shape">
          <mask id="mask-3" fill="white">
            <use xlink:href="#path-2"></use>
          </mask>
          <use
            id="Mask"
            fill="url(#linearGradient-1)"
            xlink:href="#path-2"
          ></use>
          <path
            d="M365.986779,327.490317 L354.699977,253.822565 L295.330046,253.822565 L295.330046,107.491857 C295.330046,87.3550489 305.183761,67.6840391 336.858974,67.6840391 L369,67.6840391 L369,4.98045603 C369,4.98045603 339.833005,0 311.95595,0 C253.765286,0 215.712032,35.257329 215.712032,99.1433225 L215.712032,253.822565 L151,253.822565 L151,327.490317 L215.712032,327.490317 L215.712032,407 L295.330046,407 L295.330046,327.490317 L365.986779,327.490317 Z"
            fill="#FEFEFE"
            fill-rule="nonzero"
            mask="url(#mask-3)"
            transform="translate(260.000000, 203.500000) scale(1, -1) translate(-260.000000, -203.500000) "
          ></path>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 36
    },
    height: {
      type: [Number, String],
      default: 36
    }
  }
}
</script>

<style scoped lang="postcss">
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
