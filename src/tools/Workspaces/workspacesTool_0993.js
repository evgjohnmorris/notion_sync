/**
 * Generated Tool: workspacesTool_0993
 * Domain: Workspaces
 * ID: 0993
 */
exports.workspacesTool_0993 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0993:', error);
    throw error;
  }
};
