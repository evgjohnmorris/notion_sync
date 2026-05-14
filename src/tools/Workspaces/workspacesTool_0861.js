/**
 * Generated Tool: workspacesTool_0861
 * Domain: Workspaces
 * ID: 0861
 */
exports.workspacesTool_0861 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0861:', error);
    throw error;
  }
};
