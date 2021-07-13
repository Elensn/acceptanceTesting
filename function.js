
exports.myfunction = (event, context) => {
    return {
        'data': 'BrTestingBranch was used!',
    };
}

exports.printText = (event, context) => {
    var message = 'text';
    console.log(message);

    return {
        'status': 200,
        'data': 'OK',
        
    };
};
