/**
 * Generated Tool: workspacesTool_0267
 * Domain: Workspaces
 * ID: 0267
 */
exports.workspacesTool_0267 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0267:', error);
    throw error;
  }
};
