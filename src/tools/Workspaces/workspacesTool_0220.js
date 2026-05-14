/**
 * Generated Tool: workspacesTool_0220
 * Domain: Workspaces
 * ID: 0220
 */
exports.workspacesTool_0220 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0220:', error);
    throw error;
  }
};
