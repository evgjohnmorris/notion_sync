/**
 * Generated Tool: workspacesTool_0306
 * Domain: Workspaces
 * ID: 0306
 */
exports.workspacesTool_0306 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0306:', error);
    throw error;
  }
};
