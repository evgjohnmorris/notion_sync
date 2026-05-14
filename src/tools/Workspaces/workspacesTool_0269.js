/**
 * Generated Tool: workspacesTool_0269
 * Domain: Workspaces
 * ID: 0269
 */
exports.workspacesTool_0269 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0269:', error);
    throw error;
  }
};
