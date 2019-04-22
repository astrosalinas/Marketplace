# App Marketplace

_App_

## Comenzando 🚀

_To run the project is very simple_

### Instalación 🔧

_In the terminal, it runs for the mode development_

```
yarn
yarn dev
```

## Routes ⚙️
## Ad 🖇️
```
get('/ads', controllers.AdController.index)
get('/ads/:id', controllers.AdController.show)
post('/ads', controllers.AdController.store)
put('/ads/:id', controllers.AdController.update)
delete('/ads/:id', controllers.AdController.destroy)
```
### Filters params for index ⌨️
_all these parameters go after ads? all united through & or independent_
```
price_min=50
price_max=100
title=example
page=2
```
