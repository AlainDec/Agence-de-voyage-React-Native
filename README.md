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

---

![Screenshot_20220831-132111_Expo Go](https://user-images.githubusercontent.com/35977024/187667900-15f092e3-f6a3-4bd5-b41f-5cdde2590900.jpg)
<img src="https://user-images.githubusercontent.com/35977024/187667900-15f092e3-f6a3-4bd5-b41f-5cdde2590900.jpg" width="100" height="100">
![Screenshot_20220831-132008_Expo Go](https://user-images.githubusercontent.com/35977024/187667904-fc0a30aa-13a7-4ad3-b4f6-bc500d3b25f7.jpg)
![Screenshot_20220831-132130_Expo Go](https://user-images.githubusercontent.com/35977024/187667906-bfdd4b02-3491-47a0-abab-d091661249ef.jpg)
![Screenshot_20220831-132120_Expo Go](https://user-images.githubusercontent.com/35977024/187667907-a4d76ade-471e-4ff5-a085-3e987bcee3ab.jpg)

<img src="https://user-images.githubusercontent.com/35977024/187668463-8754fd0f-eb44-4f3e-9714-5a5bd2f38399.jpg" width="150">
![Screenshot_20220831-132008_Expo Go](https://user-images.githubusercontent.com/35977024/187668466-6a3a1f04-600c-4801-a359-1750f00c01b1.jpg)
![Screenshot_20220831-132120_Expo Go](https://user-images.githubusercontent.com/35977024/187668467-fb5a3b9f-b213-4cda-9d13-cd571a663d5b.jpg)
![Screenshot_20220831-132111_Expo Go](https://user-images.githubusercontent.com/35977024/187668470-685c4572-c98f-4974-b1a9-9945f8d4f6bd.jpg)
