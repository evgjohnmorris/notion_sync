/**
 * Generated Tool: workspacesTool_0832
 * Domain: Workspaces
 * ID: 0832
 */
exports.workspacesTool_0832 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0832:', error);
    throw error;
  }
};
