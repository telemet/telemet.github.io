<template>
  <!-- eslint-disable vue/no-template-shadow -->
  <div class="">
    <validation-observer v-slot="{invalid, handleSubmit}">
      <form
        ref="formElement"
        class="mx-auto block w-full"
        @submit.prevent="handleSubmit(response)"
      >
        <!-- Form: Ref -->
        <div class="form-group xl">
          <validation-provider v-slot="{errors}" rules="required|alpha_num">
            <label class="control-label" for="user-ref">קוד הזמנה</label>
            <input
              v-model="inviteCode"
              type="text"
              class="form-control"
              required="required"
              name="entry.1664355950"
              placeholder="T-051F0EABF1"
            />

            <p class="mt-2 text-gray-500 tracking-wider text-sm leading-snug">
              <span v-if="state === 't'">
                קוד הזמנה להרשמה כחבר אמת ניתן להשיג ע״י קישור מדף
                <NuxtLink to="/g/telemet">
                  קבוצת טלאמת
                </NuxtLink>
              </span>
              <span v-if="state === 'g'">
                קוד הזמנה להרשמה כחבר תורם לקבוצה ניתן להשיג ע״י קישור מדף
                <NuxtLink to="/g">
                  הקבוצה
                </NuxtLink>
              </span>
              <span v-if="state === 'c'">
                קוד הזמנה להרשמה כחבר תורם למערכה ניתן להשיג ע״י קישור מדף
                <NuxtLink to="/c">
                  המערכה
                </NuxtLink>
              </span>
            </p>
            <span v-if="errors[0]" class="error">{{ errors[0] }} /></span>
          </validation-provider>
        </div>

        <div>
          <div class="form-group">
            <validation-provider v-slot="{errors}" rules="required|hebrew">
              <label class="control-label" for="firstName">
                שם פרטי <sup>1</sup>
              </label>
              <input
                v-model="firstName"
                type="text"
                required="required"
                name="entry.1807340457"
                class="form-control"
              />
              <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <div class="form-group">
            <validation-provider v-slot="{errors}" rules="required|hebrew">
              <label class="control-label" for="lastName">
                שם משפחה <sup>2</sup>
              </label>
              <input
                v-model="lastName"
                type="text"
                required="required"
                name="entry.93566032"
                class="form-control"
              />
              <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <!-- Form: Email -->
          <div class="form-group">
            <validation-provider v-slot="{errors}" rules="required|email">
              <label class="control-label" for="user-email">
                דוא״ל <sup>3</sup>
              </label>
              <input
                v-model="email"
                type="text"
                class="form-control"
                required="required"
                name="entry.1405482059"
              />
              <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <!-- Form: Select G -->
          <div v-if="state === 'g'" class="form-group">
            <validation-provider v-slot="{errors}" rules="required|numeric">
              <label class="control-label" for="donate">תרומה</label>
              <select v-model="donate" class="form-control select-css">
                <option disabled value="">סכום לבחירה</option>
                <option value="1">1 ₪ לחודש</option>
                <option value="2">2 ₪ לחודש</option>
                <option value="3">3 ₪ לחודש</option>
                <option value="5">5 ₪ לחודש</option>
                <option value="8">8 ₪ לחודש</option>
              </select>
              <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <!-- Form: Select G -->
          <div v-if="state === 'c'" class="form-group">
            <validation-provider v-slot="{errors}" rules="required|numeric">
              <label class="control-label" for="donate">תרומה</label>
              <select v-model="donate" class="form-control select-css">
                <option disabled value="">סכום לבחירה</option>
                <option value="1">1 ₪</option>
                <option value="2">2 ₪</option>
                <option value="3">3 ₪</option>
                <option value="5">5 ₪</option>
                <option value="8">8 ₪</option>
              </select>
              <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>

        <!-- <span>Selected: {{ donate }}</span> -->

        <hr class="border border-gray-700 my-4 mx-4" />

        <footer class="mx-auto px-4">
          <app-button
            :disabled="invalid"
            class="btn btn-lg bg-gradient-red text-white mx-auto w-full"
            title="שלח/י"
          />
          <div class="text-sm mt-4 block text-gray-500 tracking-wider">
            <p>
              <span class="sup">1 + 2. </span>
              טלאמת מכבדת את החופש לפרטיות של חבריה ולא מחייבת שימוש בשם לידה.
              <NuxtLink class="link" to="/tal.amitay/right-to-privacy">
                אנונימיות ברשת היא הכרחית לכולנו </NuxtLink
              >.
              <span class="sup">3. </span>
              כתובות דוא״ל נשארות חסויות ולעולם לא יפורסמו ע״י טלאמת. אם בחרת
              להירשם לקבוצה או מערכה, כתובת הדוא״ל שלך תשותף ע״י טלאמת באופן
              מוצפן עם מנהל הקבוצה או המערכה אליה נרשמת.
              <span class="sup">4. </span>
              תרומות ותמיכה שלא מבוססות על זמן ומלאכה יאספו באופן מאורגן ופרטי
              ע״י מנהל הקבוצה.
            </p>
          </div>
        </footer>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import axios from 'axios'
import {ValidationObserver, ValidationProvider} from 'vee-validate'
// eslint-disable-next-line no-unused-vars
// import {required} from '@/plugins/vee-validate'
// import AppButton from '@/components/AppButton'

export default {
  components: {
    // AppButton,
    ValidationObserver,
    ValidationProvider
  },
  props: {
    state: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      ref: null,
      firstName: null,
      lastName: null,
      email: null,
      donate: '',
      inviteCode: this.$route.query.id,
      // password: null,
      // confirmation: null,
      errors: [],
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  computed: {
    invitation: {
      get: () => this.inviteCode,
      set: (newVal) => (this.inviteCode = newVal)
    }
  },
  methods: {
    response() {
      const vm = this
      const formElement = vm.$refs.formElement
      const formData = new FormData(formElement)
      const url =
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeF_cuTqXYjd2cIxjvEZ5tEGLy-l4Ar2xSmuNXETpQMj6Rpog/formResponse'
      this.errors = []
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Invalid')
      } else {
        axios
          .post(url, formData)
          .then(function(response) {
            // console.log(response)
            // eslint-disable-next-line no-undef
            $nuxt.$router.push('/ok')
          })
          // eslint-disable-next-line handle-callback-err
          .catch(function(error) {
            // console.log(error)
            // eslint-disable-next-line no-undef
            $nuxt.$router.push('/ok')
          })
      }
    },
    validEmail(email) {
      return this.reg.test(this.email)
    }
  }
}
</script>

<style scoped lang="postcss">
/* .form {
  @apply w-9/12 mx-auto;
} */

.form-group {
  @apply relative mt-2 text-right px-4 py-2;
  & input {
    @apply py-03 px-3 border border-gray-900 bg-gray-700 text-gray-100 text-xl leading-tight rounded-lg w-full appearance-none;
  }
  &.xl {
    @apply bg-gray-800 py-6 rounded-lg border-dashed border-2 border-gray-700 mb-8;
    & input {
      @apply text-center tracking-widest text-2xl py-5 px-5 border-gray-900 bg-gray-600 text-gray-100;
    }
  }
}

sup,
.sup {
  @apply text-red-600;
}

.control-label {
  @apply block text-gray-500 text-lg font-normal mb-01 tracking-wide;
}

.error {
  @apply text-red-500 tracking-wider;
}

/* .form .error {
  @apply relative top-0 mt-1 text-sm text-white tracking-wide bg-gray-600 py-1 px-2 rounded block text-center border-r-8 border-red-600;
} */

input:focus,
input:valid {
  @apply text-white;
}

input::placeholder {
  @apply text-gray-800;
}

input {
  &:focus {
    @apply outline-none shadow-outline;
  }
}

/* class applies to select element itself, not a wrapper element */
.select-css {
  @apply m-0 w-full max-w-full block text-xl font-bold text-gray-400 bg-gray-800 leading-loose rounded-md appearance-none py-02 px-3 cursor-pointer;
  background-image: url("data:image/svg+xml,%3Csvg width='14px' height='8px' viewBox='0 0 14 8' version='1.1' xmlns='http://www.w3.org/2000/svg'%0A%3E%3Cpath fill='%23EAEAEA' d='M13.7401235,0.263850125 C13.5670641,0.0879013967 13.3619212,0 13.1248863,0 L0.875065843,0 C0.637935163,0 0.432935881,0.0879013967 0.259732797,0.263850125 C0.0865297132,0.439993433 0,0.648242398 0,0.888986179 C0,1.12968131 0.0865297132,1.33793028 0.259732797,1.51392765 L6.38466695,7.7359553 C6.55806158,7.91190402 6.76306086,8 7,8 C7.23693914,8 7.44212996,7.91190402 7.61518939,7.7359553 L13.7401235,1.51387901 C13.9131351,1.33793028 14,1.12968131 14,0.888937534 C14,0.648242398 13.9131351,0.439993433 13.7401235,0.263850125 Z' %3E%3C/path%3E%3C/svg%3E%0A"),
    linear-gradient(to bottom, #222222 0%, #222222 100%);
  background-repeat: no-repeat, repeat;
  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right 1em top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 0.65em auto, 100%;
}
/* Hide arrow icon in IE browsers */
.select-css::-ms-expand {
  display: none;
}
/* Hover style */
.select-css:hover {
  border-color: #888;
}

/* Set options to normal weight */
.select-css option {
  @apply text-gray-400;
  /* font-weight: normal; */
}

/* Support for rtl text, explicit support for Arabic and Hebrew */
*[dir='rtl'] .select-css,
:root:lang(ar) .select-css,
:root:lang(iw) .select-css {
  background-position: left 1em top 50%, 0 0;
  /* padding: 0.6em 0.8em 0.5em 1.4em; */
}

/* Disabled styles */
.select-css:disabled,
.select-css[aria-disabled='true'] {
  color: rgb(77, 77, 77);
  background-image: url("data:image/svg+xml,%3Csvg width='14px' height='8px' viewBox='0 0 14 8' version='1.1' xmlns='http://www.w3.org/2000/svg'%0A%3E%3Cpath fill='%23EAEAEA' d='M13.7401235,0.263850125 C13.5670641,0.0879013967 13.3619212,0 13.1248863,0 L0.875065843,0 C0.637935163,0 0.432935881,0.0879013967 0.259732797,0.263850125 C0.0865297132,0.439993433 0,0.648242398 0,0.888986179 C0,1.12968131 0.0865297132,1.33793028 0.259732797,1.51392765 L6.38466695,7.7359553 C6.55806158,7.91190402 6.76306086,8 7,8 C7.23693914,8 7.44212996,7.91190402 7.61518939,7.7359553 L13.7401235,1.51387901 C13.9131351,1.33793028 14,1.12968131 14,0.888937534 C14,0.648242398 13.9131351,0.439993433 13.7401235,0.263850125 Z' %3E%3C/path%3E%3C/svg%3E%0A"),
    linear-gradient(to bottom, #222222 0%, #222222 100%);
}

/* .select-css:disabled:hover,
.select-css[aria-disabled='true'] {
  border-color: #aaa;
} */
</style>
