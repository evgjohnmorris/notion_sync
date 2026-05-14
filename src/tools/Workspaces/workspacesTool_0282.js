/**
 * Generated Tool: workspacesTool_0282
 * Domain: Workspaces
 * ID: 0282
 */
exports.workspacesTool_0282 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0282:', error);
    throw error;
  }
};
