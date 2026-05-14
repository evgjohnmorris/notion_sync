/**
 * Generated Tool: workspacesTool_0399
 * Domain: Workspaces
 * ID: 0399
 */
exports.workspacesTool_0399 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0399:', error);
    throw error;
  }
};
