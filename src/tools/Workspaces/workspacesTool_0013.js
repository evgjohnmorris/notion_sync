/**
 * Generated Tool: workspacesTool_0013
 * Domain: Workspaces
 * ID: 0013
 */
exports.workspacesTool_0013 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0013:', error);
    throw error;
  }
};
