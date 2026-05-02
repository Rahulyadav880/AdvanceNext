export default async function Folderpage({params}){
    
    return <div>
        hi there
        {JSON.stringify(await params.folderIds)}
    </div>
}