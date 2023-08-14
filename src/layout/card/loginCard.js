import Handlebars from 'handlebars'

export default function loginCard(options) {
  var result = '<div class="loginCard">' + options.fn(this) + '</div>';
  return new Handlebars.SafeString(result)
}

