/**
 * Generated Tool: workspacesTool_0180
 * Domain: Workspaces
 * ID: 0180
 */
exports.workspacesTool_0180 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0180:', error);
    throw error;
  }
};
