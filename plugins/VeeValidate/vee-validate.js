/* eslint-disable no-unused-vars */
// VeeValidate Config
// Source: https://logaretm.github.io/vee-validate/guide/basics.html

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from 'vee-validate'

import {
  required,
  email,
  confirmed,
  min,
  // eslint-disable-next-line camelcase
  alpha_num,
  numeric
} from 'vee-validate/dist/rules'
import he from '@/plugins/VeeValidate/vee-validate-he.json'

// Install rules
extend('required', required)
extend('email', email)
extend('confirmed', confirmed)
extend('min', min)
extend('alpha_num', alpha_num)
extend('numeric', numeric)

// Custom: Validate Hebrew
extend('hebrew', {
  validate: (value) => {
    const regex = new RegExp(/[\u0590-\u05FE]/g)
    return regex.test(value)
  },
  // message: 'חובה למלא {_field_} בעברית'
  message: 'חובה למלא שדה זה בעברית'
})

// extend('required', {message: 'חובה למלא שדה זה בעברית'})

localize('he', he)

// // Custom: Validate Images
// extend('imageUrl', {
//   validate: value => {
//     const regex = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png).*/)
//     return regex.test(value)
//   },
//   message: 'הפורמט של {_field_} אינו תקין'
// })
