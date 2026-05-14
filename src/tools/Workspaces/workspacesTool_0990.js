/**
 * Generated Tool: workspacesTool_0990
 * Domain: Workspaces
 * ID: 0990
 */
exports.workspacesTool_0990 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0990:', error);
    throw error;
  }
};
