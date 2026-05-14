/**
 * Generated Tool: workspacesTool_0109
 * Domain: Workspaces
 * ID: 0109
 */
exports.workspacesTool_0109 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0109:', error);
    throw error;
  }
};
