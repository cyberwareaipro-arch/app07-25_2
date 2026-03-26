import { connect, connection } from "mongoose"

const conn = {
    isConnected: false
}

export async function connectDB() {
    if (conn.isConnected) return;

    const db = await connect("mongodb+srv://cyberwareaipro_db_user:MOGqMGSzuleOlHpe@cluster0.euoqbwr.mongodb.net/?appName=Cluster0")
    console.log(db.connection.name)
    conn.isConnected = db.connections[0].readyState
}

connection.on(`connected`, () => {
    console.log(`Mongoose está conectado.`)
})

connection.on(`error`, (err) => {
    console.log(`Mongoose no ha podido conectarse.`, err)
})