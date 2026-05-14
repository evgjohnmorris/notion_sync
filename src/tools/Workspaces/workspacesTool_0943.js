/**
 * Generated Tool: workspacesTool_0943
 * Domain: Workspaces
 * ID: 0943
 */
exports.workspacesTool_0943 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0943:', error);
    throw error;
  }
};
