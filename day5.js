async function test() {
    try {
        let result = await Promise.resolve("Success!");
        console.log(result);
    } catch (error) {
        console.log("Error");
    }
}

test();