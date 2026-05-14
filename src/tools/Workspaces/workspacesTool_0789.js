/**
 * Generated Tool: workspacesTool_0789
 * Domain: Workspaces
 * ID: 0789
 */
exports.workspacesTool_0789 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0789:', error);
    throw error;
  }
};
