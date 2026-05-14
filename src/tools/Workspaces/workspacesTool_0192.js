/**
 * Generated Tool: workspacesTool_0192
 * Domain: Workspaces
 * ID: 0192
 */
exports.workspacesTool_0192 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0192:', error);
    throw error;
  }
};
