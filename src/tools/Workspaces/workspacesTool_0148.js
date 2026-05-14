/**
 * Generated Tool: workspacesTool_0148
 * Domain: Workspaces
 * ID: 0148
 */
exports.workspacesTool_0148 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0148:', error);
    throw error;
  }
};
