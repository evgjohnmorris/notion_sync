/**
 * Generated Tool: workspacesTool_0970
 * Domain: Workspaces
 * ID: 0970
 */
exports.workspacesTool_0970 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0970:', error);
    throw error;
  }
};
