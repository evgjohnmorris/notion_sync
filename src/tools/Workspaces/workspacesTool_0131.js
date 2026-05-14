/**
 * Generated Tool: workspacesTool_0131
 * Domain: Workspaces
 * ID: 0131
 */
exports.workspacesTool_0131 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0131:', error);
    throw error;
  }
};
