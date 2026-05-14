/**
 * Generated Tool: workspacesTool_0391
 * Domain: Workspaces
 * ID: 0391
 */
exports.workspacesTool_0391 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0391:', error);
    throw error;
  }
};
