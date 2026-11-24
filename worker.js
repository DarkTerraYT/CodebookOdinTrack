importScripts("https://cdn.jsdelivr.net/npm/@live-codes/odin-wasm@0.2.0/dist/odin-wasm.global.js")

let compilerPromise = null

function getCompiler() {
    if (!compilerPromise)
    {
        compilerPromise = createCompiler({
            baseUrl: new URL('/odin/', location.origin),
        });
    }
    return compilerPromise
}

onmessage = async (e) => {
    if (e.data.type !== "run") return;
    try 
    {
        const compiler = getCompiler();

        const result = await compiler.run(e.data.code);

        postMessage({type: "done", result: result.output});
    }
    catch (err)
    {
        postMessage({type: "done", error: err.message || String(err)})
    }
}