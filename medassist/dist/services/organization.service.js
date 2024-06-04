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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationService = void 0;
const mssql_1 = __importDefault(require("mssql"));
const lodash_1 = __importDefault(require("lodash"));
const uuid_1 = require("uuid");
const sql_config_1 = require("../config/sql.config");
// let Organizations: organization[] = []
class organizationService {
    createOrganization(org) {
        return __awaiter(this, void 0, void 0, function* () {
            let pool = yield mssql_1.default.connect(sql_config_1.sqlConfig);
            // Organizations.push(newOrganization);
            let result = yield (yield pool.request()
                .input("id", (0, uuid_1.v4)())
                .input("name", org.name)
                .input("description", org.description)
                .input("profile_image", org.profile_image).execute("createOrganization")).rowsAffected;
            console.log(result);
            if (result[0] == 1) {
                return {
                    message: "Organization created successfully"
                };
            }
            else {
                return {
                    error: "Unable to create organization"
                };
            }
        });
    }
    updateOrganization(org_id, org) {
        return __awaiter(this, void 0, void 0, function* () {
            let pool = yield mssql_1.default.connect(sql_config_1.sqlConfig);
            //check if organizatio exists
            let organizationExists = yield (yield pool.request().query(`SELECT * FROM Organizations WHERE id='${org_id}'`)).recordset;
            console.log(organizationExists);
            if (lodash_1.default.isEmpty(organizationExists)) {
                return {
                    error: "Organization not found"
                };
            }
            else {
                let result = (yield pool.request()
                    .input("id", organizationExists[0].id)
                    .input("name", org.name)
                    .input("description", org.description)
                    .input("profile_image", org.profile_image).execute("updateOrganization")).rowsAffected;
                if (result[0] < 1) {
                    return {
                        error: "Was not able to update"
                    };
                }
                else {
                    return {
                        message: "Organization updated successfully"
                    };
                }
            }
        });
    }
    fetchOrganizations() {
        return __awaiter(this, void 0, void 0, function* () {
            let pool = yield mssql_1.default.connect(sql_config_1.sqlConfig);
            let response = (yield pool.request().query('SELECT * FROM Organizations')).recordset;
            return {
                organizations: response
            };
        });
    }
    fetchOneOrganization(org_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let pool = yield mssql_1.default.connect(sql_config_1.sqlConfig);
            let response = (yield pool.request().query(`SELECT * FROM Organizations WHERE id = '${org_id}'`)).recordset;
            if (response.length < 1) {
                return "No organization found";
            }
            else {
                return {
                    organization: response[0]
                };
            }
        });
    }
    deleteOrganization(org_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let pool = yield mssql_1.default.connect(sql_config_1.sqlConfig);
            let response = (yield pool.request().query(`SELECT * FROM Organizations WHERE id = '${org_id}'`)).recordset;
            if (response.length < 1) {
                return "Organization not found";
            }
            else {
                yield pool.request().query(`DELETE FROM Organizations WHERE id = '${org_id}'`);
                return "Organization deleted successfully";
            }
        });
    }
}
exports.organizationService = organizationService;
