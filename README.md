# Agence de voyage

**Projet d’application mobile statique**

Création d'une application mobile statique pour une agence de voyage afin de lui montrer sa future app et ses possibilités, afin de décrocher un contrat et leur créer une app.

L’application comporte ces écrans :
- L’accueil : Présentation de l’entreprise.
- Nos services : Les différentes activités et services.
- Nos circuits : Des photos et descriptions de différents circuits proposés.
- Contact : Les informations utiles pour contacter l’agence de voyage.

L’écran nos circuits est une liste d’image avec un titre à chaque fois.  
Au clic sur un circuit, cela doit faire apparaitre un autre écran avec la ou les photos et la description correspondante à cette dernière.  
Le maquettage de l’application mobile est réalisé avec **Figma**

-----

> $ npm install react-native-paper

```
     module.exports = function(api) {
       api.cache(true);
       return {
         presets: ['babel-preset-expo'],
         env: {
           production: {
             plugins: ['react-native-paper/babel'],
           },
         },
       };
     };
```

> $ npm install @react-navigation/native @react-navigation/native-stack  
> $ expo install react-native-screens react-native-safe-area-context  
> $ npm install @react-navigation/bottom-tabs  

les icônes : https://github.com/oblador/react-native-vector-icons

> $ npm i react-native-vector-icons  

Choisir une icône : https://ionic.io/ionicons

---

Création design perso avec Figma puis résultats sous React Native/Expo  

<img src="https://user-images.githubusercontent.com/35977024/187668466-6a3a1f04-600c-4801-a359-1750f00c01b1.jpg" width="150" align="left">
<img src="https://user-images.githubusercontent.com/35977024/187668470-685c4572-c98f-4974-b1a9-9945f8d4f6bd.jpg" width="150" align="left">
<img src="https://user-images.githubusercontent.com/35977024/187668467-fb5a3b9f-b213-4cda-9d13-cd571a663d5b.jpg" width="150" align="left">
<img src="https://user-images.githubusercontent.com/35977024/187668463-8754fd0f-eb44-4f3e-9714-5a5bd2f38399.jpg" width="150" align="left">

https://user-images.githubusercontent.com/35977024/187674097-616b1989-9124-4856-b202-5dfd66f26cab.mp4
