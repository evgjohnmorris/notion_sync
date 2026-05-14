/**
 * Generated Tool: workspacesTool_0154
 * Domain: Workspaces
 * ID: 0154
 */
exports.workspacesTool_0154 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0154:', error);
    throw error;
  }
};
