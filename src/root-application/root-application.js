import * as singleSpa from 'single-spa';

singleSpa.registerApplication('react', () =>
  import ('../app1/app1.js'), pathPrefix('/app1'));
singleSpa.registerApplication('angular', () =>
  import ('../app2/app2.js'), pathPrefix('/app2'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}