/**
 * Generated Tool: workspacesTool_0838
 * Domain: Workspaces
 * ID: 0838
 */
exports.workspacesTool_0838 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0838:', error);
    throw error;
  }
};
