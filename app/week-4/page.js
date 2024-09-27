import NewItem from "./new-item";


export default function Page(){
    return (
        <main style={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center"}}>
            <NewItem></NewItem>
        </main>
    )
}