const express = require('express');
const methodOverride = require('method-override');
const connectDB = require('./src/config/db');
const locutorRoutes = require('./src/routes/locutorRoutes');
const programacionRoutes = require('./src/routes/programacionRoutes');
const publicidadRoutes = require('./src/routes/publicidadRoutes');
const noticiaRoutes = require('./src/routes/noticiaRoutes');
const eventoRoutes = require('./src/routes/eventoRoutes');
const oyenteRoutes = require('./src/routes/oyenteRoutes');
const comentarioRoutes = require('./src/routes/comentarioRoutes');
const multimedioRoutes = require('./src/routes/multimedioRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const tarifaRoutes = require('./src/routes/tarifaRoutes');

const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/locutores', locutorRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { error: err.message });
});

app.use('/locutores', locutorRoutes);
app.use('/programacion', programacionRoutes);
app.use('/publicidad', publicidadRoutes);
app.use('/noticias', noticiaRoutes);
app.use('/eventos', eventoRoutes);
app.use('/oyentes', oyenteRoutes);
app.use('/comentarios', comentarioRoutes);
app.use('/multimedios', multimedioRoutes);
app.use('/clientes', clienteRoutes);
app.use('/tarifas', tarifaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
