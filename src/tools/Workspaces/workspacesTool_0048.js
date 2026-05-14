/**
 * Generated Tool: workspacesTool_0048
 * Domain: Workspaces
 * ID: 0048
 */
exports.workspacesTool_0048 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0048:', error);
    throw error;
  }
};
