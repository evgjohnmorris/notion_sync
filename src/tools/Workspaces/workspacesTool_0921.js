/**
 * Generated Tool: workspacesTool_0921
 * Domain: Workspaces
 * ID: 0921
 */
exports.workspacesTool_0921 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0921:', error);
    throw error;
  }
};
