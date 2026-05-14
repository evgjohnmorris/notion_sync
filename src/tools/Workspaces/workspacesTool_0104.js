/**
 * Generated Tool: workspacesTool_0104
 * Domain: Workspaces
 * ID: 0104
 */
exports.workspacesTool_0104 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0104:', error);
    throw error;
  }
};
