define(['parse'], function(parse){
    
    return {
        'module': "String Tests",
        'tests': [
            ["Simple String",
            function(){
                var p = parse.string('abc');
                
                assert.deepEqual(parse.run(p, "abc"), 'abc');
                assert.deepEqual(parse.run(p, "abcd"), 'abc');
                
                assert.throws(parse.run.bind(undefined, p, "ab"));
            }],
            ["String Object",
            function(){
                 assert.deepEqual(parse.run(parse.string('abc'), new String('abc')), 'abc');
                 assert.deepEqual(parse.run(parse.string(new String('abc')), 'abc'), 'abc');
                 assert.deepEqual(parse.run(parse.string(new String('abc')), new String('abc')), 'abc');
            }],
            ["Multi String",
             function(){
                 var p = parse.string('ab');
                 
                 assert.deepEqual(parse.run(p, ["a", "b"]), 'ab');
                 
                 assert.throws(parse.run.bind(undefined, p, ["ab"], 'ab'));
             }],
           
        ],
    };
});
