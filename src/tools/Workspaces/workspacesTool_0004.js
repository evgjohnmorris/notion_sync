/**
 * Generated Tool: workspacesTool_0004
 * Domain: Workspaces
 * ID: 0004
 */
exports.workspacesTool_0004 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0004:', error);
    throw error;
  }
};
