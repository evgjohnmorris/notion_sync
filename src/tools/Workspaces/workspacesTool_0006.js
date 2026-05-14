/**
 * Generated Tool: workspacesTool_0006
 * Domain: Workspaces
 * ID: 0006
 */
exports.workspacesTool_0006 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0006:', error);
    throw error;
  }
};
