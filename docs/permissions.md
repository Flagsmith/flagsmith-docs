description: Team member and group permissions.

# Permissions

Bullet Train provides fine-grained permissions to help larger teams manage access and roles across projects and environments. 

Permissions are assigned to individual team members or to groups. 

# Groups

Groups are a convenient way to manage permissions for multiple team members. Groups can contain any number of team members. You can create groups with the Organisation Settings page. 

# Organisations

Team members can be defined as Organisation Administrators. This is effectively a super-user role, and gives full read/write access to every Project, Environment, Flag, Remote Config and Segment within that organisation.

# Projects

Team Members and Groups can be given individual roles at a Project level. 

|  **Role**  | **Ability**     |
| -------- | ------------- | 
| Administrator | Full Read/Write ver all Environments, Feature Flag, Remote Config and Segment values |
| View Project | Can see the project within their account |
| Create Environment | Can create new Environments within the Project |
| Create Feature | Can create a new Feature / Remote Config  | 
| Delete Feature | Can remove an existing Feature / Remote Config entirely from the Project | 
| Edit Feature | Can modify existing Feature / Remote Config | 

# Environments

Team Members and Groups can be given individual roles at an Environment level. 

|  **Role**  | **Ability**     |
| -------- | ------------- | 
| Administrator | Can modify Feature Flag, Remote Config and Segment values |
| View Environment  | Can see the Environment within their account |
