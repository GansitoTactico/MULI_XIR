import app from "./app.js";
import { connectdb } from "./db.js";

connectdb();
app.listen(5000);
console.log('servidor conectado'+ " en el puerto 5000");
