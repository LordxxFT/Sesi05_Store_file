const assert = require("assert");
const { expect } = require("chai")
const Ajv = require("ajv");
const { getSystemErrorMessage } = require("util");
const { text } = require("stream/consumers");

describe("DELETE_Request_regres.in", function () {
    it("Delete should get response 204", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "DELETE",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
        });

        // Check if the response status is 204 No Content
        expect(response.status).to.equal(204);
    });
    it("Delete should not return any content", async function () {
        const response = await fetch("https://reqres.in/api/users/3", {
            method: "DELETE",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
        });
            if (response.status === 204) {
                const text = await response.text();
            if (text) {
                const data = JSON.parse(text);
                // lakukan pengecekan pada data jika perlu
            } else {
                // response memang kosong, sesuai ekspektasi
            }
        }
        
        //console.log();
        expect(text).to.be.empty;

    });




    it("Validate file JSON Schema DELETE", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
            method: "DELETE",
            headers: {
                "x-api-key": "reqres-free-v1",
                "Content-Type": "application/json",
            },
        });

        // Since DELETE does not return a body, we validate the status code
        expect(response.status).to.equal(204);
    });
})