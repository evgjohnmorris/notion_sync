/**
 * Generated Tool: workspacesTool_0120
 * Domain: Workspaces
 * ID: 0120
 */
exports.workspacesTool_0120 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0120:', error);
    throw error;
  }
};
