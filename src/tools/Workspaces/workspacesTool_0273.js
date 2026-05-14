/**
 * Generated Tool: workspacesTool_0273
 * Domain: Workspaces
 * ID: 0273
 */
exports.workspacesTool_0273 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0273:', error);
    throw error;
  }
};
