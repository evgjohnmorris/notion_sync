/**
 * Generated Tool: workspacesTool_0195
 * Domain: Workspaces
 * ID: 0195
 */
exports.workspacesTool_0195 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0195:', error);
    throw error;
  }
};
