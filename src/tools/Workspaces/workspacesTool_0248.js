/**
 * Generated Tool: workspacesTool_0248
 * Domain: Workspaces
 * ID: 0248
 */
exports.workspacesTool_0248 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0248:', error);
    throw error;
  }
};
