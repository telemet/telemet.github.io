<template>
  <!-- eslint-disable vue/no-template-shadow -->
  <div class="container">
    <validation-observer v-slot="{invalid, handleSubmit}">
      <form
        ref="formElement"
        class="form w-9/12 mx-auto lg:w-1/2"
        @submit.prevent="handleSubmit(response)"
      >
        <div>
          <div class="form-group">
            <validation-provider v-slot="{errors}" rules="required|hebrew">
              <input
                v-model="firstName"
                type="text"
                required="required"
                name="entry.1807340457"
                class="form-control"
              />
              <label class="control-label" for="firstName">שם פרטי</label>
              <i class="bar" />
              <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <div class="form-group">
            <validation-provider v-slot="{errors}" rules="required|hebrew">
              <input
                v-model="lastName"
                type="text"
                required="required"
                name="entry.93566032"
                class="form-control"
              />
              <label class="control-label" for="lastName">שם משפחה</label>
              <i class="bar" />
              <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
            </validation-provider>

            <!-- Form: Email -->
            <div class="form-group">
              <validation-provider v-slot="{errors}" rules="required|email">
                <input
                  v-model="email"
                  type="text"
                  class="form-control"
                  required="required"
                  name="entry.1405482059"
                />
                <label class="control-label" for="user-email">דוא״ל</label>
                <i class="bar" />
                <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
              </validation-provider>
            </div>

            <!-- Form: Ref -->
            <div class="form-group">
              <validation-provider v-slot="{errors}" rules="required|alpha_num">
                <input
                  v-model="inviteCode"
                  type="text"
                  class="form-control"
                  required="required"
                  name="entry.1664355950"
                />
                <label class="control-label" for="user-ref">מספר הזמנה</label>
                <i class="bar" />
                <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
              </validation-provider>
            </div>
          </div>
        </div>

        <div class="mx-auto py-20">
          <app-button
            :disabled="invalid"
            class="btn btn-red mx-auto "
            title="שלח/י"
          />
          <span class="text-sm mt-4 block text-gray-500"
            >כתובות דוא״ל נשארות חסויות ולעולם לא יפורסמו.</span
          >
        </div>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import axios from 'axios'
import {ValidationObserver, ValidationProvider} from 'vee-validate'
// eslint-disable-next-line no-unused-vars
// import {required} from '@/plugins/vee-validate'
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppButton,
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      ref: null,
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

.form .error {
  @apply relative top-0 mt-1 text-sm text-white tracking-wide bg-gray-600 py-1 px-2 rounded block text-center border-r-8 border-red-600;
}

.form-group {
  @apply relative mt-8 text-right z-0;
  & input {
    @apply h-10 text-right bg-transparent w-full;
  }
}

.control-label {
  @apply absolute top-0 right-0 pointer-events-none pl-2 z-10 text-white text-lg;
  transition: all 0.2s ease;
}

.bar {
  @apply relative block border-b border-gray-600;
  &::before {
    content: '';
    @apply w-0 bottom-0 absolute bg-red-700 z-10;
    height: 1px;
    left: 50%;
    transition: left 0.2s ease, width 0.2s ease;
  }
}

input:focus,
input:valid {
  @apply text-white;
  & ~ .control-label {
    @apply text-sm text-gray-300 left-0;
    top: -1rem;
  }
}

input {
  &:focus {
    @apply outline-none;
    & ~ .control-label {
      @apply text-gray-300;
    }
    & ~ .bar {
      &::before {
        @apply w-full left-0;
      }
    }
  }
}
</style>
