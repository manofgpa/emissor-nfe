import states from '../models/states.js'
import modalidades from '../models/modalidades.js'
import fretes from '../models/fretes.js'
import paymentMethods from '../models/meioPagamentos.js'
import formaPagamentos from '../models/formaPagamentos.js'
import Joi from "joi"

const getGenerator = (req, res) => {
    res.render('pages/generator', { states, modalidades, fretes, paymentMethods, formaPagamentos })
}


export default { getGenerator }