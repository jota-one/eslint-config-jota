# eslint-config-jota

This is a very opinionated linting configuration used by our small and not
well-established company Jota One. It's opinionated in the way that it's
Vue and Typescript oriented, with a glimpse of prettier to automatically
rearrange your ugly code. 

The package is shipped with 2 options (for now). Let's check how to integrate
them in your eslint.config.js file (yes it's done for flat config only).

And as we're supporting Typescript, we'll demonstrate their usage directly in
a type-safe way:

### The default one
```
// @ts-check
import jota from 'eslint-config-jota'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    ...jota,
    {
        rules: {
            'your-other-rules': 'error'
        }
    }
)
```

This configuration will bring you directly a delightful linting for your JS/TS
files and Vue Single File components. It provides the __recommanded__ schemes
from Vue, JS and TS eslint configs.

On top of that, it will also sort your imports and rewrite your code with our
own home-cooked prettier settings.

### The easier one

The above base setting is not that easy to respect as is, especially if you're
adding it to an existing project.

To make things easier, you can add the.... easier config that will in fact
disable a few errors. Once added, your eslint.config.js file should look like this:

```
// @ts-check
import jota from 'eslint-config-jota'
import easier from 'eslint-config-jota/easier'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    ...jota,
    ...easier,
    {
        rules: {
            'your-other-rules': 'error'
        }
    }
)
```