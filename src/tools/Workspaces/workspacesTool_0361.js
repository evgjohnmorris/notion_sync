/**
 * Generated Tool: workspacesTool_0361
 * Domain: Workspaces
 * ID: 0361
 */
exports.workspacesTool_0361 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0361:', error);
    throw error;
  }
};
