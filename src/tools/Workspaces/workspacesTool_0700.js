/**
 * Generated Tool: workspacesTool_0700
 * Domain: Workspaces
 * ID: 0700
 */
exports.workspacesTool_0700 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0700:', error);
    throw error;
  }
};
