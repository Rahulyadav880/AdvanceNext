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

CSR VS SSR
Client side rendering means rendering happens on the browser or client like happens in react 

Server side rendering means rendering all the things on the server itself and give the response on the client like happens in Nextjs (although it also has CSR)

Static site generation
some components or files which will be same for everyone and will not change is static
if anything is inside index.html in app folder then it is static thing which will not re-render.
For custom static files we have to build it and the html file will be spit out in the .next folder.

Hydration
static things are rendered or generated on the server side and non static or dynamics will be rendered on the client and there will a checking that the things coming from the server and generated on the client are same or not. If same then it is ok but if it is not same then a hydration error will show up.