/**
 * Generated Tool: workspacesTool_0497
 * Domain: Workspaces
 * ID: 0497
 */
exports.workspacesTool_0497 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0497:', error);
    throw error;
  }
};
