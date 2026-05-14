/**
 * Generated Tool: workspacesTool_0413
 * Domain: Workspaces
 * ID: 0413
 */
exports.workspacesTool_0413 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0413:', error);
    throw error;
  }
};
