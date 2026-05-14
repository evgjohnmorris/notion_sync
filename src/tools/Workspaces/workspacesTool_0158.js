/**
 * Generated Tool: workspacesTool_0158
 * Domain: Workspaces
 * ID: 0158
 */
exports.workspacesTool_0158 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0158:', error);
    throw error;
  }
};
