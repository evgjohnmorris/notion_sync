/**
 * Generated Tool: workspacesTool_0764
 * Domain: Workspaces
 * ID: 0764
 */
exports.workspacesTool_0764 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0764:', error);
    throw error;
  }
};
