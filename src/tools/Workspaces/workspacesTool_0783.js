/**
 * Generated Tool: workspacesTool_0783
 * Domain: Workspaces
 * ID: 0783
 */
exports.workspacesTool_0783 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0783:', error);
    throw error;
  }
};
