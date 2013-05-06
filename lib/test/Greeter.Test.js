describe("Greeter is expected to", function() {
    it("greet", function () {
        var greeter = new myapp.Greeter();
        expect(greeter.greet("World")).toBe("Hello World!");
    });
    it("greet null", function() {
        var greeter = new myapp.Greeter();
        expect(greeter.greet(null)).toBeNull();
    });
});
