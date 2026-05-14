/**
 * Generated Tool: workspacesTool_0936
 * Domain: Workspaces
 * ID: 0936
 */
exports.workspacesTool_0936 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0936:', error);
    throw error;
  }
};
