# rice-and-shine

shine&rice
Website for a paella food stand

deleted none-moudles from backend/src but added .gitignore?

//

1. Get subdomain for backend, api.riceandshinepaella.com/ once you get ip address from servcer and input it in data field

2. Get backend server using google cloud.
   // other popular server to host apps

rsa - assymetrical encryption.. public key or private key to encrypt.. if public key encrypts then private key decrypts it

// code for creating key ssh-keygen -t rsa -b 4096 -C USERNAME
//config file follows this format for ssh to save time to avoid commands 
Host gcp
HostName your_ip
User your_user_name
IdentityFile /Users/david/.ssh/gcp

1. SSH (protocol, one of the option is using rsa key pair) used Once for VM, and once for Github, we used different protocol to gain access to email through google api

O


include ghpages in package.json->run npm build->run deoploy->settings of gitbuh pages-> create squarespace cname custom domain using github documentation -> set custom domain 

Once the github pages is pushed with the deployed /dist folder then go to vm
clone repo 



To Do:

1) Check if subdomains work, which ones
2) replace current gmail address with @riceandshinepaella.com or (ricenshine) inside backend/index3.
3) Using VM enable backend server to process email
4) Change Icon
expose/open 5002 port on firewall, also open port 3000 gcp settings... 

redirect uri: instead of using localhost, you need to api.riceandshinepaella.com:3000/google-auth



// backend
in terminal: ssh gcp_paella 




// to get new email working: Download  JSON token and refresh token 

inside VM Folder, drag and drop new key.json new token.json and update index.js to point to new email

//another way is using a command scp in terminal... scp can be used as a copy


