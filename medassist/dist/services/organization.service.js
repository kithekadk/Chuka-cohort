"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationService = void 0;
const uuid_1 = require("uuid");
let Organizations = [];
class organizationService {
    createOrganization(org) {
        let newOrganization = {
            id: (0, uuid_1.v4)(),
            name: org.name,
            description: org.description,
            profile_image: org.profile_image
        };
        if (newOrganization.name && newOrganization.description && newOrganization.profile_image) {
            Organizations.push(newOrganization);
            return newOrganization;
        }
        else {
            return "Organization was not created";
        }
    }
    updateOrganization(org_id, org) {
        //check if organizatio exists
        let organization_index = Organizations.findIndex(organisation => {
            return organisation.id == org_id;
        });
        let existing_details = this.fetchOneOrganization(org_id);
        console.log(existing_details);
        let organization = {
            id: Organizations[organization_index].id,
            name: org.name,
            description: org.description,
            profile_image: org.profile_image
        };
        if (organization_index < 0) {
            return "Organization not found";
        }
        else {
            Organizations.splice(organization_index, 1, organization);
            return organization;
        }
    }
    fetchOrganizations() {
        return Organizations;
    }
    fetchOneOrganization(org_id) {
        let organization = Organizations.filter(org => org.id == org_id);
        if (organization.length == 0) {
            return "No organization found";
        }
        else {
            return organization;
        }
    }
    deleteOrganization(org_id) {
        let organization_index = Organizations.findIndex(organisation => {
            return organisation.id == org_id;
        });
        if (organization_index < 0) {
            return "Organization not found";
        }
        else {
            Organizations.splice(organization_index, 1);
            return "Organization deleted successfully";
        }
    }
}
exports.organizationService = organizationService;
