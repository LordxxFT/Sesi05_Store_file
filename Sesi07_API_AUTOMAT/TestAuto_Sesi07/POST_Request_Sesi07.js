const assert = require("assert");
const { expect } = require("chai")
const Ajv = require("ajv");
const { getSystemErrorMessage } = require("util");

describe("POST_Request_regres.in", function () {
        it("New Post should get respons 201", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "POST",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "shinta",
                job: "QA ",
            }),
        });

        const data = await response.json();
        //console.log(data);
        expect(response.status).to.equal(201);
    })
        it("New Post should be success on full body", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "POST",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "GLORIA",
                job: "QA Automation",
                id: Math.floor(Math.random() * 1000), // Random ID for uniqueness
            }),
        });

        const data = await response.json();
        //console.log(data);
        expect(data.name).to.include("GLORIA");
        expect(data.job).to.include("QA Automation");
        expect(response.id).to.not.be.null;
        expect(response.createdAt).to.not.be.null;        
    })
        it("Validate file JSON Schema POST", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "POST",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "Shinta",
                job: "Frontend Developer",
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
                createdAt: { type: "string" }
            },
            required: ["name", "job", "id", "createdAt"]
        };
        const validate = ajv.compile(schema);
        const isValid = validate(data);// Cetak error jika tidak valid
        const errorMessage = JSON.stringify(validate.errors, null, 2);
        expect(isValid, errorMessage).to.be.true;

    })
})