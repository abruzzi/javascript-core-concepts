describe("item works well", function(){
    var db = new Database();

    beforeEach(function(){
        //mock it, we don't touch the real database
        spyOn(db, 'fetch').andReturn({'id': 1, 'name': 'original'});
        spyOn(db, 'sync');
    });

    it("should not save data to database", function(){
        var record = db.fetch(1);
        var item = new Item(db, record);

        record.name = "changed";
        //dont save then

        //make sure the underlying db.sync is invoked
        expect(db.sync).not.toHaveBeenCalled();
    });

    it("should save data to database", function(){
        var record = db.fetch(1);
        var item = new Item(db, record);

        record.name = "changed";
        item.save(record);

        //make sure the underlying db.sync is invoked
        expect(db.sync).toHaveBeenCalledWith(record);
    });
});

describe("spy on methods", function(){
    it("should spy on static method of word corrector", function(){
        spyOn(WordCorrector, 'dict');
        WordCorrector.dict();
        expect(WordCorrector.dict).toHaveBeenCalled();
    });

    it("should spy on instance of word corrector", function(){
        var wc = new WordCorrector(function(){});
        spyOn(wc, 'correct');
        
        wc.correct('hallo');

        expect(wc.correct).toHaveBeenCalledWith('hallo');
    });

    it("should throw exception when no strategy", function(){
        var wc = new WordCorrector(function(){});
        spyOn(wc, 'correct').andThrow("no strategy specified");
        
        expect(wc.correct).toThrow();
    });
});
 
describe("mock async calls", function(){
    it("should send request to correct url", function(){
        spyOn($, 'ajax');

        var callback = jasmine.createSpy();
        getContactById(1, callback);

        expect($.ajax.mostRecentCall.args[0]['url']).toContain('/contacts/1');
    });

    it("should execute callback when success", function(){
        spyOn($, 'ajax').andCallFake(function(params){
            params.success();
        });

        var callback = jasmine.createSpy();
        getContactById(1, callback);

        expect(callback).toHaveBeenCalled();
    });

    it("should make a real ajax request", function(){
        var callback = jasmine.createSpy();
        getContactById(1, callback);

        waitsFor(function(){
            return callback.callCount > 0;
        });

        runs(function(){
            expect(callback).toHaveBeenCalled();
        });
    });
});
