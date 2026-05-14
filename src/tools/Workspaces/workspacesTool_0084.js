/**
 * Generated Tool: workspacesTool_0084
 * Domain: Workspaces
 * ID: 0084
 */
exports.workspacesTool_0084 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0084:', error);
    throw error;
  }
};
