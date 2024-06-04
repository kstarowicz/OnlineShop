
const items = [
    {id:1, name: 'karolina'},
    {id:2, name: 'marek'},
]
exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: 'hello world',
    }
}