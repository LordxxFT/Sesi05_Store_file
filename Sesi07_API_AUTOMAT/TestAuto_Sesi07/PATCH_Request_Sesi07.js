const assert = require("assert");
const { expect } = require("chai")
const Ajv = require("ajv");
const { getSystemErrorMessage } = require("util");


describe("PATCH_Request_regres.in", function () {
    it("Patch should get response 200", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "PATCH",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "Sinta",
                job: "Developer",
            }),
        });

        const data = await response.json();
        //console.log(data);
        expect(response.status).to.equal(200);
    })
    
    it("Patch should be success on full body", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "PATCH",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "Desi",
                job: "QA Manual",
                id: Math.floor(Math.random() * 1000), // Random ID for uniqueness
            }),
        });

        const data = await response.json();
        //console.log(data);
        expect(data.name).to.include("Desi");
        expect(data.job).to.include("QA Manual");
        expect(response.id).to.not.be.null;
        expect(response.updatedAt).to.not.be.null;        
    })
    
    it("Validate file JSON Schema PATCH", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "PATCH",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "Greta",
                job: "Software Engineer",
                id: Math.floor(Math.random() * 1000), // Random ID for uniqueness
            }),
        });

        const data = await response.json();
        //console.log(data);

        // validasi schema
        const ajv = new Ajv({ allErrors: true }); 
        const schema = {
            type: "object",
            properties: {
                name: { type: "string" },
                job: { type: "string" },
                id: { type: "number" },
                updatedAt: { type: "string" }
            },
            required: ["name", "job", "id", "updatedAt"]
        };
        const validate = ajv.compile(schema);
        const valid = validate(data);
        if (!valid) {
            console.error(validate.errors);
        }
        expect(valid).to.be.true;
    })
})