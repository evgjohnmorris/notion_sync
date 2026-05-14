/**
 * Generated Tool: workspacesTool_0328
 * Domain: Workspaces
 * ID: 0328
 */
exports.workspacesTool_0328 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0328:', error);
    throw error;
  }
};
