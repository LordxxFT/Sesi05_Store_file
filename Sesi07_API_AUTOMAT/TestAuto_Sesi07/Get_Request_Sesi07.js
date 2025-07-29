const assert = require("assert");
const { expect } = require("chai")
const Ajv = require("ajv");
const { getSystemErrorMessage } = require("util");


describe("Get_Request_regres.in", function () {
    it("Get Status respons 200", async function () {
        const response = await fetch("https://reqres.in/api/users/2");
        const responseAPI = await response.json();


        // chai
        expect(response.status).to.equal(200)
        
    })
    it("Get API data fist and last name", async function () {
        const response = await fetch("https://reqres.in/api/users/2");
        const responseAPI = await response.json();


        // chai
        expect(responseAPI.data.first_name).to.include("Janet");
        expect(responseAPI.data.last_name).to.include("Weaver");
    })
    it("Validate file JSON Schema GET", async function () {
        const response = await fetch("https://reqres.in/api/users/2");
        const responseAPI = await response.json();

        // validasi schema
        const ajv = new Ajv({ allErrors: true }); 
        const schema = {
            type: "object",
            properties: {
                data: {
                    type: "object",
                    properties: {
                        id: { type: "number" },
                        email: { type: "string" },
                        first_name: { type: "string" },
                        last_name: { type: "string" },
                        avatar: { type: "string" }
                    },
                    required: ["id", "email", "first_name", "last_name", "avatar"]
                }
            },
            required: ["data"]
        };
        const validate = ajv.compile(schema);
        const valid = validate(responseAPI);
        if (!valid) {
            console.error(validate.errors);
        }
        expect(valid).to.be.true;
    })
})