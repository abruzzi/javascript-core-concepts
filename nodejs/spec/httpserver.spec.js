describe("http server", function(){
    beforeEach(function(){
    });

    it("should invoke the map function", function(){
        request("http://localhost:8080/upper", function(error, response, body){
            expect(body).toEqual("hello world");
            done();
        });
    });
});
