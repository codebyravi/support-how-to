---
permalink: manage-user-permissions-for-dedicated-hosting
audit_date: '2020-07-17'
title: 'Manage user permissions for Dedicated Hosting'
type: article
created_date: '2018-11-28'
created_by: Kate Dougherty
last_modified_date: '2021-07-07'
last_modified_by: Cat Lookabaugh
product: Dedicated Hosting
product_url: dedicated-hosting
---

This article describes user permissions for Rackspace Dedicated hosting and
shows you how to manage these permissions.

To manage permissions in the [MyRackspace
portal](https://login.rackspace.com) select **Account > Permissions**.

**Note**: To access the **Permissions** area in the MyRackspace Portal and
modify another user’s permissions, you must have either **Account Administrator**
permission or **Admin** permission. **Account Administrator** permission grants
the user unlimited access to all sections of the MyRackspace Portal. **Admin**
permission (on a device or service) grants the user the ability to access and
manage the device or service.

If you can't find the information you need here, review the **FAQ** section on
the left for answers to common user permission problems.

### Categories of permissions

Two types of permissions are available for Rackspace Dedicated hosting
accounts:

- **Direct permissions**: These grant the user direct access to
  account permissions, linked cloud accounts, devices, or services.

- **Effective permissions**: Users inherit these because of their
  memberships in user and product groups.

**Note**: You can grant a user a combination of direct and effective
permissions. MyRackspace uses the highest level of permission granted.

{{<image src="photo_1.png" alt="" title="">}}

### Methods for assigning permissions

To manage user permissions, log in to the MyRackspace
portal and then select **Account > Permissions**.

You can use the four tabs on the next page to assign permissions in the following ways:

- **Assign by user**
- **Assign by product**
- **Manage groups**
- **Global permissions**

#### Assign by user

This method enables you to select an individual and grant them direct or effective
permissions at the account level. You can also manage a user's access to associated
cloud accounts, devices, services, product groups, and group membership by
selecting the tabs on the **Assign By User** page.

To assign permissions by user, complete the following steps:

1. Select **Account > Permissions**.

2. Select **Assign by User**.

3. Select a user and select from one of the tabs to update the user permissions.

#### Assign by user group

This method enables you to select a group of users and grant them:

- Permissions at the account level.
- Access to linked cloud accounts, devices, services, or product groups.

To assign permissions by user group, perform the following steps:

1. Select **Account > Permissions**.

2. Select **Assign by User**.

3. Select a group from the **User Groups** column.

4. Select the checkbox next to the permissions you want to assign to that group.

5. Click **Save Changes**.

This updates the permissions of all users in the selected group.

#### User permission types

The following table explains the different
permission options.

{{< table "table  table-striped table-bordered" >}}
| Permission | Description |
|---------|--------|
| <b>Account administrator</b> | Grants effective permissions for the entire account, such as accounts, devices, and users. |
| <b>Manage Users</b> | View or edit users on the account. |
| <b>Manage My Contact Information</b> | View and edit personal information associated with your account.|
| <b>Manage SSL Certificates</b> | Manage SSL certificates.     |
| <b>Upgrade Account</b> | Add or remove account products.   |
| <b>View Reports</b> | View reports.    |
| <b>View Account Tickets</b> | View the list of account tickets for Managed Mail, DNS, Billing, or Bandwidth related to any account with direct or effective permissions. |
| <b>Edit Account Tickets</b>| Create and edit account tickets for Managed Mail, DNS, Billing, or Bandwidth to any account with direct or effective permissions.  |
| <b>View Domains</b> | View DNS information for domains.  |
| <b>Edit Domains</b>|  Edit DNS information for domains. |
| <b>View Billing</b>| View invoices and online payments. |
| <b>Edit Billing</b>| Make a payment or set up recurring payments. |
{{< /table >}}

**Note:** Creating product and user groups and using them to manage user
permissions is more efficient than assigning permissions to individual users.

#### Assign by product

This method enables you to manage user access to an individual product or product
group.

To assign permissions by product or product group, perform the following steps:

1. Select **Account > Permissions**.

2. Select **Assign by Product**.

3. Make a selection from the **Product** or **Product Group** column.

4. Update the user, user group, or Group membership permission.

5. Select **Save Changes**.

### Manage groups

The **Manage Groups** tab enables you to create new User and Product groups and
update members.

#### Create a user group

Use the following steps to create a user group:

1. Select **Account > Permissions**.
2. Select **Manage Groups**.
3. At the top of the **User Groups** column, enter a name for the new group and
   select the green plus sign.
4. Select the **Group Members** to add and select **Save Changes**.

#### Create a product group

Use the following steps to create a product group:

1. Select **Account > Permissions**.
2. Select **Product Groups**.
3. At the top of the **Product Groups** column, enter a name for the new group
   and select the green plus sign.
4. Select the **Product** to add and select **Save Changes**.

#### Grant access to a user group or product group

Use the following steps to grant access to a user group or product group:

1. Select **Account > Permissions**.
2. Select **Manage Groups**.
3. Select an existing group from the **User Groups** or **Product Groups** column.
4. Select the member to add.
5. Select **Save Changes**.

#### Delete a user or product group

Use the following steps to delete a user or product group:

1. Select **Account > Permissions**.
2. Select **Manage Groups**.
3. Select an existing group from the **User Groups** or **Product Groups** column.
4. Select the **Actions** dropdown in the upper-right corner.
5. Select Delete Group**.

### Manage global permissions

The **Global Permissions** section lets you make changes across your
entire account.

**Ticketing Settings** enable you to control the tickets that your users have
permission to see when those tickets include one or more devices.

The following table shows the ticketing settings that you need for common
actions or views:

{{< table "table  table-striped table-bordered" >}}
| Ticketing setting  | Functionality |
|---------|--------|
| Flexible Ticket Viewing (default setting)     | Enables users to see tickets that include a device that they have permission to view. For example, if a user has access to device A, they see all of the tickets that include device A, even if the ticket has other devices. If device C is later added to the ticket, the user can still see the ticket, even if the user does not have access to device C.    |
| Strict Ticket Viewing     | Requires users to have access to all the devices on a ticket to see that ticket. For example, if a ticket includes device A and device B, the user must have permissions to both devices to see the ticket. If a ticket the user could see later includes device C, to which the user has no access, the user can no longer see the ticket.   |
{{< /table >}}

### How permissions impact the user experience for tickets

The following table shows the permissions that a user needs to perform common
tasks with tickets:

{{< table "table  table-striped table-bordered" >}}
| Permission required  | Task |
|---------|--------|
| <b>View Tickets</b> or <b>Edit Tickets</b> permission   | View or include another user on an account ticket (a ticket that doesn't have a device or service associated with it).   |
| <b>View</b>, <b>Edit</b>, or <b>Admin</b> permission to that device   | View or include another user on a ticket that has a device associated with it.   |
| <b>View</b>, <b>Edit</b>, or <b>Admin</b> permission to that service   | View or include another user on a ticket that has a service associated with it (such as tickets for Managed Antivirus).   |
{{< /table >}}
