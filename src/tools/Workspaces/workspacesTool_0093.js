/**
 * Generated Tool: workspacesTool_0093
 * Domain: Workspaces
 * ID: 0093
 */
exports.workspacesTool_0093 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0093:', error);
    throw error;
  }
};
