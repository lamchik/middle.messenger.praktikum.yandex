import Handlebars from 'handlebars'

export default function profileLayout(options) {
  var result = '<div class="profileLayout">' + options.fn(this) + '</div>';
  return new Handlebars.SafeString(result)
}

