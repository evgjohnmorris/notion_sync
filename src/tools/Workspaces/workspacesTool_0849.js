/**
 * Generated Tool: workspacesTool_0849
 * Domain: Workspaces
 * ID: 0849
 */
exports.workspacesTool_0849 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0849:', error);
    throw error;
  }
};
