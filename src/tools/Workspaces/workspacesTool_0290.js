/**
 * Generated Tool: workspacesTool_0290
 * Domain: Workspaces
 * ID: 0290
 */
exports.workspacesTool_0290 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0290:', error);
    throw error;
  }
};
