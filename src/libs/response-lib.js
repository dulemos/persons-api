

export const success = (req, res, body) => {
    console.info('RESPONSE', 200, 'Success');
    body.status = "success";

    return res.status(200).json(body)
} 

export const failure = (req, res, error, code) => {
    let body = { 
        "status": false, 
        "error": error.message
    }

    return res.status(code).json(body)
}