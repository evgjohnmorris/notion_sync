/**
 * Generated Tool: workspacesTool_0146
 * Domain: Workspaces
 * ID: 0146
 */
exports.workspacesTool_0146 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0146:', error);
    throw error;
  }
};
