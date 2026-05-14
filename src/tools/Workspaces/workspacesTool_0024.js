/**
 * Generated Tool: workspacesTool_0024
 * Domain: Workspaces
 * ID: 0024
 */
exports.workspacesTool_0024 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0024:', error);
    throw error;
  }
};
