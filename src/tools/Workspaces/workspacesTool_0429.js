/**
 * Generated Tool: workspacesTool_0429
 * Domain: Workspaces
 * ID: 0429
 */
exports.workspacesTool_0429 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0429:', error);
    throw error;
  }
};
