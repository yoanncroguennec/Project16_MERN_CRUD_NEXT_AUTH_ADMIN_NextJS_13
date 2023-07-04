Bonjour, je vous présente une application CRUD & MERN sans utiliser le context pour la partie CRUD.
Pour la partie "Login" pour tester l'application voici les identifiants :
"user : yoann.croguennec@gmail.com / password : 95449544"

***
***

<b><u>Procédure Effectué :</u></b><br/>
Name BDD : "Project16_MERN_CRUD_NEXTAUTH_NEXTJS_13"
Lien Github : "https://github1s.com/yoanncroguennec/Project16_MERN_CRUD_NEXT_AUTH_ADMIN_NextJS_13"
Lien Vercel : "https://project16-mern-crud-next-auth-admin-next-js-13.vercel.app/"

***
***

<b><u>Informations du Projet :</u></b><br/>
### Step 1 - Front - Mise en place de la partie Front 'Home", "Categories", "Login", "Register"
### Step 2 - Back Config Server - Config connectDB
### Step 3 - Back Models Server - Create Models User & Post
### Step 4 - "getAllPosts"
1. Back "app/api/posts" - Mise en place de la méthod "Get" for "getAllPosts"
2. Front folder Blog - Call API "getAllPosts"
### Step 5 - Next JS Auth
1. Back - Create "src/app/api/auth/[...nextauth]/route.js
2. Back - Mise en place du Provider "Google" pour se connecter
3. Mise en place des variables d'environnement "NEXTAUTH_SECRET" & "NEXTAUTH_URL"
4. Front - Mise en place du Provider "Google" dans la partie Login du Front
### Step 6 - Partie Register
1. Front (register) - Mise en place du Formulaire "Register" sans la logique
2. Back (Register) - Create "src/app/api/auth/register/route.js"
### Step 7 - Next JS Auth
1. Back - Mise en place de "CredentialsProvider" pour se loguer via mail
2. Front Login - Mise en place du formulaire "Login" sans la logique.
3. Front Login - Mise en place de la logique (api Login) du formulaire "Login".
### Step 8 - Dashboard
1. Front - Mise en place du Formulaire "Add new Post" sans la logique.
2. Back "app/api/posts" - Mise en place de la méthod "Post" for "postPost"
3. Back "app/api/posts/[id]" - Mise en place de la function "DELETE"
4. Front - Mise en place de la function "handleDelete()"

<br />
Cliquez sur l'image ci-dessous pour être redirigée vers la vidéo Youtube présentant le Projet "CRUD" :

[![texte alternatif de l'image](https://res.cloudinary.com/dky2vpnyr/image/upload/v1688510732/MyPortfolio/Project16_MERN_CRUD_Next_Auth_Admin_NextJS_13/Screenshot_from_2023-07-05_00-44-24_fz5uxq.png)](https://www.youtube.com/watch?v=Ry6IJt2_jzI&t=34s "Youtube : Présetation projet CRUD
")
