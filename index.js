'use strict'

const L = window.L
import GeotagPhotoCrosshair from './src/Leaflet.GeotagPhoto.Crosshair'
import GeotagPhotoCamera from './src/Leaflet.GeotagPhoto.Camera'

// Object.assign polyfill, for IE<=11. From:
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
// TODO: I'm sure Babel can add this polyfill, too.
if (typeof Object.assign !== 'function') {
  Object.assign = function (target, varArgs) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object')
    }

    var to = Object(target)

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index]

      if (nextSource != null) {
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey]
          }
        }
      }
    }
    return to
  }
}

L.geotagPhoto = {
  crosshair: function (options) {
    return new GeotagPhotoCrosshair(options)
  },
  camera: function (feature, options) {
    return new GeotagPhotoCamera(feature, options)
  }
}

L.GeotagPhoto = {
  Crosshair: GeotagPhotoCrosshair,
  Camera: GeotagPhotoCamera
}
