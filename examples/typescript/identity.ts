/*
  This is an example where we will create a new user, a new group and assign that user to the group
  We will then remove the user from the group, delete the group, delete the user.
*/
import * as identity from "oci-identity";
import common = require("oci-common");

import { ConfigFileReader } from "oci-common/lib/config-file-reader";

const config = ConfigFileReader.parseDefault(null);

const configurationFilePath = "~/.oci/config";
const configProfile = "DEFAULT";

const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

const profile = config.accumulator.configurationsByProfile.get("DEFAULT");
let tenancy = "";
if (profile) {
  tenancy = profile.get("tenancy") as string;
} else {
  tenancy = "";
}
const tenancyId: identity.requests.ListRegionSubscriptionsRequest = {
  tenancyId: tenancy || ""
};

(async () => {
  const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });
  const regions = await identityClient.listRegionSubscriptions(tenancyId);
  for (let i = 0; i < regions.items.length; i++) {
    if (regions.items[i].isHomeRegion) {
      identityClient.regionId = regions.items[i].regionName;
    }
  }

  // Create a new user
  const userName = "testUser";

  console.log(`Creating a new user ${userName} in compartment ${tenancy}`);

  const userDetails: identity.models.CreateUserDetails = {
    compartmentId: tenancy,
    name: userName,
    description: "Created by a TypeScript SDK example"
  };

  const userReq: identity.requests.CreateUserRequest = {
    createUserDetails: userDetails
  };
  const user = await identityClient.createUser(userReq);
  console.log("user: ", user);

  // Create a new group
  const groupName = "testGroup";
  console.log(`Creating a new group ${groupName} in compartment ${tenancy}`);
  const groupDetails: identity.models.CreateGroupDetails = {
    compartmentId: tenancy,
    name: groupName,
    description: "Created by a TypeScript SDK example"
  };

  const groupReq: identity.requests.CreateGroupRequest = {
    createGroupDetails: groupDetails
  };

  const group = await identityClient.createGroup(groupReq);
  console.log("group: ", group);

  // Adding new user to the new group
  console.log("Adding new user to the new group");
  const memberDetails: identity.models.AddUserToGroupDetails = {
    userId: user.user.id,
    groupId: group.group.id
  };

  const memberDetailsReq: identity.requests.AddUserToGroupRequest = {
    addUserToGroupDetails: memberDetails
  };
  const membership = await identityClient.addUserToGroup(memberDetailsReq);
  console.log("membership: ", membership);

  // Clean up the resource
  console.log(` Cleaning up resources. Removing ${userName} from ${groupName}`);
  const removeUserFromMembership: identity.requests.RemoveUserFromGroupRequest = {
    userGroupMembershipId: membership.userGroupMembership.id
  };
  await identityClient.removeUserFromGroup(removeUserFromMembership);

  console.log(`Deleting user ${userName}`);
  const deleteUserReq: identity.requests.DeleteUserRequest = {
    userId: user.user.id
  };
  await identityClient.deleteUser(deleteUserReq);

  console.log(`Deleting group ${groupName}`);
  const deleteGroupReq: identity.requests.DeleteGroupRequest = {
    groupId: group.group.id
  };
  await identityClient.deleteGroup(deleteGroupReq);
  console.log("Finished cleaning all resources");
})();
