
exports.myfunction = (event, context) => {
    return {
        'data': 'BrTestingBranch was used!',
    };
}

exports.printUtf8 = (event, context) => {
    var message = 'text';
    console.log(utf8.encode(message));

    return {
        'status': 200,
        'data': 'OK',
        
    };
};
