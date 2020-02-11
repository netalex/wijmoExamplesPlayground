Appunti

`npm install wijmo`


`npm install bootstrap@^4`

if

```sh
$ npm list jest
setup-with-angular-cli@0.0.0 <path>
+-- angular-playground@6.2.0
| `-- UNMET PEER DEPENDENCY jest@25.1.0  deduped`-- UNMET PEER DEPENDENCY jest@25.1.0

npm ERR! peer dep missing: jest@>=20 <=24, required by jest-image-snapshot@2.12.0
```
then

`$ npm install jest@~24 --save-dev`
