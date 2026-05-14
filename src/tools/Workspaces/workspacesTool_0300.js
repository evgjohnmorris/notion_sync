/**
 * Generated Tool: workspacesTool_0300
 * Domain: Workspaces
 * ID: 0300
 */
exports.workspacesTool_0300 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0300:', error);
    throw error;
  }
};
