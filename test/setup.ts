// Storybook will be using `module` as the 2nd parameter
// to storiesOf, but in our TypeScript setup, we don't have
// module defined under global.
declare global {
  var module
}

// we always make sure 'react-native' gets included first
import "react-native"

// libraries to mock
import "./mock-i18n"
import "./mock-reactotron"
