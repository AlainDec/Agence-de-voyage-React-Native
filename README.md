# 12-agence-de-voyage

**Projet d’application mobile statique**

Une agence de voyage vous demande de faire une application mobile lui permettant de présenter son activité.

L’application devra au minimum comporter ces écrans :
- L’accueil : Présentation de l’entreprise.
- Nos services : Les différentes activités et services.
- Nos circuits : Des photos et descriptions de différents circuits proposés.
- Contact : Les informations utiles pour contacter l’agence de voyage.

L’écran nos circuits devra être une liste d’image avec un titre à chaque fois.

Au clic sur un circuit, cela doit faire apparaitre un autre écran avec la ou les photos et la description correspondante à cette dernière.

Le maquettage de l’application mobile devra être réalisé en amont

-----

npm install react-native-paper

>     module.exports = function(api) {
>       api.cache(true);
>       return {
>         presets: ['babel-preset-expo'],
>         env: {
>           production: {
>             plugins: ['react-native-paper/babel'],
>           },
>         },
>       };
>     };

$ npm install @react-navigation/native @react-navigation/native-stack

$ expo install react-native-screens react-native-safe-area-context

$ npm install @react-navigation/bottom-tabs

les icônes : https://github.com/oblador/react-native-vector-icons

$ npm i react-native-vector-icons

Choisir une icône : https://ionic.io/ionicons
