import app from "./app.js";
import { connectdb } from "./db.js";

connectdb();
app.listen(4000);
console.log('Papu servidor conectado'+ " en el puerto 4000");
