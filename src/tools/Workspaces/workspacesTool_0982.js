/**
 * Generated Tool: workspacesTool_0982
 * Domain: Workspaces
 * ID: 0982
 */
exports.workspacesTool_0982 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0982:', error);
    throw error;
  }
};
