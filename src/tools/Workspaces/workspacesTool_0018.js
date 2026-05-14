/**
 * Generated Tool: workspacesTool_0018
 * Domain: Workspaces
 * ID: 0018
 */
exports.workspacesTool_0018 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0018:', error);
    throw error;
  }
};
