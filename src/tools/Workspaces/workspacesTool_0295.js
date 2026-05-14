/**
 * Generated Tool: workspacesTool_0295
 * Domain: Workspaces
 * ID: 0295
 */
exports.workspacesTool_0295 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0295:', error);
    throw error;
  }
};
