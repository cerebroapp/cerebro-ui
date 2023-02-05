# cerebro-ui

> It is UI components library for [Cerebro app](http://www.cerebroapp.com) plugins

## Components

This package contains main UI elements that you need to use in your plugin previews:

### Keyboard navigation lists
This component used to build lists with keyboard navigation:
* Arrows and <kbd>ctrl+j/k</kbd> used to select next or previous item;
* <kbd>enter</kbd> or <kbd>o</kbd> used to select item;
* <kbd>←</kbd> and <kbd>esc</kbd> used to move selection back to main results list;

```js
import { KeyboardNav, KeyboardNavItem } from 'cerebro-ui'

const Preview = ({ items, onSelect }) => (
  <KeyboardNav>
    <ul className={styles.list}>
    {
      items.map(s => (
        <KeyboardNavItem key={s} onSelect={() => onSelect(item)}>
          {item}
        </KeyboardNavItem>
      ))
    }
    </ul>
  </KeyboardNav>
)

```

### Loading
For consistence, it is recommended to use one loading spinner component in all plugins:

```jsx
import { Loading } from 'cerebro-ui'

const Preview = ({ isLoading }) => (
  isLoading ? <Loading /> : <MyPluginPreview />
)

```

### Form elements

```jsx
import { Button, Checkbox, Select, Text } from 'cerebro-ui/Form'
```


## Related

* [Cerebro](https://github.com/cerebroapp/cerebro) – main repo for Cerebro app;

## License

MIT © [CerebroApp](https://github.com/cerebroapp/cerebro-ui/blob/master/LICENSE)