expect(x).toEqual(y);
expect(x).toBe(y);
expect(x).toMatch(pattern);
expect(x).toBeDefined();
expect(x).toBeNull();
expect(x).toBeTruthy();
expect(x).toBeFalsy();
expect(x).toContain(y);
expect(x).toBeLessThan(y);
expect(x).toBeGreaterThan(y);
expect(x).toThrow(exception);

expect(x).not.toEqual(y);


beforeEach(function(){
    this.addMatchers({
        toBeFinished: function(){
            return this.actual.isDone();
        }
    });
});

it "should add two numbers" do 
    calc = Calculator.new
    calc.stub(:add).and_return(5)
    calc.add(2, 3).should == 5
end

it("should add two numbers", function(){
    var calc = new Calculator();
    spyOn(calc, 'add').andReturn(5);
    expect(calc.add(2, 3)).toEqual(3);
});



