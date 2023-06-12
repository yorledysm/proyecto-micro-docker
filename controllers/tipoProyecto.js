const TipoProyecto = require('../models/tipoProyecto')
const { request, response} = require('express')

// crear

const createTipoProyecto = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const tipoProyectoDB = await TipoProyecto.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(tipoProyectoDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const tipoProyecto = new TipoProyecto(data)
        console.log(tipoProyecto)
        await tipoProyecto.save()
        return res.status(201).json(tipoProyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

const getTipoProyecto = async (req = request, 
    res = response) => {
        try{
            const tipoProyectosDB = await TipoProyecto.find()//select * from tipoEquipo where estado=?
            return res.json(tipoProyectosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}




//listar todos



// Actualizar 

 const updateTipoProyectoByID = async (req = request,
    res = response) => {
    try{
      
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
    
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoProyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}






        
        



   
         
      
 


module.exports = {
    createTipoProyecto,
     getTipoProyecto,
     updateTipoProyectoByID
      }