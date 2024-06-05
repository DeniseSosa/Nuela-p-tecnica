
import express from 'express';
import { getProfesoresHandler } from './handlers/profesores/getProfesoresHandler';
import { getProfesorByIdHandler } from './handlers/profesores/getProfesorByIdHandler';
import { putProfesorByIdHandler } from './handlers/profesores/putProfesorIdHandler';
import { deleteProfesorByIdHandler } from './handlers/profesores/deleteProfesorByIdHandler';
import { postCursosHandler } from './handlers/cursos/postCursosHandler';
import { getCursoHandler } from './handlers/cursos/getCursoHandler';
import { semanalTotalHandler } from './handlers/filterHandlers/semanalHandler/semanalTotalHandler';
import { semanalLectivasHandler } from './handlers/filterHandlers/semanalHandler/semanalLectivaHandler';
import { semanalComplementariasHandler } from './handlers/filterHandlers/semanalHandler/semanalComplementariaHandler';
import { anualTotalHandler } from './handlers/filterHandlers/anualHandler/anualTotalHandler';
import { anualLectivasHandler } from './handlers/filterHandlers/anualHandler/anualLectivasHandler';
import { anualComplementariasHandler } from './handlers/filterHandlers/anualHandler/anualComplementariasHandler';
const app = express();
const PORT= 3001 


app.use(express.json())


app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
      );
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
        );
        next();
      });
      


//Profesores
app.get('/profesores', getProfesoresHandler)
app.get('/profesores/:id', getProfesorByIdHandler)
app.put('/profesores/:id', putProfesorByIdHandler)
app.delete('/profesores/:id', deleteProfesorByIdHandler)
//Cursos
app.get('/cursos/profesores/:id', getCursoHandler)
app.post('/cursos/profesores/:id', postCursosHandler)
//Filtros//semanales
app.get('/cursos/profesores/:id/semanal', semanalTotalHandler)
app.get('/cursos/profesores/:id/semanal/lectivas', semanalLectivasHandler)
app.get('/cursos/profesores/:id/semanal/complementarias', semanalComplementariasHandler)
//Filtros//anuales
app.get('/cursos/profesores/:id/anual', anualTotalHandler)
app.get('/cursos/profesores/:id/anual/lectivas', anualLectivasHandler)
app.get('/cursos/profesores/:id/anual/complementarias', anualComplementariasHandler)
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
    
}) 


