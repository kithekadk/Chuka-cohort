"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrganizations = exports.addOrganization = exports.updateOrganization = exports.deleteAnOrganization = exports.getOneOrganization = void 0;
const organization_service_1 = require("../services/organization.service");
let orgService = new organization_service_1.organizationService();
let addOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, description, profile_image } = req.body;
        let response = orgService.createOrganization(req.body);
        if (typeof (response) == "string") {
            return res.json({ error: response });
        }
        else {
            return res.json({
                message: "Organization created successfully",
                organization: response
            });
        }
    }
    catch (error) {
        return res.json({
            error: error
        });
    }
});
exports.addOrganization = addOrganization;
let getAllOrganizations = (req, res) => {
    try {
        let organizations = orgService.fetchOrganizations();
        return res.status(201).json({
            organizations
        });
    }
    catch (error) {
        return res.json({
            error: error
        });
    }
};
exports.getAllOrganizations = getAllOrganizations;
function getOneOrganization(req, res) {
    try {
        let { org_id } = req.params;
        let response = orgService.fetchOneOrganization(org_id);
        if (typeof response == "string") {
            return res.status(404).json({ error: response });
        }
        else {
            return res.status(201).json({ organization: response });
        }
    }
    catch (error) {
        return res.json({
            error: error
        });
    }
}
exports.getOneOrganization = getOneOrganization;
function deleteAnOrganization(req, res) {
    try {
        let org_id = req.params.org_id;
        let response = orgService.deleteOrganization(org_id);
        return res.json({ response });
    }
    catch (error) {
        return res.json({
            error: error
        });
    }
}
exports.deleteAnOrganization = deleteAnOrganization;
function updateOrganization(req, res) {
    try {
        let org_id = req.params.org_id;
        let { name, description, profile_image } = req.body;
        let organization = {
            id: org_id,
            name,
            description,
            profile_image
        };
        let response = orgService.updateOrganization(org_id, organization);
        if (typeof response == "string") {
            return res.json({ response });
        }
        else {
            return res.json({ message: "Organization updated successfully" });
        }
    }
    catch (error) {
        return res.json({
            error: error
        });
    }
}
exports.updateOrganization = updateOrganization;
