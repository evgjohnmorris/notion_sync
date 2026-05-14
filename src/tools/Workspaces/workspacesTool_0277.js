/**
 * Generated Tool: workspacesTool_0277
 * Domain: Workspaces
 * ID: 0277
 */
exports.workspacesTool_0277 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0277:', error);
    throw error;
  }
};
