/**
 * Generated Tool: workspacesTool_0880
 * Domain: Workspaces
 * ID: 0880
 */
exports.workspacesTool_0880 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0880:', error);
    throw error;
  }
};
