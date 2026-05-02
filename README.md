ROUTE GROUP

(folder) -> route group ex = (auth)
1. avoid folder on hitting the api endpoint means we can directly hit the inner endpoints
2. groups all the routes at one place in a single folder and also used to implement layout file as per our wish just like i have done in the auth folder inside which signup and signin folders are there
3. layout got apply to the pages which come after it (means one layer inside folders and files) also it applies to all the nested files and folders

[DYNAMIC ROUTES]

1. It lets you to define or give dynamic parameters to the endpoints 
ex - localhost:3000/blog/1 or localhost:3000/blog/2 or localhost:3000/blog/3 and so on...

CATCH ALL [...]

If you don't know that how much long or nested your endpoint is then  use catch all handler
but there is a problem that it will not render anything if we hit info endpoint, it will catch info/anything/anything/anything but no only localhost:3000/info.

Either approach is correct
1st approach to solve the problem -
SOL - add a page.tsx in the info folder so that if we info then there must be something to render on this endpoint.

2nd approach to solve the problem is -
add two square brackets to handle this thing of rendering [[]]
now the localhost:3000/info will be handling by page.tsx inside info/[[...folderIds]]