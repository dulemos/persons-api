import { failure, success } from '../libs/response-lib.js'
import PersonsModel from '../models/PersonsModel.js'

const mock = [{
    id: 1, 
    name: "Eduardo Mendes",
    height: 180, 
    lactose: false,
    weight: 90.3
}]

export const apiGetAll = async (req, res) => {

    const data = await PersonsModel.find({})

    return success(req, res, {data: data})

}

export const apiGetById = async (req, res) => {
    if(!req.params.id) return failure(req, res, {message: "Request has no ID"}, 400)

    try {
        const {id} = req.params;
        const data = await PersonsModel.findById(id);
        return success(req, res, {data: data})
    }catch(e) {
        return failure(req, res, {message: "Person not found"}, 400)
    }
}

export const apiSave = async (req, res) => {
    try{
        const data = await PersonsModel.create(req.body);
        return success(req, res, {data: data})
    } catch (e) {
        return failure(req, res, e, 404)
    }

}

export const apiUpdate = async (req, res) => {
    if(!req.params.id) return failure(req, res, {message: "Request has no ID"}, 400)
    if(!req.body) return failure(req, res, {message: "Request has no body."}, 400)

    try {
        const {id} = req.params;
        const update = req.body;

        const data = await PersonsModel.findOneAndUpdate({_id: id}, {update})
        return success(req, res, update)
    } catch (e) {
        return failure(req, res, {message: "Invalid ID"}, 400)
    }
}

export const apiDelete = async (req, res) => {
    if(!req.params.id) return failure(req, res, {message: "Request has no ID"}, 400)

    try { 
        const {id} = req.params;
        const data = await PersonsModel.deleteOne({_id: id});
        return success(req, res, data)
    } catch (e) {
        return failure(req, res, e, 400)
    }
}