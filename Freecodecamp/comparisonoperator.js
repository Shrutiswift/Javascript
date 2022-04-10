function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        console.log("Outside");
    }
    console.log("Inside");
}
testLogicalOr(15);

