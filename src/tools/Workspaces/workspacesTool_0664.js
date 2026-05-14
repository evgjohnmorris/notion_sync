/**
 * Generated Tool: workspacesTool_0664
 * Domain: Workspaces
 * ID: 0664
 */
exports.workspacesTool_0664 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0664:', error);
    throw error;
  }
};
