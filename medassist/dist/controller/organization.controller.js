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
        let response = yield orgService.createOrganization(req.body);
        console.log(response);
        return res.json(response);
    }
    catch (error) {
        return res.json({
            error: error
        });
    }
});
exports.addOrganization = addOrganization;
let getAllOrganizations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let organizations = yield orgService.fetchOrganizations();
        return res.status(201).json(organizations);
    }
    catch (error) {
        return res.json({
            error: error
        });
    }
});
exports.getAllOrganizations = getAllOrganizations;
function getOneOrganization(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let { org_id } = req.params;
            let response = yield orgService.fetchOneOrganization(org_id);
            return res.status(201).json(response);
        }
        catch (error) {
            return res.json({
                error: error
            });
        }
    });
}
exports.getOneOrganization = getOneOrganization;
function deleteAnOrganization(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let org_id = req.params.org_id;
            let response = yield orgService.deleteOrganization(org_id);
            return res.json(response);
        }
        catch (error) {
            return res.json({
                error: error
            });
        }
    });
}
exports.deleteAnOrganization = deleteAnOrganization;
function updateOrganization(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let org_id = req.params.org_id;
            let { name, description, profile_image } = req.body;
            let organization = {
                id: org_id,
                name,
                description,
                profile_image
            };
            let response = yield orgService.updateOrganization(org_id, organization);
            return res.json(response);
        }
        catch (error) {
            return res.json({
                error: error
            });
        }
    });
}
exports.updateOrganization = updateOrganization;
