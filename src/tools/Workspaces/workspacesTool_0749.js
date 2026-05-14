/**
 * Generated Tool: workspacesTool_0749
 * Domain: Workspaces
 * ID: 0749
 */
exports.workspacesTool_0749 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0749:', error);
    throw error;
  }
};
