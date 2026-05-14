/**
 * Generated Tool: workspacesTool_0294
 * Domain: Workspaces
 * ID: 0294
 */
exports.workspacesTool_0294 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0294:', error);
    throw error;
  }
};
