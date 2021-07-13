
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

exports.printError = (event, context) => {
     var message = 'error';
    console.log(utf8.encode(message));

    return {
        'status': 500,
        'data': 'Error',
        
    };
};
